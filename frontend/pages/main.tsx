import * as React from "react";
import { Box, Button, Typography, Modal } from "@mui/material";
import { useState } from "react";
import { GetExercises, MockGetExercises } from "../api/exercises";
import { mockExercises } from "../mocks/exercises";
import SaveIcon from "@mui/icons-material/Save";
import { Header } from "./components/Header";
import { ExercisesList } from "./components/ExercisesList";
import { WorkoutName } from "./components/WorkoutName";
import AddIcon from "@mui/icons-material/Add";
import { ContainerComp } from "./components/ContainerComp";
import { WorkoutsList } from "./components/WorkoutsList";

const Main = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = async () => {
    setOpenModal(true);
    console.log("otwarte");
    // const exercises = await new GetExercises().get();
    // console.log(exercises);
    const exercises = await new MockGetExercises().get();
    console.log(exercises);
  };

  const handleCloseModalAndAddWorkout = () => {
    setOpenModal(false);
    console.log("dodano workout");
  };

  return (
    <ContainerComp>
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          marginTop: "30px",
          marginRight: "10px",
        }}
      >
        <Button
          variant="contained"
          color="success"
          onClick={handleOpenModal}
          sx={{ fontSize: "12px" }}
          startIcon={<AddIcon />}
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
            height: 700,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            overflowY: "scroll",
          }}
        >
          {/* <WorkoutName number={1} /> */}
          <WorkoutName />
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, textAlign: "center" }}
          >
            Choose your exercises
          </Typography>
          <ExercisesList />
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
      <WorkoutsList />
    </ContainerComp>
  );
};

export default Main;
