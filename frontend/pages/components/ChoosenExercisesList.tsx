import { List, Paper, ListItem, ListItemText, Button } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { IExerciseWithRepeats } from "../../types/exercises";

interface ChoosenExercisesListProp {
  saveWorkout: () => void;
  choosenExercises: IExerciseWithRepeats[];
}

export const ChoosenExercisesList = ({
  saveWorkout,
  choosenExercises,
}: ChoosenExercisesListProp) => {
  console.log(choosenExercises);
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
              width: "100%",
              backgroundColor: "green",
            }}
          >
            <ListItem key={exercise.id} sx={{ marginBottom: "3px" }}>
              <ListItemText
                primary={`${exercise.repeats} x ${exercise.name}`}
              />
            </ListItem>
          </Paper>
        </>
      ))}
      {choosenExercises.length != 0 ? (
        <Button
          variant="contained"
          color="success"
          onClick={saveWorkout}
          endIcon={<SaveIcon />}
        >
          Save
        </Button>
      ) : null}
    </List>
  );
};
