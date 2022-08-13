import "./App.css";
import { ArticleList } from "./components/article-list";
import Login from "./components/login";
import Register from "./components/register";

import { Route, Routes, BrowserRouter } from "react-router-dom";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import MenuIcon from '@mui/icons-material/Menu';
// import Button from "@mui/material/Button";
function App() {
  return (
    <>
      {/* <AppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/articles" element={<ArticleList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
