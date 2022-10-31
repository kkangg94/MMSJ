import { React, useEffect, useState } from "react";
import "./BoardScreen.css";
import Header from "../components/Header";
import BoardDetail from "../components/BoardDetails";

export default function BoardScreen() {
  const [boards, setBoards] = useState(null);
  useEffect(() => {
    const fetchBoards = async () => {
      const response = await fetch("/api/boards");
      const json = await response.json();

      if (response.ok) {
        setBoards(json);
      }
    };
    fetchBoards();
  }, []);

  return (
    <div className="boardScreen">
      {/* <Header></Header> */}
      <div className="boards">
        {boards &&
          boards.map((board) => <BoardDetail key={board._id} board={board} />)}
      </div>
    </div>
  );
}
