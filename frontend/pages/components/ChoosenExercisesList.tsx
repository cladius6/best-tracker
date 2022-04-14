import {
  List,
  Paper,
  ListItem,
  ListItemText,
  Button,
  Box,
  TextField,
  FormControl,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { IExerciseWithRepeats } from "../../types/exercises";
import { MockWorkoutApi } from "../../api/addNewWorkout";
import { Dispatch, SetStateAction, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

interface ChoosenExercisesListProp {
  choosenExercises: IExerciseWithRepeats[];
  refreshWorkouts: () => Promise<void>;
  closeModal: () => void;
  setChoosenExercises: Dispatch<SetStateAction<IExerciseWithRepeats[]>>;
}

export const ChoosenExercisesList = ({
  choosenExercises,
  refreshWorkouts,
  closeModal,
  setChoosenExercises,
}: ChoosenExercisesListProp) => {
  const [workoutName, setWorkoutName] = useState("");

  const formik = useFormik({
    initialValues: {
      workoutName: "",
    },
    onSubmit: (values) => {
      setWorkoutName(values.workoutName);
    },
    validationSchema: Yup.object({
      workoutName: Yup.string().required("Required"),
    }),
  });

  const saveWorkout = async (choosenExercises: IExerciseWithRepeats[]) => {
    const workout = await new MockWorkoutApi().add({
      exercises: choosenExercises,
      name: workoutName,
      username: localStorage.getItem("username") ?? "",
    });
    refreshWorkouts();
    closeModal();
    setChoosenExercises([]);
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
      <FormControl
        component="form"
        autoComplete="off"
        sx={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
        onSubmit={formik.handleSubmit}
      >
        <TextField
          fullWidth
          size="small"
          sx={{ marginBottom: "1rem", marginLeft: "30px" }}
          id="workoutName"
          name="workoutName"
          type="text"
          label="Your Workout name"
          variant="standard"
          value={formik.values.workoutName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.workoutName && Boolean(formik.errors.workoutName)
          }
          helperText={formik.touched.workoutName && formik.errors.workoutName}
        />
      </FormControl>
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
