import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1.8rem 0;
  flex-direction: column;

  footer {
    padding-top: 1.5rem;
    line-height: 0.5rem;
  }

  footer strong {
    font-size: 1rem;
    font-weight: 400;
    color: #fafafa;
  }

  footer p {
    font-size: 1rem;
    color: #fafafa;
  }
`;

export const CardHeader = styled.div`
  width: 11.25rem;
  height: 14.34rem;

  background-color: #17161c;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
`;
