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
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "~/app/hooks";
import { ProjectTypes } from "~/common/types";
import { createTypeProject } from "~/featureds/project/projectActions";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  isUpdate: boolean;
};

const FormTypes = ({ isOpen, onClose, isUpdate }: Props) => {
  const { register, handleSubmit, setValue } = useForm<ProjectTypes>();
  const dispatch = useAppDispatch();
  const handleCreateType: SubmitHandler<ProjectTypes> = (data) => {
    dispatch(createTypeProject(data));
    setValue("name", "");
  };
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
          onSubmit={handleSubmit(handleCreateType)}
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
            placeholder="enter new type project..."
            label="Project's type"
            fullWidth
            required
            {...register("name", { required: true })}
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
            {isUpdate ? "update" : "Add"}
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
};

export default FormTypes;
