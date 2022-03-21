import { css } from "@emotion/react";

import { styleReset } from "app/styles/global/styleReset";
import { globalTextStyles } from "app/styles/global/text";
import { palette } from "app/styles/palette";
import { defaultFontFamily } from "app/styles/text";

export const globalCss = [
  styleReset,
  css`
    html,
    body {
      /* page always at least full height*/
      min-height: 100vh;
      overflow-x: hidden;

      /* default font everywhere */
      font-family: ${defaultFontFamily};

      /* base colors in page */
      color: ${palette.bodyText};
      background: ${palette.background};
    }

    ${globalTextStyles};
  `,
];
