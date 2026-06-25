import { NextResponse } from "next/server";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_MODEL = "gemini-2.5-flash-lite";
const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 1500;

function cleanSkills(text) {
  if (typeof text !== "string") {
    return "";
  }

  return text
    .trim()
    .replace(/^\*+/, "")
    .replace(/\*+$/, "")
    .replace(/\n/g, ", ")
    .replace(/\s*,\s*/g, ", ")
    .split(",")
    .map((skill) => skill.trim())
    .filter(Boolean)
    .join(", ");
}

export async function POST(request) {
  if (!GEMINI_API_KEY) {
    return NextResponse.json(
      { error: "Missing Gemini API key." },
      { status: 500 }
    );
  }

  const { jobTitle } = await request.json();

  if (!jobTitle || !jobTitle.trim()) {
    return NextResponse.json(
      { error: "Provide a job title to suggest skills." },
      { status: 400 }
    );
  }

  const prompt = `Provide 8-10 relevant resume skills for the following job title. Return only plain comma-separated skills in one line, with no markdown, no numbering, no bullets, no explanation, and no extra text.\n\nJob Title: ${jobTitle.trim()}`;

  try {
    let response;
    let data;

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt += 1) {
      response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": GEMINI_API_KEY,
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  { text: prompt },
                ],
              },
            ],
          }),
        }
      );

      data = await response.json();

      if (response.ok) {
        break;
      }

      const isHighDemand = response.status === 503;
      console.error("Gemini skill suggestion error", {
        attempt,
        status: response.status,
        body: data,
      });

      if (isHighDemand && attempt < MAX_RETRIES) {
        await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS));
        continue;
      }

      break;
    }

    if (!response.ok || !data?.candidates?.[0]?.content?.parts?.[0]?.text) {
      return NextResponse.json(
        { error: data?.error?.message || "Gemini skill suggestion failed." },
        { status: response.status }
      );
    }

    const rawSkills = data.candidates[0].content.parts[0].text;
    const skills = cleanSkills(rawSkills);

    return NextResponse.json({ skills });
  } catch (error) {
    console.error("Gemini skill suggestion failed", error);
    return NextResponse.json(
      { error: error?.message || "AI skill suggestion failed." },
      { status: 500 }
    );
  }
}
