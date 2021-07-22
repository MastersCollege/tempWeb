import React from "react";

type props = {};

interface _props {
  header?: JSX.Element;
  main: JSX.Element;
  footer?: JSX.Element;
  header_props?: props;
  main_props?: props;
  footer_props?: props;
}

const Header = <></>;
const Footer = <></>;

const Layout = ({
  header = Header,
  main,
  footer = Footer,
  header_props = {},
  main_props = {},
  footer_props = {},
  ...args
}: _props) => {
  return (
    <>
      <header {...header_props}>{header}</header>
      <main {...main_props}>{main}</main>
      <footer {...footer_props}>{footer}</footer>
    </>
  );
};

export default Layout;
