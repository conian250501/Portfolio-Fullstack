import CachedIcon from "@mui/icons-material/Cached";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { Container } from "./inputSearchStyles";

const InputSearch: React.FC = () => {
  return (
    <Container onClick={(e) => e.stopPropagation()}>
      <TextField
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <CachedIcon />
            </InputAdornment>
          ),
        }}
        placeholder="Search..."
      />
    </Container>
  );
};

export default InputSearch;
