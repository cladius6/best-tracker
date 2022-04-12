import { Button, FormControl, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

export const RepeatsForm = () => {
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
        error={formik.touched.reps && Boolean(formik.errors.reps)}
        helperText={formik.touched.reps && formik.errors.reps}
      />
      <Button variant="outlined" type="submit" sx={{ width: "4%" }}>
        Add
      </Button>
    </FormControl>
  );
};
