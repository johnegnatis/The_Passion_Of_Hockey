import Blog from "../components/Blog";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "../components/Footer";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Header from "../components/Header";
import { headerTitle } from "../blogs";
const theme = createTheme({
  palette: {
    mode: "dark",
  },
});
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header title={headerTitle} />
      <Container maxWidth="lg">
        <Blog />
      </Container>
      <Footer title="The Passion of Hockey" description="A blog about all things hockey!" />
    </ThemeProvider>
  );
}
