import {
  List,
  Paper,
  ListItem,
  ListItemText,
  Button,
  Box,
  TextField,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { IExerciseWithRepeats } from "../../types/exercises";
import { MockWorkoutApi } from "../../api/addNewWorkout";
import { useState } from "react";

interface ChoosenExercisesListProp {
  choosenExercises: IExerciseWithRepeats[];
  refreshWorkouts: () => Promise<void>;
}

export const ChoosenExercisesList = ({
  choosenExercises,
  refreshWorkouts,
}: ChoosenExercisesListProp) => {
  const [workoutName, setWorkoutName] = useState("");

  const saveWorkout = async (choosenExercises: IExerciseWithRepeats[]) => {
    const workout = await new MockWorkoutApi().add({
      exercises: choosenExercises,
      name: workoutName,
      username: localStorage.getItem("username") ?? "",
    });
    refreshWorkouts();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWorkoutName(e.target.value);
  };
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        margin: "0 auto",
      }}
    >
      <TextField
        fullWidth
        placeholder="Workout name"
        size="small"
        sx={{ marginBottom: "1rem" }}
        id="workout"
        name="workout"
        type="text"
        value={workoutName}
        autoComplete="off"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
      />
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
