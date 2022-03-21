import * as React from "react";
import { css } from "@emotion/react";
import ExternalLinkSvg from "app/assets/icons/external-link.svg";

import { palette } from "app/styles/palette";
import { RemixLinkProps } from "@remix-run/react/components";

export enum LinkAppearance {
  HYPERLINK = "HYPERLINK",
  UNSTYLED = "UNSTYLED",
}

export interface LinkProps extends RemixLinkProps {
  appearance?: LinkAppearance;
}

const hyperlinkCss = css`
  display: inline-block; // prevents wrapping unless necessary
  color: ${palette.primary};
  transition: color 0.1s ease-in;
  cursor: pointer;
  font-weight: 500;

  &:hover,
  &:focus {
    color: ${palette.primaryHighlight};
  }
`;
const unstyledLinkCss = css`
  text-decoration: none;
  color: inherit;
`;

const externalLinkCss = css`
  height: 0.75em;
  margin-left: 0.25em;
`;

interface AbsoluteLinkProps extends Omit<LinkProps, "to"> {
  to: string;
}
const AbsoluteLink = ({ to, appearance, children }: AbsoluteLinkProps) => {
  return (
    <a
      css={
        appearance === LinkAppearance.HYPERLINK ? hyperlinkCss : unstyledLinkCss
      }
      href={to}
    >
      {children}
      {/* <ExternalLinkSvg css={externalLinkCss} /> */}
    </a>
  );
};

const RelativeLink = ({
  appearance = LinkAppearance.HYPERLINK,
  children,
  ...rest
}: LinkProps) => {
  return (
    <Link
      css={
        appearance === LinkAppearance.HYPERLINK ? hyperlinkCss : unstyledLinkCss
      }
      {...rest}
    >
      {children}
    </Link>
  );
};

function urlIsAbsolute(url: LinkProps["to"]): url is string {
  if (typeof url !== "string") {
    return false;
  }
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false; // for the purposes of this app, this works
  }
}

/**
 * A link to external content.
 */
export const Link = (props: LinkProps): JSX.Element => {
  return urlIsAbsolute(props.to) ? (
    <AbsoluteLink {...props} to={props.to} />
  ) : (
    <RelativeLink {...props} />
  );
};
