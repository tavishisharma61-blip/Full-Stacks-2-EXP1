import React, { useState } from "react";

const PLATFORM_RULES = {
  Twitter: { maxChars: 280 },
  Instagram: { maxChars: 2200 },
  LinkedIn: { maxChars: 3000 },
  Facebook: { maxChars: 500 },
};

export default function PostComposer() {
  const [platform, setPlatform] = useState("Twitter");
  const [text, setText] = useState("");

  const maxChars = PLATFORM_RULES[platform].maxChars;
  const charCount = text.length;
  const isOverLimit = charCount > maxChars;

  return (
    <div style={{ maxWidth: "480px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h2>Post Composer</h2>

      <label style={{ display: "block", marginBottom: "6px" }}>
        Select Platform:
      </label>
      <select
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
        style={{ marginBottom: "16px", padding: "6px", width: "100%" }}
      >
        {Object.keys(PLATFORM_RULES).map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>

      <label style={{ display: "block", marginBottom: "6px" }}>
        Post Content:
      </label>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={6}
        style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
      />

      <p style={{ color: isOverLimit ? "red" : "gray" }}>
        {charCount} / {maxChars} characters
      </p>

      {isOverLimit && (
        <p style={{ color: "red" }}>
          Character limit exceeded for {platform}. Please shorten your post.
        </p>
      )}

      <button disabled={isOverLimit || text.trim() === ""}>
        Post
      </button>
    </div>
  );
}