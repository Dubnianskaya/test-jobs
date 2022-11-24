import { FC } from "react";
import { Navbar } from "./Navbar";
import { Container } from "./Container";

export const Header:FC = () => {
    return (
      <Container>
      <header>
        <Navbar />
      </header>
      </Container>
    )
  }