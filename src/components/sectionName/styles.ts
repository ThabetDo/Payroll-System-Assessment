import styled from "styled-components";

export const SectionNameWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  .containerIcon {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    font-size: clamp(18px, 5vw, 24px);
    font-weight: 600;
    line-height: 44px;
    letter-spacing: 0em;
    white-space: nowrap;
  }
`;
