import React, { useState } from "react";
import { Container, Input, ResultContainer } from "./inputSearchStyles";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, Typography } from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";
type Props = {
  open: boolean;
};

const InputSearch: React.FC<Props> = ({ open }) => {
  const [openResult, setOpenResult] = useState(false);

  return (
    <Container open={open} onClick={(e) => e.stopPropagation()}>
      <Input
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
        onFocus={() => setOpenResult(true)}
        onBlur={() => setOpenResult(false)}
      />

      {openResult && (
        <ResultContainer>
          <Typography>Search result</Typography>
        </ResultContainer>
      )}
    </Container>
  );
};

export default InputSearch;
