import {
  Autocomplete,
  Box,
  Grid,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import ProfileBreakcrumb from "~/components/Breakcrumb/Profile/ProfileBreakcrumb";
import TableTypes from "~/components/Tables/TableTypes";
import {
  ButtonSubmit,
  Container,
  Form,
  ImgResult,
  InputForm,
  InputImage,
  LabelImage,
  MoreTechnologyIcon,
} from "./createProjectStyles";
import AddBoxIcon from "@mui/icons-material/AddBox";

interface DataTypes {
  name: string;
  description: string;
  image: string;
  type: string;
  technologies: string[];
  links: [];
}

const CreateProject = () => {
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [data, setData] = useState<DataTypes>({
    name: "",
    description: "",
    image: "",
    type: "",
    technologies: [],
    links: [],
  });

  const handleAddField = () => {
    const newTechnologies: any = [...technologies, []];
    setTechnologies(newTechnologies);
  };
  const handleChangeTechnology = (value: any, i: number) => {
    const inputdata = [...technologies];
    inputdata[i] = value.target.value;
    setTechnologies(inputdata);
  };
  const handleDeleteField = (i: number) => {
    const technologyClone = [...technologies];
    technologyClone.splice(i, 1);
    setTechnologies(technologyClone);
  };
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log({ ...data, technologies });
  };

  return (
    <Container>
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
          <Link to="/project/create-project" key={2}>
            <Typography
              sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
            >
              Create Project
            </Typography>
          </Link>,
        ]}
      />
      <Form onSubmit={handleSubmit}>
        <Grid container spacing={2} alignItems="start">
          <Grid item desktop={6} laptop={6} tablet={6} mobile={12}>
            <Box
              component="div"
              sx={{
                background: "#fff",
                padding: 2,
                borderRadius: 1.2,
              }}
            >
              <InputForm
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                label="name"
                placeholder="name..."
                fullWidth
              />
              <InputForm
                label="description"
                placeholder="description..."
                fullWidth
              />

              <InputImage type="file" hidden id="input_img" />

              <LabelImage htmlFor="input_img">Drop or Select file</LabelImage>

              <ImgResult>
                <img src="/assets/images/avatar-placeholder.jpg" alt="" />
              </ImgResult>
            </Box>
          </Grid>

          <Grid item desktop={6} laptop={6} tablet={6} mobile={12}>
            <Box
              component="div"
              sx={{
                background: "#fff",
                padding: 2,
                borderRadius: 1.2,
              }}
            >
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Type"
                value="poster"
                fullWidth
              >
                <MenuItem value={"web-code"}>web-code</MenuItem>
                <MenuItem value={"web-design"}>web-design</MenuItem>
                <MenuItem value={"poster"}>poster</MenuItem>
              </Select>

              {technologies.map((inputValue, index) => (
                <InputForm
                  key={index}
                  value={inputValue}
                  onChange={(e) => handleChangeTechnology(e, index)}
                  label="technologies"
                  placeholder="technologies..."
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        onClick={() => handleDeleteField(index)}
                      >
                        <ClearIcon
                          className="icon"
                          sx={{
                            fontSize: 24,
                            color: "#000",
                            cursor: "pointer",
                          }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              ))}
              <MoreTechnologyIcon onClick={handleAddField}>
                <Typography className="content">More technology</Typography>
                <AddBoxIcon className="icon" />
              </MoreTechnologyIcon>

              <ButtonSubmit type="submit">Create project</ButtonSubmit>
            </Box>
          </Grid>
        </Grid>
      </Form>
    </Container>
  );
};

export default CreateProject;
