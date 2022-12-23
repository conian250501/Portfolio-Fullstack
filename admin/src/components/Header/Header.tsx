import DragHandleIcon from "@mui/icons-material/DragHandle";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { openSidebar } from "../../featureds/Header/sidebarSlice";
import CountryLanguage from "../Tooltip/CountryLanguage";
import Notification from "../Tooltip/Notification";
import SettingUser from "../Tooltip/SettingUser";
import {
  Container,
  IconMenuBar,
  IconSearch,
  SectionLeft,
  SectionRight,
  SectionRightItem,
} from "./headerSytles";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleOpenHeader = () => {
    dispatch(openSidebar(true));
  };
  return (
    <>
      <Container>
        <SectionLeft>
          <IconMenuBar onClick={handleOpenHeader}>
            <DragHandleIcon className="menubar_icon" />
          </IconMenuBar>
          <IconSearch>
            <LocationSearchingIcon className="search_icon" />
          </IconSearch>
        </SectionLeft>

        <SectionRight>
          <SectionRightItem>
            <CountryLanguage />
          </SectionRightItem>

          <SectionRightItem>
            <Notification />
          </SectionRightItem>

          <SectionRightItem>
            <SettingUser />
          </SectionRightItem>
        </SectionRight>
      </Container>
    </>
  );
};

export default Header;
