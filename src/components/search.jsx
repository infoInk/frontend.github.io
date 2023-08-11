import React from "react";
import { InputBase, IconButton, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = () => {
  return (
    <Box
      component="form"
      elevation={0}
      sx={{
        border: "1px solid #ADACB0",
        borderRadius: "10% ",
      }}
    >
      <IconButton aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        placeholder="Search chat history"
        inputProps={{ "aria-label": "search" }}
      />
    </Box>
  );
};

export default SearchInput;
