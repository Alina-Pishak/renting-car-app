import styled from "styled-components";

export const Item = styled.li`
  width: 274px;
  position: relative;
`;

export const Image = styled.img`
  background: linear-gradient(
    180deg,
    rgba(18, 20, 23, 0.5) 2.5%,
    rgba(18, 20, 23, 0) 41.07%
  );
  object-fit: cover;
  margin-bottom: 14px;
  border-radius: 14px;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const MainText = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const SecondText = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 1.5;
  width: 270px;
  height: 40px;
  margin-bottom: 28px;
`;

export const ContainerSecondText = styled.div`
  width: 270px;
  height: 40px;
  margin-bottom: 28px;
  white-space: none;
`;

export const LearnMoreBtn = styled.button`
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  width: 274px;
  height: 44px;
  border-radius: 12px;
  background: #3470ff;
  border: none;
  &:hover {
    background-color: #0b44cd;
  }
`;
