import React from "react";
import styled from "styled-components";
import IMG from "../images/snoopy.png";
import IMG2 from "../images/treetexture.png";
import BG from "../images/bg.jpg";

const Container = styled.div`
    position: relative;
    overflow: hidden;
    height: 50vh;
    width: 100%;
    background-image: url(${BG});
    background-color: #7e787c;
    /* background-image: linear-gradient(to right, #243949 0%, #517fa4 100%); */
    background-blend-mode: soft-light, screen;
    /* background-repeat: no-repeat; */
    background-size: cover;
    /* margin: 4em 0; */
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
    height: 30vh;
`;

const Content = styled.div`
    color: white;
    font-size: 5em;
    text-align: center;
    margin-top: 3.6em;
    font-weight: bold;
    text-shadow: 5px 0 0 #f54;
`;

export default function StoreBenner() {
    return (
        <>
            <Container>
                <ContainerInner>
                    <Div>
                        <Content>GIFT SHOP</Content>
                    </Div>
                </ContainerInner>
            </Container>
        </>
    );
}
