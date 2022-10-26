import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 30vh;
  background-color: red;
`;

const FirstTitle = styled.h2`
  font-size: 3em;
  color: black;
  text-align: center;
`;

const Contents = styled.h2`
  font-size: 4em;
  font-weight: bold;
  color: orange;
`;
const ContainerInner = styled.div`
  width: 30vw;
  height: 10vw;
`;

const Button = styled.button`
  width: 100px;
  background-color: orange;
`;

export default function CompanyIntroduce() {
  return (
    <>
      <Container>
        <FirstTitle>대표 카페 커뮤니티 사이트</FirstTitle>
        <Contents>뭐 마 시 지 ?</Contents>
        <ContainerInner>
          <Button>Previous Slide</Button>
          <Button>Next Slide</Button>
        </ContainerInner>
      </Container>
    </>
  );
}
