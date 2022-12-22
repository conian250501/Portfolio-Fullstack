import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import React, { useEffect, useState } from "react";
import InputSearch from "../InputSearch";
import CountryLanguage from "../Tooltip/CountryLanguage";
import Notification from "../Tooltip/Notification";
import SettingUser from "../Tooltip/SettingUser";
import { Container, IconSearch, SectionRight, SectionRightItem } from "./headerSytles";

const Header: React.FC = () => {
  const [openSearch, setOpenSearch] = useState(false);

  useEffect(() => {
    const handleCloseSearch = () => {
      setOpenSearch(false);
    };
    window.addEventListener("click", handleCloseSearch);

    return () => {
      window.removeEventListener("click", handleCloseSearch);
    };
  }, [openSearch]);
  return (
    <>
      <InputSearch open={openSearch} />
      <Container>
        <IconSearch
          onClick={(e) => {
            e.stopPropagation();
            setOpenSearch(!openSearch);
          }}
        >
          <LocationSearchingIcon className="search_icon" />
        </IconSearch>

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
