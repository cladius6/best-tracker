import type { NextPage } from "next";
import {
  Box,
  Button,
  Container,
  FormControl,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AddNewUser } from "../api/addNewUser";
import { IAddNewUserResponse } from "../types/addNewUser";
import Link from "next/link";

const Home: NextPage = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
    },
    onSubmit: (values) => {
      console.log(values.username);
      new AddNewUser()
        .add({ username: values.username })
        .then((res: IAddNewUserResponse) => {
          console.log(res);
        });
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(100, "Must be less than 100 char")
        .required("Required"),
    }),
  });

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" align="center">
        NON RETRO TRACKER
      </Typography>
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
        <Box sx={{ marginBottom: "2rem" }}>
          <Typography variant="h4" component="h1">
            Your Username
          </Typography>
        </Box>
        <FormControl
          component="form"
          autoComplete="off"
          sx={{ width: "100%" }}
          onSubmit={formik.handleSubmit}
        >
          <TextField
            fullWidth
            placeholder="Username"
            size="small"
            sx={{ marginBottom: "1rem" }}
            id="username"
            name="username"
            type="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <Button variant="outlined" type="submit">
            <Link href="/main">Send!</Link>
          </Button>
        </FormControl>
      </Paper>
    </Container>
  );
};

export default Home;
