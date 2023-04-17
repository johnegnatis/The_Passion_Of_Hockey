import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import RegularPost from "./RegularPost";
import { Pagination } from "@mui/material";
function Main(props) {
  const { posts, title } = props;
  const POSTS_PER_COUNT = 3.0;
  const numPages = Math.ceil(posts.length / POSTS_PER_COUNT);

  const [page, setPage] = React.useState(1);
  const currentPageStartingIndex = (page - 1) * POSTS_PER_COUNT;
  const postsOnCurrentPage = posts.filter(
    (_, index) => index >= currentPageStartingIndex && index < currentPageStartingIndex + POSTS_PER_COUNT
  );
  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        "& .markdown": {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {postsOnCurrentPage.map((post) => (
        <RegularPost key={post.title} post={post} />
      ))}
      <Pagination count={numPages} page={page} onChange={(e, page) => handlePageChange(page)} disabled={numPages < 2} />
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;
