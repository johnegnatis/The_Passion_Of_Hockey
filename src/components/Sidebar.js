import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Sidebar(props) {
  const { description, social, title } = props;

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{ p: 2, backgroundColor: "#333333" }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: "650" }}>
          {title}
        </Typography>
        {description.map((desc, index) => (
          <Typography key={index} style={{ paddingBottom: "5px" }}>
            {desc}
          </Typography>
        ))}
      </Paper>

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Social
      </Typography>
      {social.map((network) => {
        const stack = (
          <Stack direction="row" spacing={1} alignItems="center">
            <network.icon />
            <span>{network.name}</span>
          </Stack>
        );
        if (network.url)
          return (
            <Link display="block" variant="body1" href={network.url} key={network.name} sx={{ mb: 0.5 }}>
              {stack}
            </Link>
          );
        return stack;
      })}
    </Grid>
  );
}

Sidebar.propTypes = {
  description: PropTypes.array.isRequired,
  social: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Sidebar;
