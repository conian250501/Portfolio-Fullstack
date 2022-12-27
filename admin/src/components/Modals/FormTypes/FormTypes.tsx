import {
  Modal,
  Backdrop,
  Fade,
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import React, { useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  isUpdate: boolean;
};

const FormTypes = ({ isOpen, onClose, isUpdate }: Props) => {
  const [name, setName] = useState("");
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>
        <Box
          component="form"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "fit-content",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 2,
          }}
        >
          <Typography
            variant="h6"
            align="center"
            marginBottom="16px"
            fontWeight={600}
          >
            {isUpdate ? "Update type" : "Create new type"}
          </Typography>

          <TextField
            value={name}
            placeholder="enter new type project..."
            label="Project's type"
            fullWidth
            onChange={(e) => setName(e.target.value)}
          />
          <Button
            type="submit"
            sx={{
              marginTop: "16px",
              background: "rgb(58, 43, 186)",
              color: "#fff",
              fontSize: "14px",
              fontWeight: "600",
              textTransform: "capitalize",
              ":hover": { background: "rgb(58, 43, 186)" },
            }}
          >
            Add
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
};

export default FormTypes;
