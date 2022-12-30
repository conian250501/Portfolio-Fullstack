import {
  Backdrop,
  Box,
  Fade,
  Grid,
  InputAdornment,
  MenuItem,
  Modal,
  Select,
  Typography,
} from "@mui/material";
import React, { SyntheticEvent } from "react";
import { useAppDispatch, useAppSelector } from "~/app/hooks";
import {
  LinkTypes,
  PayloadUpdateProject,
  ProjectTypes,
  TypeOfProject,
} from "~/common/types";
import {
  ButtonSubmit,
  Container,
  Form,
  ImgResult,
  InputForm,
  InputImage,
  LabelImage,
  MoreTechnologyIcon,
} from "./styles";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ClearIcon from "@mui/icons-material/Clear";
import { selectProject } from "~/featureds/project/projectSlice";
import { getAllType } from "~/featureds/typeProject/typeProjectSlice";
import {
  getAllTypeProject,
  getTypeProject,
} from "~/featureds/typeProject/typeProjectActions";
import { updateProject } from "~/featureds/project/projectActions";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};
interface DataTypes {
  name: string;
  description: string;
  image: string;
  type: string;
  technologicals: string[];
  links: [];
}
const FormEditProjects: React.FC<Props> = ({ isOpen, onClose }) => {
  const [data, setData] = React.useState<DataTypes>({
    name: "",
    description: "",
    image: "",
    type: "",
    technologicals: [],
    links: [],
  });

  const dispatch = useAppDispatch();
  const project = useAppSelector(selectProject);
  const allTypeOfProject = useAppSelector(getAllType);
  React.useEffect(() => {
    setData({
      ...data,
      name: project.name,
      description: project.description,
      image: project.image,
      type: project.type.name,
      technologicals: project.technologicals,
      links: project.links as [],
    });
  }, [project]);

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

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const payload: PayloadUpdateProject = { data, id: project._id };
    await dispatch(updateProject(payload));
    onClose();
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
    >
      <Fade in={isOpen}>
        <Container>
          <Form onSubmit={handleSubmit}>
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
              onChange={handleChangeImage}
              accept="image/*"
            />

            <LabelImage htmlFor="input_img">Change file</LabelImage>

            <ImgResult>
              {data.image && <img src={`${data.image}`} alt="" />}
            </ImgResult>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Type"
              value={data.type}
              onChange={(e) => setData({ ...data, type: e.target.value })}
              fullWidth
              required
            >
              {allTypeOfProject &&
                allTypeOfProject.map((type: TypeOfProject) => (
                  <MenuItem key={type._id} value={"" + type.name}>
                    {type.name}
                  </MenuItem>
                ))}
            </Select>

            <ButtonSubmit type="submit">Update project</ButtonSubmit>
          </Form>
        </Container>
      </Fade>
    </Modal>
  );
};

export default FormEditProjects;
