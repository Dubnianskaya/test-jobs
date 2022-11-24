import { FC, ReactNode } from "react";
import { Header } from "./Header";
import { Container } from "./Container";
import { Toaster } from "react-hot-toast";

type LayoutProps = {
  children: ReactNode,
}

export const Layout:FC<LayoutProps> = ({ children }) => {
    return (
      <>
        {/* <Header /> */}
        <Toaster />
        <Container>
        {children}
        </Container>
      </>
    )
  }