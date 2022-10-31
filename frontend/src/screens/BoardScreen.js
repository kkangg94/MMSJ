import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BoardRep from "../components/BoardRep";
import BoardForm from "../components/BoardForm";
import { useBoardsContext } from "../hooks/useBoardsContext";

const Title = styled.h1`
  text-align: center;
  /* border: 1px solid #000; */
  font-size: 3em;
`;

const Button = styled.button``;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  justify-content: center;
  /* border: 1px solid #000; */
`;
const Boardtable = styled.table`
  width: 100%;
  height: 2em;
  font-size: 2em;
  /* border: 1px solid #000; */
`;

export default function BoardScreen() {
  const { boards, dispatch } = useBoardsContext();
  // const [write, setWrite] = useState(false);
  // Fetching Data
  useEffect(() => {
    // api from backend
    const fetchBoards = async () => {
      const response = await fetch("/api/boards");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_BOARDS", payload: json });
      }
    };
    fetchBoards();
  }, [dispatch]);

  return (
    <>
      <Header />
      <Title>커뮤니티</Title>
      <Button>
        <Link to="create">글쓰기</Link>
      </Button>

      <Container>
        <Boardtable>
          <div id="board-list">
            <thead>
              <tr>
                <th scople="col" className="seq">
                  글번호
                </th>
                <th scople="col" className="title">
                  제목
                </th>
                <th scople="col" className="content">
                  내용
                </th>
                <th scople="col" className="writtentime">
                  작성일자
                </th>
                <th scople="col" className="like">
                  추천수
                </th>
                <th scople="col" className="view">
                  조회수
                </th>
              </tr>
            </thead>
            <tbody>
              {boards &&
                boards.map((board) => <BoardRep board={board}></BoardRep>)}
            </tbody>
          </div>
        </Boardtable>
      </Container>
      <Footer />
      {/* <Routes>
        <Route path="/api/board/create" element={<BoardForm />}></Route>
      </Routes> */}
    </>
  );
}
