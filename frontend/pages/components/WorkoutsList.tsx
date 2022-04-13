import {
  AppBar,
  Toolbar,
  IconButton,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import StarsIcon from "@mui/icons-material/Stars";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

export const WorkoutsList = () => {
  return (
    <Paper
      square
      sx={{
        marginBottom: "20px",
        width: "100%",
        height: "400px",
        maxWidth: "350px",
        display: "block",
        margin: "0 auto",
        position: "fixed",
        top: "60%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        overflowY: "auto",
      }}
    >
      <Button sx={{ justifyContent: "flex-end", width: "100%" }}>
        <Typography fontWeight={"bold"}> WORKOUT 1</Typography>
      </Button>

      <AppBar
        position="fixed"
        color="primary"
        sx={{ top: "auto", bottom: 0, marginTop: "30px" }}
      >
        <Toolbar>
          <IconButton color="inherit" sx={{ marginLeft: "5px" }}>
            <StarsIcon />
            <Typography> Rankings </Typography>
          </IconButton>
          <IconButton color="inherit" sx={{ marginLeft: "55px" }}>
            <FitnessCenterIcon />
            <Typography> Your Workouts </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Paper>
  );
};
