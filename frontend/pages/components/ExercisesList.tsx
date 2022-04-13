import {
  List,
  Paper,
  ListItem,
  ListItemText,
  Button,
  Collapse,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { mockExercises } from "../../mocks/exercises";
import { IExercisesResponse } from "../../types/exercises";
import { RepeatsForm } from "./RepeatsForm";

export const ExercisesList = (setChoosenExercises: any) => {
  const [openNestedInput, setOpenNestedInput] = useState(false);
  const [itemId, setItemId] = useState("");
  const [repeats, setRepeats] = useState("");

  const handleAddClick = () => {
    setOpenNestedInput(!openNestedInput);
  };

  const qwe = {
    id: "1",
    reps: "2",
  };

  const handleAddExerciseClick = (exercises: any) => {
    // setChoosenExercises(exercises);
    setChoosenExercises((prevState: any) => {
      return [...prevState, exercises];
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepeats(e.target.value);
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
      {mockExercises.map((mockExercise) => (
        <>
          <Paper
            sx={{
              width: "100%",
            }}
          >
            <ListItem key={mockExercise.id} sx={{ marginBottom: "3px" }}>
              <ListItemText primary={`${mockExercise.name}`} />
              <Button
                onClick={() => {
                  setItemId(mockExercise.id);
                  handleAddClick();
                  console.log("Add exercise to workout");
                }}
              >
                +
              </Button>
            </ListItem>
          </Paper>
          {mockExercise.id === itemId ? (
            <Collapse in={openNestedInput} timeout="auto" unmountOnExit>
              <List
                component="div"
                disablePadding
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <TextField
                  fullWidth
                  placeholder="Repeats"
                  size="small"
                  sx={{ marginBottom: "1rem" }}
                  id="repeats"
                  name="repeats"
                  type="text"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(e)
                  }
                />
                <Button
                  onClick={() => {
                    handleAddExerciseClick(mockExercise);
                  }}
                  sx={{ height: "40px" }}
                >
                  Add
                </Button>
              </List>
            </Collapse>
          ) : null}
        </>
      ))}
    </List>
  );
};
