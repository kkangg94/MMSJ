// import React from "react";
// import styled from "styled-components";

// const Container = styled.div`
//   width: 100%;
//   height: 30vh;
//   background-color: red;
// `;

// const FirstTitle = styled.h2`
//   font-size: 3em;
//   color: black;
//   text-align: center;
// `;

// const Contents = styled.h2`
//   font-size: 4em;
//   font-weight: bold;
//   color: orange;
// `;
// const ContainerInner = styled.div`
//   width: 30vw;
//   height: 10vw;
// `;

// const Button = styled.button`
//   width: 100px;
//   background-color: orange;
// `;

// export default function CompanyIntroduce() {
//   return (
//     <>
//       <Container>
//         <FirstTitle>대표 카페 커뮤니티 사이트</FirstTitle>
//         <Contents>뭐 마 시 지 ?</Contents>
//         <ContainerInner>
//           <Button>Previous Slide</Button>
//           <Button>Next Slide</Button>
//         </ContainerInner>
//       </Container>
//     </>
//   );
// }

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  background-color: grey;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  overflow: hidden;
  height: 50vh;
  width: ;
`;

const ContainerInner = styled.div`
  width: 500px;
  background-color: red;
`;

const TitleOne = styled.div`
  position: absolute;
  font-size: 3em;
  top: 120px;
  left: 108px;
  /* transform: translate(-700px);
  color */
`;

const TitleTwo = styled.div`
  position: absolute;
  width: 362px;
  /* transform: translate(-700px); */
`;

// const TitleOne = styled.div`
//   transform: translate(0px);
//   transition: 2s;
// `

// const TitleTwo = styled.div`
//   transform: translate(0px);
//   transition: 2.5s;
//   `

const TitleThree = styled.div`
  position: absolute;

  /* right: -120px; */
`;

// .favorite .inner .btn.btn--white {
//   position: absolute;
//   top: 580px;
//   left: 238px;
// }

export default function CompanyIntroduce() {
  return (
    <>
      <Container>
        <ContainerInner>
          <TitleOne>뭐사먹지?</TitleOne>
          <TitleTwo>다양한 메뉴를 한번에 비교해보세요.</TitleTwo>
          <TitleThree>가나다라마바사아자차카타파하하하하하하하</TitleThree>
          {/* <a href="#" class="btn btn--white">
            자세히 보기
          </a> */}
        </ContainerInner>
      </Container>
    </>
  );
}
