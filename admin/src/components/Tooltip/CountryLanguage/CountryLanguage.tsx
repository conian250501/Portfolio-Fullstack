import { Popover, Typography } from "@mui/material";
import { VN, GB, CN, FR, AR } from "country-flag-icons/react/3x2";
import React, { useState } from "react";
import { CountryItem, CountryList, IconCountry } from "./countryLanguageStyles";

type Props = {};

const CountryLanguage = (props: Props) => {
  const [countryAnchor, setCountryAnchor] = useState<HTMLDivElement | null>(null);
  const [openCountry, setOpenCountry] = useState(false);
  const handleCloseCountry = () => {
    setCountryAnchor(null);
    setOpenCountry(false);
  };

  return (
    <IconCountry
      aria-describedby={openCountry ? "simple-popover" : undefined}
      onClick={(e) => {
        setOpenCountry(!openCountry);
        setCountryAnchor(e.currentTarget);
      }}
    >
      <VN className="country_icon" />
      <Popover
        PaperProps={{
          sx: {
            borderRadius: "8px",
            overflow: "visible",
            ":before": {
              content: '""',
              position: "absolute",
              top: -8,
              right: 10,
              width: 0,
              height: 0,
              borderLeft: "12px solid transparent",
              borderRight: "12px solid transparent",
              borderBottom: "12px solid #fff",
            },
          },
        }}
        id={openCountry ? "simple-popover" : undefined}
        open={openCountry}
        anchorEl={countryAnchor}
        onClose={handleCloseCountry}
        elevation={1}
        anchorOrigin={{
          vertical: 40,
          horizontal: 40,
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <CountryList>
          <CountryItem>
            <VN className="country_icon" />
            <Typography className="country_name">Vietnamese</Typography>
          </CountryItem>
          <CountryItem>
            <AR className="country_icon" />
            <Typography className="country_name">Argentina</Typography>
          </CountryItem>
          <CountryItem>
            <FR className="country_icon" />
            <Typography className="country_name">French</Typography>
          </CountryItem>
          <CountryItem>
            <GB className="country_icon" />
            <Typography className="country_name">English</Typography>
          </CountryItem>
          <CountryItem>
            <CN className="country_icon" />
            <Typography className="country_name">Chinese</Typography>
          </CountryItem>
        </CountryList>
      </Popover>
    </IconCountry>
  );
};

export default CountryLanguage;
