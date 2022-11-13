import React from "react";
import { HeaderTitle, HeaderWrapper } from "../../styles/HeaderStyles";

const Header = ({ title }) => {
  return (
    <HeaderWrapper>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderWrapper>
  );
};

export default Header;
