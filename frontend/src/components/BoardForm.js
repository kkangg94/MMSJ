import React, { useState } from "react";

export default function BoardForm() {
  //   const [seq, setSeq] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const board = { title, content };

    const response = await fetch("/api/boards", {
      method: "POST",
      body: JSON.stringify(board),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setTitle("");
      setContent("");
      setError(null);
      console.log("new board added", json);
    }
  };
  return (
    <>
      <form className="create" onSubmit={handleSubmit}>
        <h3>Add a new Board</h3>

        <label>제목</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label>내용</label>
        <input
          type="textarea"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <button>글쓰기</button>
        {error && <div className="error">{error}</div>}
      </form>
    </>
  );
}
