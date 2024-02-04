import styled from "styled-components";

export const List = styled.ul`
  margin-top: 50px;
  width: 1184px;
  display: flex;
  gap: 29px;
  flex-wrap: wrap;
  margin-bottom: 100px;
`;

export const LoadMoreBtn = styled.button`
  margin: 0 auto;
  margin-bottom: 150px;
  display: block;
  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  background: none;
  border: none;
  &:hover {
    color: #0b44cd;
  }
`;
