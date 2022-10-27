import React, { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <>
      <form className="signup" onSubmit={handleSubmit}>
        <h3>Sign up</h3>
        <labe>Nickname:</labe>
        <input
          type="text"
          onchange={(e) => setNickname(e.target.value)}
          value={nickname}
        />

        <label>Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button>Sign up</button>
      </form>
    </>
  );
}
