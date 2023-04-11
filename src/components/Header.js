import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { Container } from "@mui/material";

function Header(props) {
  const { title } = props;
  const router = useRouter();
  return (
    <Container maxWidth="lg">
      <Toolbar
        sx={{ borderBottom: 1, marginBottom: 2, borderColor: "divider" }}
      >
        <HomeIcon onClick={() => router.push("/")} sx={{ cursor: "pointer" }} />
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
      </Toolbar>
    </Container>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
