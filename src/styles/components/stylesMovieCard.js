import styled from "styled-components";

export const Contain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px;
  flex-direction: column;
`;

export const Titles = styled.text`
  font-size: 1rem;
  color: #fafafa;
  margin: 1px;
  width: 100%;
  text-align: left;
`;

const width = 180 / 16;
const height = 230 / 16;

export const ImageContainer = styled.div`
  width: ${width}rem;
  height: ${height}rem;
  background-color: #17161c;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 1rem;
`;
