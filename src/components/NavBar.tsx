import {  HStack, Image } from "@chakra-ui/react";
import logo from "../Assects/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

function NavBar() {
  return (
    <>
      <HStack justifyContent="space-between" padding="10px">
        <Image src={logo} alt={"logo"} boxSize="60px" />
        <ColorModeSwitch />
      </HStack>
    </>
  );
}

export default NavBar
