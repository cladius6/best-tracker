import {
  List,
  Paper,
  ListItem,
  ListItemText,
  Button,
  Box,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { IExerciseWithRepeats } from "../../types/exercises";
import { AddNewWorkout } from "../../api/addNewWorkout";

interface ChoosenExercisesListProp {
  choosenExercises: IExerciseWithRepeats[];
}

const saveWorkout = async (choosenExercises: IExerciseWithRepeats[]) => {
  const workout = await new AddNewWorkout().add({
    exercises: choosenExercises,
  });
};

export const ChoosenExercisesList = ({
  choosenExercises,
}: ChoosenExercisesListProp) => {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        margin: "0 auto",
      }}
    >
      {choosenExercises.map((exercise) => (
        <>
          <Paper
            sx={{
              width: "80%",
              backgroundColor: "#2e7d32",
            }}
          >
            <ListItem key={exercise.id} sx={{ marginBottom: "3px" }}>
              <ListItemText
                primary={`${exercise.repeats} x ${exercise.name}`}
                sx={{ fontWeigth: "bold", textAlign: "right", color: "white" }}
              />
            </ListItem>
          </Paper>
        </>
      ))}
      {choosenExercises.length != 0 ? (
        <Box sx={{ display: "flex", justifyContent: "center", width: "80%" }}>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              console.log(choosenExercises);
              saveWorkout(choosenExercises);
            }}
            endIcon={<SaveIcon />}
          >
            Save
          </Button>
        </Box>
      ) : null}
    </List>
  );
};
