"use client";

import { ChangeEvent, useState } from "react";

export function DebounceThrottle() {
  const [text, setText] = useState("");
  const [debounceText, setDebounceText] = useState("");
  const [throttleText, setThrottleText] = useState("");

  const updateDebounceText = (text: string) => {
    setDebounceText(text);
  };

  const updateThrottleText = (text: string) => {
    setThrottleText(text);
  };

  function throttle(callback: () => void, delay = 1000) {
    let shouldWait = false;

    if (shouldWait) return;
    callback();
    shouldWait = true;
    setTimeout(() => {
      // after 1s:
      shouldWait = false;
    }, delay);
  }

  function debounce(callback: () => void, delay = 1000) {
    let timeout;
    timeout = setTimeout(() => {
      callback();
    }, delay);
  }

  return (
    <div className="flex flex-col">
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          debounce(() => updateDebounceText(e.target.value));
          throttle(() => updateThrottleText(e.target.value));
        }}
        className="bg-neutral-800 text-neutral-100"
      />
      <p>Debounce: {debounceText}</p>
      <span className="text-sm text-neutral-500">
        It is done if after typing you wait delay (1s in this case)
      </span>
      <p>Throttle: {throttleText}</p>
      <span className="text-sm text-neutral-500">
        Runs immediately when you call throttle
      </span>
    </div>
  );
}
