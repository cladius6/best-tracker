import {
  List,
  Paper,
  ListItem,
  ListItemText,
  Button,
  Collapse,
} from "@mui/material";
import { useState } from "react";
import { mockExercises } from "../../mocks/exercises";
import { RepeatsForm } from "./RepeatsForm";

export const ExercisesList = () => {
  const [openNestedInput, setOpenNestedInput] = useState(false);
  const [itemId, setItemId] = useState("");

  const handleAddClick = () => {
    setOpenNestedInput(!openNestedInput);
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
                <RepeatsForm />
              </List>
            </Collapse>
          ) : null}
        </>
      ))}
    </List>
  );
};
