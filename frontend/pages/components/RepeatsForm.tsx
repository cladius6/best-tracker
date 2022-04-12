import { Button, FormControl, TextField } from "@mui/material";
import { useFormik } from "formik";

export const RepeatsForm = () => {
  const formik = useFormik({
    initialValues: {
      reps: "",
    },
    onSubmit: (values) => {
      console.log(values.reps);
    },
  });

  return (
    <FormControl
      component="form"
      sx={{
        width: "100%",
        flexDirection: "row",
      }}
      onSubmit={formik.handleSubmit}
    >
      <TextField
        fullWidth
        placeholder="Repeats"
        size="small"
        sx={{ marginBottom: "1rem" }}
        id="repeats"
        name="repeats"
        type="text"
        value={formik.values.reps}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <Button
        variant="contained"
        type="submit"
        sx={{ height: "70%", marginLeft: "3px" }}
      >
        Add
      </Button>
    </FormControl>
  );
};
