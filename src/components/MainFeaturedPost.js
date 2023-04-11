import * as React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import { getRoute } from "../blogs";

function MainFeaturedPost(props) {
  const router = useRouter();
  const { post } = props;
  const notHover = "rgba(0,0,0,.5)";
  const whenHover = "rgba(0,0,0,.35)";
  const [bgColor, setBgColor] = React.useState(notHover);

  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${post.image})`,
        cursor: "pointer",
      }}
      onMouseEnter={() => setBgColor(whenHover)}
      onMouseLeave={() => setBgColor(notHover)}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: "none" }} src={post.image} alt={post.description} />}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: bgColor,
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            onClick={() => router.push(getRoute(post))}
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom sx={{ textShadow: "#ffe 1px 0 10px" }}>
              {post.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph sx={{ textShadow: "#ffe 1px 0 10px" }}>
              {post.description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainFeaturedPost;
