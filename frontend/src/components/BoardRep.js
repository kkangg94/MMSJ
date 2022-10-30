// 게시판 반복문 돌리는거

import React from "react";

export default function BoardRep({ board }) {
  return (
    <>
      <tr>
        <td className="seq" key={board.seq}>
          {board.seq}
        </td>
        <td className="title">{board.title}</td>
        <td className="content">{board.content}</td>
        <td className="writtentime">{board.createdAt}</td>
        <td className="like">{board.like}</td>
        <td className="view">{board.view}</td>
      </tr>
    </>
  );
}
