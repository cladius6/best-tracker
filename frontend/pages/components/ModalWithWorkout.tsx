import {  Modal, Paper } from "@mui/material";
import { IWorkout } from "../../types/addNewWorkout";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface ModalWithWorkoutProp {
  open: boolean;
  handleClose: () => void;
  workoutsList: IWorkout[];
  workoutName: string;
}

export const ModalWithWorkout = ({
  open,
  handleClose,
  workoutsList,
  workoutName,
}: ModalWithWorkoutProp) => {
  console.log(workoutsList, workoutName);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Paper sx={style}>
        {workoutsList.map((workout) =>
          workout.exercises.map((exercise) => (
            <div key={exercise.id}>
              {workout.name === workoutName ? <div>{exercise.name}</div> : null}
            </div>
          ))
        )}
      </Paper>
    </Modal>
  );
};
