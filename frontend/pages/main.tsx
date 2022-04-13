import * as React from "react";
import { Box, Button } from "@mui/material";
import { SetStateAction, useState } from "react";
import { MockGetExercises } from "../api/exercises";
import { Header } from "./components/Header";
import AddIcon from "@mui/icons-material/Add";
import { ContainerComp } from "./components/ContainerComp";
import { WorkoutsList } from "./components/WorkoutsList";
import { ModalWithExercises } from "./components/Modal";
import { IExercisesResponse } from "../types/exercises";
import produce from "immer";

const Main = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = async () => {
    setOpenModal(true);
    const exercisesList = await new MockGetExercises().get();
    console.log(exercisesList);
    // const exercises = await new GetExercises().get();
    // console.log(exercises);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
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
      <ModalWithExercises openModal={openModal} closeModal={handleCloseModal} />
      <WorkoutsList />
    </ContainerComp>
  );
};

export default Main;
