import * as React from "react";
import Grid from "@mui/material/Grid";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Main from "./Main";
import Sidebar from "./Sidebar";
import { blogs, mainBlog, featuredBlogs, getRoute } from "../blogs";

const regularPosts = blogs.filter((_, index) => index > 2);

const sidebar = {
  title: "About",
  description: [
    "As the oldest brother in our family of passionate hockey enthusiasts, I can confidently say that hockey has been a huge part of our lives for as long as I can remember. It all started when we were young, spending countless hours skating and playing with each other. Our love for the game only grew stronger as we got older, and it became a central part of our family dynamic.",
    "For us, hockey is more than just a game. It's a way for our family to come together and bond over a shared interest. We all share a deep passion for the sport, and our favorite NHL team is the Dallas Stars. On this blog, we'll be sharing our thoughts and insights about all things hockey, from the latest NHL news to tips for improving your game. So join us on this journey and be a part of the conversation.",
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon, url: 'https://github.com/johnegnatis' },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};
blogs.forEach((blog) => {
  console.log(getRoute(blog));
});

export default function Blog() {
  return (
    <>
      <Header title="The Passion of Hockey" />
      <main>
        <MainFeaturedPost post={mainBlog} />
        <Grid container spacing={4}>
          {featuredBlogs.map((post) => (
            <FeaturedPost key={post.title} post={post} />
          ))}
        </Grid>
        <Grid container spacing={5} sx={{ mt: 3 }}>
          <Main title="From the firehose" posts={regularPosts} />
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Grid>
      </main>
    </>
  );
}
