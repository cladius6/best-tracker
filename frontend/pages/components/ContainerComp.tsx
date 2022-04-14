import { Container } from "@mui/material";
import { ReactNode } from "react";

interface ContainerCompProp {
  children: ReactNode;
}

export const ContainerComp = ({ children }: ContainerCompProp) => {
  return (
    <Container
      fixed
      maxWidth="md"
      sx={{
        height: "70vh",
        boxShadow: "8px 8px 24px 0px rgba(66, 68, 90, 1)",
        marginTop: "150px",
        backgroundColor: "rgb(245,244,242)",
      }}
    >
      {children}
    </Container>
  );
};
