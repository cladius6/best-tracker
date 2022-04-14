import {
  Typography,
  Modal,
  Paper,
  ListItem,
  ListItemText,
  List,
  IconButton,
} from "@mui/material";
import { IWorkout } from "../../types/addNewWorkout";
import CloseIcon from "@mui/icons-material/Close";

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
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <List sx={style}>
        <IconButton
          onClick={() => {
            handleClose();
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography
          sx={{
            textAlign: "center",
            mb: 5,
            fontWeight: "bold",
            fontSize: "2rem",
          }}
        >
          {workoutName}
        </Typography>
        {workoutsList.map((workout) =>
          workout.exercises.map((exercise) => (
            <>
              <Paper
                sx={{
                  width: "80%",
                }}
              >
                <ListItem
                  key={exercise.id}
                  sx={{ marginBottom: "3px", fontWeight: "bold" }}
                >
                  {workout.name === workoutName ? (
                    <ListItemText
                      primary={`${exercise.repeats} x ${exercise.name}`}
                    />
                  ) : null}
                </ListItem>
              </Paper>
            </>
          ))
        )}
      </List>
    </Modal>
  );
};
