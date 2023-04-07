import * as React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import { blogs, getRoute } from "../blogs";
import Link from "next/link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "../components/Footer";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
function BlogPost() {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const router = useRouter();
  const { blog } = router.query;
  const post = blogs.find((blogObj) => blog === getRoute(blogObj));
  if (!post) return <div>post not found</div>;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Button onClick={() => router.push("/")}>Return to Home</Button>
        <Typography
          component="h1"
          variant="h2"
          sx={{ marginBottom: "25px", textAlign: "center" }}
        >
          {post.title}
        </Typography>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "25px",
          }}
        >
          <img
          style={{ maxWidth: '700px', boxShadow: '10px 10px 5px black'}}
            src={post.image}
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
        </Container>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}

export default BlogPost;
