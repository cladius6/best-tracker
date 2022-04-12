import * as React from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
  Modal,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@mui/material";
import { useState } from "react";
import { getExercises } from "../api/exercises";
import { mockExercises } from "../mocks/exercises";
import SaveIcon from "@mui/icons-material/Save";

const Main = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openNestedInput, setOpenNestedInput] = useState(false);

  const handleAddClick = (id: string) => {
    console.log(id);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
    console.log("otwarte");
    // getExercises().then((res) => console.log(res));
  };

  const handleCloseModalAndAddWorkout = () => {
    setOpenModal(false);
    console.log("dodano workout");
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" align="center">
        NON RETRO TRACKER
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          marginTop: "30px",
          marginRight: "20px",
        }}
      >
        <Button
          variant="contained"
          color="success"
          onClick={handleOpenModal}
          sx={{ fontSize: "12px" }}
        >
          Create new workout
        </Button>
      </Box>
      <Modal
        open={openModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            height: 500,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            overflowY: "scroll",
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            WORKOUT 1
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            EXERCISES LIST
          </Typography>

          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
              margin: "0 auto",
            }}
          >
            {mockExercises.map((mockExercise) => (
              <>
                <ListItem
                  key={mockExercise.id}
                  sx={{ border: "1px solid black", marginBottom: "3px" }}
                >
                  <ListItemText primary={`${mockExercise.name}`} />
                  <Button
                    onClick={() => {
                      handleAddClick(mockExercise.id);
                      console.log("Add exercise to workout");
                    }}
                  >
                    +
                  </Button>
                </ListItem>
                <Collapse in={openNestedInput} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemText primary="Repeats" />
                  </List>
                </Collapse>
              </>
            ))}
          </List>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              color="success"
              onClick={handleCloseModalAndAddWorkout}
              endIcon={<SaveIcon />}
            >
              Save
            </Button>
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
