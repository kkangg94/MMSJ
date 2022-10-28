import React from "react";
import styled from "styled-components";
import IndonesiaBG from "../images/indonesia_bg.jpg";
import IndonesiaBgLeft from "../images/indonesia_bg_left.png";
import IndonesiaBgRight from "../images/indonesia_bg_right.png";
import IndonesiaImg from "../images/indonesia_img.png";
import IndonesiaTitle from "../images/indonesia_title.png";

const Container = styled.div`
  position: relative;
  background-image: URL(${IndonesiaBG});
  overflow: hidden;
  height: 400px;
  a:hover:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: -100px;
    display: block;
    background-image: url(${IndonesiaBgLeft});
    background-size: cover;
    background-repeat: no-repeat;
    width: 373px;
    height: 277px;
    opacity: 0;
  }
  a:hover:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    display: block;
    background-image: url(${IndonesiaBgRight});
    background-size: cover;
    background-repeat: no-repeat;
    width: 563px;
    height: 305px;
    opacity: 0;
  }
`;

const Img1 = styled.img`
  position: absolute;
  width: 496px;
  top: 120px;
`;

const Img2 = styled.img`
  position: absolute;
  left: -500px;
  opacity: 0;
`;

const ContainerInner = styled.div``;

export default function Comunity() {
  return (
    <>
      <Container>
        <ContainerInner>
          <Img1 src={IndonesiaTitle}></Img1>
          <Img2 src={IndonesiaImg}></Img2>
          {/* <a href="#" class="btn btn--gold">
            자세히 보기
          </a> */}
        </ContainerInner>
      </Container>
    </>
  );
}

// Notre conte du jour 우리들의 일상
// Comme d'habitude. 일반적인 상황과 마찬가지로, 혹은 항상 하던대로 라는 뜻
