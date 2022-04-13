import { Box, Typography, Modal } from "@mui/material";
import { ExercisesList } from "./ExercisesList";
import { WorkoutName } from "./WorkoutName";
import { IExerciseWithRepeats } from "../../types/exercises";
import { ChoosenExercisesList } from "./ChoosenExercisesList";
import { useState } from "react";

interface ModalWithExercisesProps {
  openModal: boolean;
  saveWorkout: () => void;
}

export const ModalWithExercises = ({
  openModal,
  saveWorkout,
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
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 700,
            height: 500,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            overflowY: "scroll",
          }}
        >
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
              justifyContent: "space-between",
            }}
          >
            <ExercisesList setChoosenExercises={setChoosenExercises} />
            <ChoosenExercisesList
              saveWorkout={saveWorkout}
              choosenExercises={choosenExercises}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></Box>
        </Box>
      </Modal>
    </>
  );
};
