"use client";

import { useEffect } from "react";

export default function ScrollAnimationClient() {
  useEffect(() => {
    function observeElements() {
      const elements = document.querySelectorAll(".fade-in-scroll");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.1 }
      );
      elements.forEach((el) => observer.observe(el));
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", observeElements);
      return () => {
        document.removeEventListener("DOMContentLoaded", observeElements);
      };
    } else {
      observeElements();
    }
  }, []);

  return null;
}
