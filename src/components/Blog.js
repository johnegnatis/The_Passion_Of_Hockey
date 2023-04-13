import * as React from "react";
import Grid from "@mui/material/Grid";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import Website from "@mui/icons-material/Web";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Main from "./Main";
import Sidebar from "./Sidebar";
import { blogs, mainBlog, featuredBlogs, getRoute, headerTitle } from "../blogs";
import { Email, Person } from "@mui/icons-material";
import SlideshowIcon from "@mui/icons-material/Slideshow";

const regularPosts = blogs.filter((_, index) => index > 2);

const getPlaceholder = (index) => {
  return { title: `Placeholder ${index}`, description: "placeholder description" };
};
const placeholders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((num) => getPlaceholder(num));

const sidebar = {
  title: "About",
  description: [
    "Welcome!",
    "Ever since I can remember, hockey has been a huge part of my life. The first time I stepped on the ice I was two years old. I competed in a youth league when I was in school. And I have been to more Dallas Stars games than I can count.",
    "Now that I am older, hockey has become a way for our family to come together and bond over a shared interest. On this blog, my family and I will be sharing our passion for all things hockey. From the latest NHL news to controversial opinions, we have it all. Feel free to send me an email if you would like to contribute, and we hope you enjoy your stay.",
  ],
  social: [
    { name: "John Egnatis", icon: Person },
    { name: "jce180001@utdallas.edu", icon: EmailIcon },
    { name: "GitHub", icon: GitHubIcon, url: "https://github.com/johnegnatis/hockey-blog" },
    { name: "Portfolio", icon: Website, url: "https://johnegnatis.github.io/portfolio/" },
    {
      name: "Presentation",
      icon: SlideshowIcon,
      url: "https://docs.google.com/presentation/d/15NYbATXTGEznTskxI7Jbf-UKRLEnPfs1k3KsLGp4osI/edit?usp=sharing",
    },
  ],
};
export default function Blog() {
  return (
    <main>
      <MainFeaturedPost post={mainBlog} />
      <Grid container spacing={4}>
        {featuredBlogs.map((post) => (
          <FeaturedPost key={post.title} post={post} />
        ))}
      </Grid>
      <Grid container spacing={5} sx={{ mt: 3 }}>
        <Main title="From the firehose" posts={[...regularPosts, ...placeholders]} />
        <Sidebar title={sidebar.title} description={sidebar.description} archives={sidebar.archives} social={sidebar.social} />
      </Grid>
    </main>
  );
}
