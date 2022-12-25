import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import SignLanguageIcon from "@mui/icons-material/SignLanguage";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import BatteryCharging60Icon from "@mui/icons-material/BatteryCharging60";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { Box, Typography } from "@mui/material";
import {
  Avatar,
  Caption,
  Container,
  Emotion,
  EmotionItem,
  Icon,
  IconShare,
  ImagePost,
  Info,
  PostItem,
  UserInfo,
} from "./postListStyles";
import { useState } from "react";
type Props = {};

const PostList = (props: Props) => {
  const [likeNumber, setLikeNumber] = useState(0);
  const posts = new Array(10).fill(null);
  return (
    <Container>
      {posts.map((post) => (
        <PostItem>
          <UserInfo>
            <Box
              component="div"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Avatar>
                <img src="/assets/images/avatar-placeholder.jpg" alt="" />
              </Avatar>
              <Info>
                <Typography className="name">Minh Tai</Typography>
                <Typography className="date">25 Dec 2022</Typography>
              </Info>
            </Box>

            <MoreVertIcon className="dot_icon" />
          </UserInfo>

          <Caption>
            Assumenda nam repudiandae rerum fugiat vel maxime.Assumenda nam
            repudiandae rerum fugiat vel maxime.Assumenda nam repudiandae rerum
            fugiat vel maxime.Assumenda nam repudiandae rerum fugiat vel
            maxime.Assumenda nam repudiandae rerum fugiat vel maxime.Assumenda
            nam repudiandae rerum fugiat vel maxime.Assumenda nam repudiandae
            rerum fugiat vel maxime.Assumenda nam repudiandae rerum fugiat vel
            maxime.
          </Caption>

          <ImagePost>
            <img
              src="https://i.pinimg.com/564x/83/03/29/83032955f7a1e0478d58177f531c5b5c.jpg"
              alt=""
            />
          </ImagePost>

          <Emotion>
            <EmotionItem>
              <Icon onClick={() => setLikeNumber(likeNumber + 1)}>
                <img src="/assets/icons/like.webp" className="icon" />
              </Icon>
              <Typography className="number">{likeNumber}</Typography>
            </EmotionItem>

            <EmotionItem>
              <Icon>
                <img src="/assets/icons/heart.webp" className="icon" />
              </Icon>
              <Typography className="number">24</Typography>
            </EmotionItem>
            <EmotionItem>
              <Icon>
                <img src="/assets/icons/money.webp" className="icon" />
              </Icon>
              <Typography className="number">24</Typography>
            </EmotionItem>
            <EmotionItem>
              <Icon>
                <img src="/assets/icons/champions.webp" className="icon" />
              </Icon>
              <Typography className="number">24</Typography>
            </EmotionItem>
            <EmotionItem>
              <Icon>
                <img src="/assets/icons/beer.webp" className="icon" />
              </Icon>
              <Typography className="number">24</Typography>
            </EmotionItem>

            <IconShare>
              <ShareIcon className="icon" />
            </IconShare>
          </Emotion>
        </PostItem>
      ))}
    </Container>
  );
};

export default PostList;
