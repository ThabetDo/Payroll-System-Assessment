import {themeExtended} from "global-styles";
import styled from "styled-components";

export const AlertPopupWrapper = styled.div<{
    $customHeigtht?: string;
    $customMinWidth?: string;
}>`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 90px 1fr auto;
  width: 500px;
  min-width: ${(props) =>
    props.$customMinWidth ? props.$customMinWidth : "100px"};
  @media only screen and (max-width: 1024px) {
    max-width: 80vw;
  }
  div {
    &.header {
      position: relative;
      margin: -1rem -1rem 0 -1rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 24px;
      .BGlayer {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        img {
          object-fit: cover;
          height: 100%;
          width: 100%;
        }
      }
      .headerContainer {
        width: 100%;
        display: grid;
        grid-template-columns: 4fr 1fr;
        align-items: center;
        gap: 16px;
        p {
          font-family: ${themeExtended.fonts.changa_Bold};
          font-size: 2rem;
          font-weight: 700;
          line-height: 44px;
          letter-spacing: 0em;
        }
        p.closeIcon {
          cursor: pointer;
          font-size: 24px;
          font-weight: 600;
          line-height: 44px;
          letter-spacing: 0em;
          text-align: end;
          color: ${themeExtended.colours.LoulouRedLight};
          justify-content: end;
          align-items: start;
          display: flex;
        }
      }
    }
    &.Body {
      padding: 8px 0 24px 0;
      min-height: ${(props) =>
    props.$customHeigtht ? props.$customHeigtht : "100px"};
      p {
        font-family: ${themeExtended.fonts.cairo_Regular};
        font-size: 1rem;
        font-weight: 700;
        line-height: 26px;
        letter-spacing: 0em;
        span {
          font-weight: 700;
        }
      }
    }
    &.Footer {
      display: flex;
      justify-content: flex-end;
      gap: 16px;
    }
  }
`;
