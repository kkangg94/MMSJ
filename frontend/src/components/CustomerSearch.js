import React from "react";
import styled from "styled-components";
import NewPostImg from "../images/wonddo.png";
import CoffeeImg from "../images/coffee.jpg";
import SearchBar from "./SearchBar";
import RangeSlider from "./RangeSlider";
import HorizonLine from "./HorizonLine";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple } from "@mui/material/colors";

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
  align-items: center;
  width: 80%;
  margin: 0 3em;
  height: 20vh;
`;

const Title = styled.div``;

const TitleOne = styled.div`
  font-size: 5em;
  font-weight: bold;
  margin-top: 2em;
  margin-left: 1em;
  color: #161934;
`;

const TitleTwo = styled.div`
  font-size: 2.5em;
  margin-left: 2em;
  margin-top: 1em;
  color: #666666;
`;

const TitleThree = styled.div`
  font-size: 2.5em;
  margin-left: 2em;
  margin-top: 0.3em;
  color: #666666;
`;

const Question = styled.span`
  font-size: 2em;
  line-height: 2em;
`;

const Answer = styled.span`
  font-size: 2em;
  /* line-height: 2em; */
  color: grey;
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

const InnerLeft = styled.div`
  width: 80%;
  margin: 0 3em;
`;

const InnerRight = styled.div``;

const Img = styled.img``;

export default function CustomerSearch() {
  return (
    <>
      <Container>
        <ContainerInner>
          <InnerTop>
            <LeftDiv>
              <TitleOne>FAQ</TitleOne>
              <TitleTwo>자주하는 질문</TitleTwo>
              <TitleThree>궁금하신 점을 검색해보세요!</TitleThree>
              <HorizonLine />
              <DetailBtn>자세히 보기</DetailBtn>
            </LeftDiv>
            <RightDiv>
              <InnerLeft>
                <Stack direction="row" spacing={2}>
                  <Avatar sx={{ marginLeft: "3em" }}>Q</Avatar>
                  <Question>[사용] 홈페이지 주소는 무엇인가요?</Question>
                  <Avatar
                    sx={{
                      bgcolor: deepOrange[500],
                      marginLeft: "3em",
                      marginTop: "1em",
                    }}
                  >
                    A
                  </Avatar>
                  <Answer>
                    PC 접속 시 : https://www.hollys.co.kr <br />
                    모바일 접속 시 : https://m.hollys.co.kr
                  </Answer>
                </Stack>
              </InnerLeft>
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
