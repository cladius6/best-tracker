import * as React from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  Paper,
  TextField,
  Typography,
  Modal,
} from "@mui/material";
import { useState } from "react";
import { getExercises } from "../api/exercises";
import { mockExercises } from "../mocks/exercises";

const Main = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    console.log("otwarte");
    // getExercises().then((res) => console.log(res));
  };
  const handleClose = () => setOpen(false);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" align="center">
        NON RETRO TRACKER
      </Typography>
      <Button onClick={handleOpen}>Create workout</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            WORKOUT 1
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            EXERCISES LIST
          </Typography>
          <Box>
            {mockExercises.map(mockExercise => <div key={mockExercise.id}>{mockExercise.name}</div>)}
          </Box>
        </Box>
      </Modal>
      <Paper
        sx={{
          padding: "16px",
          width: "100%",
          maxWidth: "350px",
          display: "block",
          margin: "0 auto",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          overflowY: "auto",
        }}
      >
        WORKOUT 1
      </Paper>
    </Container>
  );
};

export default Main;
