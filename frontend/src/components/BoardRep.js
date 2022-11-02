import { useBoardsContext } from "../hooks/useBoardsContext";

// date fns
import { format, formatDistance, formatRelative, subDays } from "date-fns";
// 게시판 반복문 돌리는거
import React from "react";

export default function BoardRep({ board }) {
  const { dispatch } = useBoardsContext();
  const handleClick = async () => {
    const response = await fetch("/api/boards/" + board._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_BOARD", payload: json });
    }
  };

  return (
    <>
      <tr>
        <td className="seq" key={board.seq}>
          {board.seq}
        </td>
        <td className="title">{board.title}</td>
        <td className="content">{board.content}</td>
        <td className="writtentime">
          {/* {board.writtenTime} */}
          {console.log(board)} 
          {formatRelative(subDays(new Date(board.writtenTime), 3), new Date())}
        </td>
        <td className="like">{board.like}</td>
        <td className="view">{board.view}</td>
        <td>
          <i onClick={handleClick} class="fa-solid fa-trash"></i>
        </td>
      </tr>
    </>
  );
}
