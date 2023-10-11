import styled from "@emotion/styled/dist/emotion-styled.cjs";
import { ICollapsedType } from "../Layout.types";

export const LogoWrapper = styled.div`
  width: 100%;
  height: 120px;
  padding: ${(props: ICollapsedType) =>
    props.collapsed ? "20px" : "50px 30px"};
`;
export const Logo = styled.h1`
  width: 100%;
  height: 100%;
  background-image: url("images/larmong.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;
