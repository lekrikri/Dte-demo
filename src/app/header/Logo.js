import React from "react";
import styled from "styled-components";

const Image = styled.img`
  height: 60%;
`;

const Logo = () => {
  const url =
    "./assets/textures/gael_systems_logo.svg";
  return <Image src={url} />;
};

export default Logo;
