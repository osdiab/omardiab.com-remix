import { css } from "@emotion/react";
import { cssForMediaSize, MediaSize } from "app/styles/mediaQueries";
import { palette } from "app/styles/palette";
import { verticalStackCss } from "app/styles/spacing";
import { textSizeCss } from "app/styles/text";

const boldCss = css`
  font-weight: 500;
`;

export const globalTextStyles = css`
  p,
  h3,
  h4,
  h5,
  h6 {
    ${textSizeCss.s}
  }

  h1 {
    ${textSizeCss.xl};
    ${boldCss};
    ${cssForMediaSize({ max: MediaSize.PHONE_LARGE, css: textSizeCss.l })}
  }

  h2 {
    ${textSizeCss.m};
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }

  h3 {
    ${boldCss};
  }

  h4,
  h5,
  h6 {
    color: ${palette.secondaryText};
  }
`;

export const compositionTextCss = css`
  ${verticalStackCss.m};
`;
