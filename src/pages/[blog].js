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
  const disableNext = nextPostRoute === homeRoute;
  const disablePrev = previousPostRoute === homeRoute;

  const spanningFont = { fontSize: { sm: "15px", md: "20px", lg: "25px" } };
  const spanningTitleFont = { fontSize: { sm: "30px", md: "42.5px", lg: "50px" } };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header title={headerTitle} />
      {post ? (
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
            <div
              onClick={() => !disablePrev && router.push(previousPostRoute)}
              style={{
                display: "flex",
                alignContent: "center",
                color: disablePrev && "grey",
                cursor: disablePrev && "not-allowed",
              }}
            >
              <NavigateBeforeIcon />
              <span>Previous Post</span>
            </div>
            <div
              onClick={() => !disableNext && router.push(nextPostRoute)}
              style={{
                display: "flex",
                alignContent: "center",
                color: disableNext && "grey",
                cursor: disableNext && "not-allowed",
              }}
            >
              <span>Next Post</span>
              <NavigateNextIcon />
            </div>
          </div>
          <br />
          <Typography component="h1" variant="h2" sx={{ marginBottom: "25px", textAlign: "center", ...spanningTitleFont }}>
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
          <Typography component="p" variant="p" sx={{ textAlign: "center", fontStyle: "italic", ...spanningFont }}>
            <Typography component="p" variant="p" sx={{ textAlign: "center" }}>
              {`Written by ${post.author} on  ${post.date}`}
            </Typography>
            <br />
          </Typography>
          <Container maxWidth="md">
            {post.body.map((paragraph) => (
              <>
                <Typography component="p" variant="p" sx={spanningFont}>
                  {paragraph}
                </Typography>
                <br />
              </>
            ))}
          </Container>
        </Container>
      ) : (
        <Container maxWidth="lg">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              cursor: "pointer",
              WebkitUserSelect: "none",
              msUserSelect: "none",
              userSelect: "none",
              minHeight: "500px",
            }}
          >
            <Typography sx={{ textAlign: "center", width: "100%" }} variant="span" component="span">
              Blog is a work in progress. Please come back later.
            </Typography>
          </div>
        </Container>
      )}
      {post && <Footer title="The Passion of Hockey" description="A blog about all things hockey!" />}
    </ThemeProvider>
  );
}

export default BlogPost;
