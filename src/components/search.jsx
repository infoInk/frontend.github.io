import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function FreeSolo() {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <TextField label="Search input" />
    </Stack>
  );
}
