import { NextResponse } from "next/server";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_MODEL = "gemini-2.5-flash-lite";
const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 1500;

function cleanSummary(text) {
  if (typeof text !== "string") {
    return "";
  }

  let cleaned = text.trim();
  cleaned = cleaned.replace(/^\*+/, "").replace(/\*+$/, "").trim();
  return cleaned;
}

export async function POST(request) {
  if (!GEMINI_API_KEY) {
    return NextResponse.json(
      { error: "Missing Gemini API key." },
      { status: 500 }
    );
  }

  const { jobTitle, skills } = await request.json();

  if (!jobTitle && !skills) {
    return NextResponse.json(
      { error: "Provide a job title or skills to generate a summary." },
      { status: 400 }
    );
  }

  const prompt = `Write exactly one professional summary in plain text based on the information below. Use 2-3 sentences only. Do not add markdown formatting, asterisks, bullet points, headings, numbered options, or any extra commentary. Output only the summary text and nothing else.\n\nJob Title: ${jobTitle || "N/A"}\nSkills: ${skills || "N/A"}`;

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
      console.error("Gemini API error", {
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
        { error: data?.error?.message || "Gemini summary generation failed." },
        { status: response.status }
      );
    }

    const rawSummary = data.candidates[0].content.parts[0].text;
    const summary = cleanSummary(rawSummary);

    return NextResponse.json({ summary });
  } catch (error) {
    console.error("Gemini summary generation failed", error);
    return NextResponse.json(
      { error: error?.message || "AI summary generation failed." },
      { status: 500 }
    );
  }
}
