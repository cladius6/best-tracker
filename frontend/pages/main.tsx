import * as React from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
  Modal,
  List,
  ListItem,
  ListItemText,
  Collapse,
  FormControl,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { getExercises } from "../api/exercises";
import { mockExercises } from "../mocks/exercises";
import SaveIcon from "@mui/icons-material/Save";
import { useFormik } from "formik";
import * as Yup from "yup";

const Main = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openNestedInput, setOpenNestedInput] = useState(false);
  const [itemId, setItemId] = useState("");

  const handleAddClick = () => {
    setOpenNestedInput(!openNestedInput);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
    console.log("otwarte");
    // getExercises().then((res) => console.log(res));
  };

  const handleCloseModalAndAddWorkout = () => {
    setOpenModal(false);
    console.log("dodano workout");
  };

  const formik = useFormik({
    initialValues: {
      reps: "",
    },
    onSubmit: (values) => {
      console.log(values.reps);
    },
    validationSchema: Yup.object({
      reps: Yup.string().required("Required"),
    }),
  });

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" align="center">
        NON RETRO TRACKER
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          marginTop: "30px",
          marginRight: "20px",
        }}
      >
        <Button
          variant="contained"
          color="success"
          onClick={handleOpenModal}
          sx={{ fontSize: "12px" }}
        >
          Create new workout
        </Button>
      </Box>
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
            width: 600,
            height: 500,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            overflowY: "scroll",
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ textAlign: "center" }}
          >
            WORKOUT 1
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, textAlign: "center" }}
          >
            Choose your exercises
          </Typography>

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
                      <FormControl
                        component="form"
                        autoComplete="off"
                        sx={{ width: "85%" }}
                        onSubmit={formik.handleSubmit}
                      >
                        <TextField
                          fullWidth
                          placeholder="Repeats"
                          size="small"
                          sx={{ marginBottom: "1rem" }}
                          id="repeats"
                          name="repeats"
                          type="number"
                          value={formik.values.reps}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.reps && Boolean(formik.errors.reps)
                          }
                          helperText={formik.touched.reps && formik.errors.reps}
                        />
                        <Button
                          variant="outlined"
                          type="submit"
                          sx={{ width: "4%" }}
                        >
                          Add
                        </Button>
                      </FormControl>
                    </List>
                  </Collapse>
                ) : null}
              </>
            ))}
          </List>
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
              onClick={handleCloseModalAndAddWorkout}
              endIcon={<SaveIcon />}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
      <Paper
        sx={{
          padding: "16px",
          width: "100%",
          maxWidth: "350px",
          display: "block",
          margin: "0 auto",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          overflowY: "auto",
        }}
      >
        WORKOUT 1
      </Paper>
    </Container>
  );
};

export default Main;
