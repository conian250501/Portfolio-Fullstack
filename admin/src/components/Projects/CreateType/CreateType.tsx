import { Box, Typography } from "@mui/material";
import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import ProfileBreakcrumb from "~/components/Breakcrumb/Profile/ProfileBreakcrumb";
import FormTypes from "~/components/Modals/FormTypes";
import TableTypes from "~/components/Tables/TableTypes";
import { ButtonNewType, Container } from "./createTypeStyles";

type Props = {};

const CreateType = (props: Props) => {
  const [openForm, setOpenForm] = React.useState(false);
  const handleOpenForm = () => setOpenForm(true);
  const handleCloseForm = () => setOpenForm(false);

  return (
    <Container>
      <Box
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <ProfileBreakcrumb
          breadcrumbs={[
            <Typography sx={{ fontSize: "14px", fontWeight: 500 }} key={3}>
              Conian guys
            </Typography>,
            <Link to="/project/all" key={1}>
              <Typography sx={{ fontSize: "14px", color: "#000" }}>
                Projects
              </Typography>
            </Link>,
            <Link to="create-type" key={2}>
              <Typography
                sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
              >
                Create Type
              </Typography>
            </Link>,
          ]}
        />
        <ButtonNewType onClick={handleOpenForm}>Add new type</ButtonNewType>
        <FormTypes
          isOpen={openForm}
          onClose={handleCloseForm}
          isUpdate={false}
          id={""}
        />
      </Box>
      <TableTypes />
    </Container>
  );
};

export default CreateType;
