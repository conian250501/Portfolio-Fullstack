import { Box, Input, Typography } from "@mui/material";
import {
  ButtonSubmit,
  Container,
  InputCaption,
  InputImage,
  LabelInputImage,
} from "./postFormStyles";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import { useState } from "react";
type Props = {};

const PostCreate = (props: Props) => {
  const [caption, setCaption] = useState("");
  const [images, setImages] = useState("");
  return (
    <Container>
      <Box component="form">
        <InputCaption
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="Enter your caption..."
        />
        <Box
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "12px",
          }}
        >
          <InputImage type="file" hidden multiple id="input_image" />
          <LabelInputImage htmlFor="input_image">
            <InsertPhotoIcon className="icon" />
            <Typography className="content">Image/Video</Typography>
          </LabelInputImage>
          <ButtonSubmit type="submit">Post</ButtonSubmit>
        </Box>
      </Box>
    </Container>
  );
};

export default PostCreate;
