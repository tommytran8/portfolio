import { styled, Tab, Tabs, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{
      children: <span className="MuiTabs-indicatorSpan" />,
    }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 50,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 1.0)",
  },
});
const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(12),
    marginRight: theme.spacing(1),
    color: "rgba(255, 255, 255, 0.7)",
    "&.Mui-selected": {
      color: "#fff",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

const NavBar = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <nav>
      <Box>
        <StyledTabs
          value={value}
          onChange={handleChange}
          className={"nav-tabs"}
          aria-label="navigation bar tabs"
          centered
        >
          <StyledTab
            label="HOME"
            component={Link}
            to={""}
            aria-label="home tab"
          />
          <StyledTab
            label="ABOUT"
            component={Link}
            to={"about"}
            aria-label="about tab"
          />
          <StyledTab
            label="EXPERIENCE"
            component={Link}
            to={"experience"}
            aria-label="experience tab"
          />
        </StyledTabs>
        {/* <Box sx={{ p: 1 }} /> */}
      </Box>
    </nav>
  );
};

export default NavBar;
