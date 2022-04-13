import { Box, Typography, Modal, IconButton, Container } from "@mui/material";
import { ExercisesList } from "./ExercisesList";
import { WorkoutName } from "./WorkoutName";
import {
  IExercisesResponse,
  IExerciseWithRepeats,
} from "../../types/exercises";
import { ChoosenExercisesList } from "./ChoosenExercisesList";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { IExercise } from "../../../backend/src/exercise/interfaces/exercise.interface";

interface ModalWithExercisesProps {
  openModal: boolean;
  closeModal: () => void;
  exercises: IExercise[];
}

export const ModalWithExercises = ({
  openModal,
  closeModal,
  exercises,
}: ModalWithExercisesProps) => {
  const [choosenExercises, setChoosenExercises] = useState<
    IExerciseWithRepeats[]
  >([]);

  return (
    <>
      <Modal
        open={openModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container
          fixed
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 800,
            height: 500,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            overflowY: "scroll",
          }}
        >
          <IconButton
            onClick={() => {
              closeModal();
              setChoosenExercises([]);
            }}
          >
            <CloseIcon />
          </IconButton>
          <WorkoutName />
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, textAlign: "center" }}
          >
            Choose your exercises
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <ExercisesList
              setChoosenExercises={setChoosenExercises}
              exercises={exercises}
            />
            <ChoosenExercisesList choosenExercises={choosenExercises} />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></Box>
        </Container>
      </Modal>
    </>
  );
};
