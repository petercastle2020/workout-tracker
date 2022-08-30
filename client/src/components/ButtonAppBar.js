import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

///////////////////////////////////////////////////////

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

export default function ButtonAppBar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              href="/"
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Workout Tracker
            </Typography>

            <nav>
              {user && (
                <div>
                  <span className="span-email">{user.email}</span>
                  <Button
                    variant="outlined"
                    color="inherit"
                    onClick={handleClick}
                    className="logout-button"
                  >
                    Log out
                  </Button>
                </div>
              )}
              {!user && (
                <div>
                  <Button color="inherit" href="/login">
                    Login
                  </Button>
                  <Button color="inherit" href="/signup">
                    Signup
                  </Button>
                </div>
              )}
            </nav>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
