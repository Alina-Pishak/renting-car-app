import styled from "styled-components";
import bgImage from "../../img/rental-car-bg.jpg";

export const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.7),
      rgba(46, 47, 66, 0.7)
    ),
    url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 200px;
  padding-left: 20px;
`;

export const HeroTitle = styled.h1`
  font-size: 50px;
  line-height: 1.11;
  letter-spacing: 0.02em;
  color: #fff;
  margin-bottom: 72px;
`;

export const HeroText = styled.p`
  font-size: 36px;
  line-height: 1.11;
  letter-spacing: 0.02em;
  color: #fff;
  margin-bottom: 72px;
`;

export const HeroBtn = styled.button`
  width: 200px;
  height: 80px;
  font-weight: 600;
  font-size: 22px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  color: #fff;
  background: #3470ff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 18px;
  border: none;
  &:hover {
    background-color: #0b44cd;
  }
`;
