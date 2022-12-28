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
import React, { SyntheticEvent, useEffect, useState } from "react";
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
import { useAppDispatch, useAppSelector } from "~/app/hooks";
import { getAllType } from "~/featureds/project/projectSlice";
import { getAllTypeProject } from "~/featureds/project/projectActions";

interface DataTypes {
  name: string;
  description: string;
  image: string;
  type: string;
  technologies: string[];
  links: [];
}

interface LinkTypes {
  label: string;
  url: string;
}

const CreateProject = () => {
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [links, setLinks] = useState<LinkTypes[]>([]);

  const [data, setData] = useState<DataTypes>({
    name: "",
    description: "",
    image: "",
    type: "",
    technologies: [],
    links: [],
  });

  const dispatch = useAppDispatch();
  const allTypeOfProject = useAppSelector(getAllType);

  useEffect(() => {
    dispatch(getAllTypeProject());
  }, []);

  // FIELD TECHNOLOGY
  const handleAddFieldTech = () => {
    const newTechnologies: any = [...technologies, []];
    setTechnologies(newTechnologies);
  };
  const handleChangeTechnology = (value: string, i: number) => {
    const newTechnologies = [...technologies];
    newTechnologies[i] = value;
    setTechnologies(newTechnologies);
  };
  const handleDeleteFieldTech = (i: number) => {
    const newTechnologies = [...technologies];
    newTechnologies.splice(i, 1);
    setTechnologies(newTechnologies);
  };

  // FIELD LINK
  const handleAddFieldLink = () => {
    const newLinks: LinkTypes[] = [...links, { label: "", url: "" }];
    setLinks(newLinks);
  };

  const handleChangeLabel = (value: string, currentInput: number) => {
    const newLinks: LinkTypes[] = [...links];
    newLinks[currentInput].label = value;
    setLinks(newLinks);
  };
  const handleChangeUrl = (value: string, currentInput: number) => {
    const newLinks: LinkTypes[] = [...links];
    newLinks[currentInput].url = value;
    setLinks(newLinks);
  };

  const handleDeleteFieldLink = (currentInput: number) => {
    const newLinks: LinkTypes[] = [...links];
    newLinks.splice(currentInput, 1);
    setLinks(newLinks);
  };

  // SUBMIT
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log({ ...data, technologies, links });
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
                height: "calc(100vh - 180px)",
                overflowY: "scroll",
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
                height: "calc(100vh - 180px)",
                overflowY: "scroll",
              }}
            >
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Type"
                value={data.type}
                onChange={(e) => setData({ ...data, type: e.target.value })}
                fullWidth
              >
                {allTypeOfProject?.length > 0 &&
                  allTypeOfProject.map((type) => (
                    <MenuItem key={type._id} value={"" + type.name}>
                      {type.name}
                    </MenuItem>
                  ))}
              </Select>

              {/* ===== Field Technology ==== */}
              <MoreTechnologyIcon onClick={handleAddFieldTech}>
                <AddBoxIcon className="icon" />
                <Typography className="content">More technology</Typography>
              </MoreTechnologyIcon>
              {technologies.map((inputValue, index) => (
                <InputForm
                  key={index}
                  value={inputValue}
                  onChange={(e) =>
                    handleChangeTechnology(e.target.value, index)
                  }
                  label={`technology ${index + 1}`}
                  placeholder="technology..."
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        onClick={() => handleDeleteFieldTech(index)}
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

              {/* ===== Field Link ==== */}
              <MoreTechnologyIcon onClick={handleAddFieldLink}>
                <AddBoxIcon className="icon" />
                <Typography className="content">More link</Typography>
              </MoreTechnologyIcon>
              {links.map((link, index) => (
                <Box component="div" key={index} sx={{ marginTop: 2 }}>
                  <InputForm
                    label={`Label ${index + 1}`}
                    placeholder="label link..."
                    value={link.label}
                    onChange={(e) => handleChangeLabel(e.target.value, index)}
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment
                          position="end"
                          onClick={() => handleDeleteFieldLink(index)}
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

                  <InputForm
                    value={link.url}
                    onChange={(e) => handleChangeUrl(e.target.value, index)}
                    label={`url ${index + 1}`}
                    placeholder="url..."
                    fullWidth
                  />
                </Box>
              ))}

              <ButtonSubmit type="submit">Create project</ButtonSubmit>
            </Box>
          </Grid>
        </Grid>
      </Form>
    </Container>
  );
};

export default CreateProject;
