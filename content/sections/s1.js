import React from "react";
import styled from "styled-components";
import { Container, Wrapper } from "./style";

const S1 = () => {
  return (
    <StyledWrapper>
      <Container>
        <Title>
          <h4>Solution Here</h4>
          <p>Answer below this.</p>
        </Title>
        <GContainer>
          <Item>1st</Item>
          <Item>2nd</Item>
          <Item>3rd</Item>
          <Item>4th</Item>
        </GContainer>
      </Container>
    </StyledWrapper>
  );
};

export default S1;

const StyledWrapper = styled(Wrapper)`
  background: #f6f7f9;
`;

const Title = styled.div`
  h4 {
    font-size: 32px;
    font-family: Lexend Medium;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: -0.4px;
    span {
      background: #fae090;
    }
  }
  p {
    font-size: 18px;
    font-family: Lexend Regular;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
  }
`;
const QuestionsDiv = styled.div`
  ul {
    display: flex;
    flex-direction: column;
  }
  li {
    font-size: 20px;
  }
`;
const GContainer = styled.div`
  display: grid;
  grid-gap: 20px;
   
//   Using Grid -:
//   grid-template-columns: repeat(auto-fill, minmax(200px ,  1fr));


  using Media queries -:
  grid-template-columns: auto ;
  grid-template-rows: auto auto;

  @media (min-width: 428px) {
    grid-template-columns: auto auto ;
    grid-template-rows: auto auto;
  }

  @media (min-width: 628px) {
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto;
  }

  @media (min-width: 1024px) {
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto;
  }
`;

const Item = styled.div`
  padding: 80px;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 20px;
`;
