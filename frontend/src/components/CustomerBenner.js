import React from "react";
import styled from "styled-components";
import IMG from "../images/snoopy.png";
import IMG2 from "../images/treetexture.png";

const Container = styled.div`
  position: relative;
  overflow: hidden;
  height: 20vh;
  width: 100%;
  background-color: #dcd9d4;
  background-image: linear-gradient(to right, #243949 0%, #517fa4 100%);
  background-blend-mode: soft-light, screen;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 4em 0;
`;

const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3em 14em;
  /* background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%); */

  border-radius: 3em;
`;

const Div = styled.div`
  position: relative;
  width: 100%;
  height: 20vh;
`;

const Content = styled.div`
  color: grey;
  font-size: 4em;
  margin-top: 4em;
  margin-left: 18em;
`;

export default function CustomerBenner() {
  return (
    <>
      <Container>
        <ContainerInner>
          <Div>
            <Content>Customer Service & Idea</Content>
          </Div>
        </ContainerInner>
      </Container>
    </>
  );
}
