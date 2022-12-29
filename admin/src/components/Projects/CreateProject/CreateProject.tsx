import AddBoxIcon from "@mui/icons-material/AddBox";
import ClearIcon from "@mui/icons-material/Clear";
import {
  Box,
  Grid,
  InputAdornment,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { SyntheticEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useAppDispatch, useAppSelector } from "~/app/hooks";
import { ProjectTypes, TypeOfProject } from "~/common/types";
import ProfileBreakcrumb from "~/components/Breakcrumb/Profile/ProfileBreakcrumb";
import { createProject } from "~/featureds/project/projectActions";
import { getAllTypeProject } from "~/featureds/typeProject/typeProjectActions";
import { getAllType } from "~/featureds/typeProject/typeProjectSlice";
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
interface DataTypes {
  name: string;
  description: string;
  image: string;
  type: string;
  technologicals: string[];
  links: [];
}

interface LinkTypes {
  label: string;
  url: string;
}

const CreateProject = () => {
  const [technologicals, setTechnologicals] = useState<string[]>([]);
  const [links, setLinks] = useState<LinkTypes[]>([]);
  const [data, setData] = useState<DataTypes>({
    name: "",
    description: "",
    image: "",
    type: "",
    technologicals: [],
    links: [],
  });

  const dispatch = useAppDispatch();
  const allTypeOfProject = useAppSelector(getAllType);

  useEffect(() => {
    dispatch(getAllTypeProject());
  }, []);

  // FIELD TECHNOLOGY
  const handleAddFieldTech = () => {
    const newTechnologies: any = [...technologicals, []];
    setTechnologicals(newTechnologies);
  };
  const handleChangeTechnology = (value: string, i: number) => {
    const newTechnologies = [...technologicals];
    newTechnologies[i] = value;
    setTechnologicals(newTechnologies);
  };
  const handleDeleteFieldTech = (i: number) => {
    const newTechnologies = [...technologicals];
    newTechnologies.splice(i, 1);
    setTechnologicals(newTechnologies);
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

  const handleChangeImage = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setData({ ...data, image: reader.result as string });
      }
    };
    reader.readAsDataURL(file);
  };

  // SUBMIT
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const payload: ProjectTypes = { ...data, technologicals, links };
    if (data.image) {
      dispatch(createProject(payload));
      setData({
        name: "",
        description: "",
        image: "",
        type: "",
        technologicals: [],
        links: [],
      });
    } else {
      toast("Please select image for project");
    }
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
                required
              />
              <InputForm
                multiline
                value={data.description}
                onChange={(e) =>
                  setData({ ...data, description: e.target.value })
                }
                label="description"
                placeholder="description..."
                fullWidth
                required
              />

              <InputImage
                type="file"
                hidden
                id="input_img"
                defaultValue={data.image}
                onChange={handleChangeImage}
                accept="image/*"
              />

              <LabelImage htmlFor="input_img">Drop or Select file</LabelImage>

              <ImgResult>
                {data.image && <img src={`${data.image}`} alt="" />}
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
                required
              >
                {allTypeOfProject?.length > 0 &&
                  allTypeOfProject.map((type: TypeOfProject) => (
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
              {technologicals.map((inputValue, index) => (
                <InputForm
                  key={index}
                  value={inputValue}
                  required
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
                    required
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
                    required
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

      <ToastContainer theme="dark" />
    </Container>
  );
};

export default CreateProject;
