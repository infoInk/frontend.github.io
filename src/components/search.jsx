import React from "react";
import { InputBase, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = () => {
  return (
    <Box
      sx={{
        border: "1px solid #ADACB0",
        borderRadius: "6px ",
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
