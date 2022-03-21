import { css, Interpolation, Theme } from "@emotion/react";
import * as React from "react";
import { Footer } from "app/components/DefaultLayout/Footer";
import { Header } from "app/components/DefaultLayout/Header";
import { Navigation } from "app/components/DefaultLayout/Navigation";

interface DefaultLayoutProps {
  children: React.ReactNode;
  mainCss?: Interpolation<Theme>;
}
export const DefaultLayout = ({
  children,
  mainCss,
}: DefaultLayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      {/* <Navigation /> */}
      <main
        css={[
          css`
            padding-bottom: 10rem;
          `,
          mainCss,
        ]}
      >
        {children}
      </main>
      <Footer
      // css={css`
      //   margin-bottom: 200px;
      // `}
      />
    </>
  );
};
