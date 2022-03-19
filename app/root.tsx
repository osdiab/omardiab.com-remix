import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import { CSSObject, Global } from "@emotion/react";
import type { MetaFunction } from "remix";

const globalStyles: CSSObject = {
  body: {
    fontFamily: "serif",
    color: "green",
  },
};

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <Global styles={globalStyles} />
        <LiveReload />
      </body>
    </html>
  );
}
