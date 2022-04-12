import { Box, Button, Typography, Modal } from "@mui/material";
import { ExercisesList } from "./ExercisesList";
import { WorkoutName } from "./WorkoutName";
import SaveIcon from "@mui/icons-material/Save";

interface ModalWithExercisesProps {
  openModal: boolean;
  saveWorkout: () => void;
}

export const ModalWithExercises = ({
  openModal,
  saveWorkout,
}: ModalWithExercisesProps) => {
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
            width: 1000,
            height: 700,
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
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <ExercisesList />
            Right Column with added exercises
          </Box>
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
              onClick={saveWorkout}
              endIcon={<SaveIcon />}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};
