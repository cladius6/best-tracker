import { useFormik } from "formik";
import * as Yup from "yup";
import { AddNewUser } from "../../api/addNewUser";
import { IAddNewUserResponse } from "../../types/addNewUser";
import { Button, FormControl, TextField } from "@mui/material";
import Link from "next/link";

export const UsernameForm = () => {
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
  );
};
