import { Link } from "@mui/material";
import {
  FaBehanceSquare,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";
import { Container, SocialItem, SocialList } from "./socialStyles";
type Props = {};

const SocialProfile = (props: Props) => {
  return (
    <Container>
      <SocialList>
        <SocialItem>
          <FaFacebookSquare className="icon" fontSize={18} color={"blue"} />

          <Link underline="hover" href={`#`} className="link">
            https://www.facebook.com/MynameisConian/
          </Link>
        </SocialItem>
        <SocialItem>
          <FaInstagram className="icon" fontSize={18} color={"red"} />
          <Link underline="hover" href={`#`} className="link">
            https://www.instagram.com/conianguys/
          </Link>
        </SocialItem>
        <SocialItem>
          <FaLinkedin
            className="icon"
            fontSize={18}
            color={"rgb(58, 43, 186)"}
          />
          <Link underline="hover" href={`#`} className="link">
            https://www.linkedin.com/in/minh-tai-a14134228/
          </Link>
        </SocialItem>
        <SocialItem>
          <FaBehanceSquare className="icon" fontSize={18} color={"#000"} />
          <Link underline="hover" href={`#`} className="link">
            https://www.behance.net/imconianguys
          </Link>
        </SocialItem>
        <SocialItem>
          <FaGithubSquare className="icon" fontSize={18} color={"#000"} />
          <Link underline="hover" href={`#`} className="link">
            https://github.com/conian250501
          </Link>
        </SocialItem>
      </SocialList>
    </Container>
  );
};

export default SocialProfile;
