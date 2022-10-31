import React from "react";
import styled from "styled-components";
import NewPostImg from "../images/wonddo.png";
import CoffeeImg from "../images/coffee.jpg";
import SearchBar from "./SearchBar";
import RangeSlider from "./RangeSlider";

const Container = styled.div`
  position: relative;
  background-attachment: fixed;
  overflow: hidden;
  height: 57vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 50vh;
  margin: 3em 14em;
  background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
  border-radius: 3em;
`;

const InnerTop = styled.div``;

const InnerBottom = styled.div``;

const LeftDiv = styled.div`
  position: relative;
  width: 100%;
  height: 20vh;
`;

const Title = styled.div``;

const TitleOne = styled.div`
  position: absolute;
  font-size: 5em;
  font-weight: bold;
  margin-top: 5em;
  margin-left: 3em;
  color: #f4a460;
`;

const TitleTwo = styled.div`
  position: absolute;
  font-size: 2em;
  top: 12vh;
  left: 16em;
  color: #666666;
`;

const TitleThree = styled.div`
  position: absolute;
  font-size: 2.5em;
  top: 7vh;
  left: 15em;
  color: #000009;
`;

const DetailBtn = styled.button`
  position: absolute;
  background-color: whtie;
  color: #404040;
  font-weight: bold;
  width: 10vw;
  top: 85vh;
  left: 22em;
`;

const RightDiv = styled.div`
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
`;

const InnerLeft = styled.div``;

const InnerRight = styled.div``;

const Img = styled.img``;

export default function CustomerSearch() {
  return (
    <>
      <Container>
        <ContainerInner>
          <InnerTop>
            <LeftDiv>
              <TitleOne></TitleOne>
              <TitleTwo>검색창에 원하는 정보를 키워도로 입력해보세요.</TitleTwo>
              <TitleThree>궁금하신 점을 검색해보세요!</TitleThree>
              <SearchBar />
              <DetailBtn>자세히 보기</DetailBtn>
            </LeftDiv>
            <RightDiv>
              <InnerLeft></InnerLeft>
              <InnerRight></InnerRight>
            </RightDiv>
          </InnerTop>
          <InnerBottom></InnerBottom>
        </ContainerInner>
      </Container>
    </>
  );
}

// Notre conte du jour 우리들의 일상
// Comme d'habitude. 일반적인 상황과 마찬가지로, 혹은 항상 하던대로 라는 뜻
