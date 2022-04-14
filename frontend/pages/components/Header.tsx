import { Typography } from "@mui/material";

export const Header = () => {
  return (
    <Typography
      variant="h2"
      component="h1"
      align="center"
      fontWeight={600}
      color="#00000078"
      sx={{
        fontSize: {
          xs: "30px",
          sm: "40px",
          md: "50px",
          lg: "55px",
          xl: "55px",
        },
      }}
    >
      NON RETRO TRACKER
    </Typography>
  );
};
