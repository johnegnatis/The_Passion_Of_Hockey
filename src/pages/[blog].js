import * as React from "react";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { blogs, getRoute, headerTitle } from "../blogs";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "../components/Footer";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { CardMedia } from "@mui/material";
import Header from "../components/Header";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

function BlogPost() {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const router = useRouter();
  const { blog } = router.query;
  const index = blogs.findIndex((blogObj) => blog === getRoute(blogObj));
  const post = blogs[index];

  const homeRoute = "/";
  const nextPostRoute = index + 1 < blogs.length ? getRoute(blogs[index + 1]) : homeRoute;
  const previousPostRoute = index - 1 >= 0 ? getRoute(blogs[index - 1]) : homeRoute;

  if (!post) return <div>post not found</div>;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header title={headerTitle} />
      <Container maxWidth="lg">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            cursor: "pointer",
            WebkitUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
          }}
        >
          {previousPostRoute !== homeRoute ? (
            <div onClick={() => router.push(previousPostRoute)} style={{ display: "flex", alignContent: "center" }}>
              <NavigateBeforeIcon />
              <span>Previous Post</span>
            </div>
          ) : (
            <div />
          )}
          {nextPostRoute !== homeRoute ? (
            <div onClick={() => router.push(nextPostRoute)} style={{ display: "flex", alignContent: "center" }}>
              <span>Next Post</span>
              <NavigateNextIcon />
            </div>
          ) : (
            <div />
          )}
        </div>
        <br />
        <Typography component="h1" variant="h2" sx={{ marginBottom: "25px", textAlign: "center" }}>
          {post.title}
        </Typography>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "25px",
          }}
        >
          <CardMedia
            component="img"
            sx={{ maxWidth: { sm: "400px" }, maxWidth: "700px" }}
            image={post.image}
            alt={post.imageText}
          />
        </Container>
        <Container maxWidth="md">
          {post.body.map((paragraph) => (
            <>
              <Typography sx={{ fontSize: "24px" }} component="p" variant="p">
                {paragraph}
              </Typography>
              <br />
            </>
          ))}
          <Typography component="p" variant="p" sx={{ textAlign: "center", fontSize: "18px", fontStyle: 'italic' }}>
            {!!post.author && `Written by ${post.author}`}
          </Typography>
        </Container>
      </Container>
      <Footer title="The Passion of Hockey" description="A blog about all things hockey!" />
    </ThemeProvider>
  );
}

export default BlogPost;
