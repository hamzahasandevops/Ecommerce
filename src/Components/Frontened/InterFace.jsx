import React from "react";
import Navbar from "./InterfaceComponents/Navbar";
import { Container } from "@mui/material";
import Body from "./InterfaceComponents/Body";
export default function InterFace() {
  return (
    <>
      <Container>
        <Navbar />
        <Body />
      </Container>
    </>
  );
}
