import * as React from "react";

import avatarImg from "app/assets/avatar.jpg";
import { pageSectionCss } from "app/styles/pageSection";
import { css } from "@emotion/react";
import { palette } from "app/styles/palette";
import { textSizeCss } from "app/styles/text";

const headerCss = [
  pageSectionCss,
  css`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 0;
    border: 0;
  `,
];
const avatarCss = css`
  position: relative;
  align-self: stretch;
  min-width: 100px;
  min-height: 140px;
  margin-right: 20px;
  overflow: hidden;
  display: flex;
  justify-content: center;

  object-fit: cover;
`;

const bannerTitleCss = [
  css`
    font-weight: 700;
    margin: 0;
    flex: 1;
  `,
  textSizeCss.xxl,
];
const highlightNameCss = css`
  color: ${palette.primary};
  display: inline-block;
`;

export const Header = (): JSX.Element => (
  <header css={headerCss}>
    <img
      css={avatarCss}
      src={avatarImg}
      alt="Portrait of Omar Diab"
      width={150}
      height={150}
    />

    <h1 css={bannerTitleCss}>
      Hi, I&rsquo;m <b css={highlightNameCss}>Omar Diab</b>
    </h1>
  </header>
);
