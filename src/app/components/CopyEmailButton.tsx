"use client";

import { useEffect, useRef, useState } from "react";
import { EMAIL } from "../lib/content";

export const CopyEmailButton = () => {
  const [toast, setToast] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const showToast = (message: string) => {
    setToast(message);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(null), 1800);
  };

  // Without clipboard access, select the address so it can be copied by hand
  const selectEmail = () => {
    const mailText = document.getElementById("mailText");
    const selection = window.getSelection();
    if (mailText && selection) {
      const range = document.createRange();
      range.selectNodeContents(mailText);
      selection.removeAllRanges();
      selection.addRange(range);
    }
    showToast("Email selected, press copy");
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      showToast("Email copied");
    } catch {
      selectEmail();
    }
  };

  return (
    <>
      <button className="btn" type="button" onClick={copyEmail}>
        Copy email
      </button>
      <div className="toast" role="status" hidden={toast === null}>
        {toast}
      </div>
    </>
  );
};
