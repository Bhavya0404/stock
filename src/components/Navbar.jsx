import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container, MenuItem, Select } from "@mui/material";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

function DrawerAppBar(props) {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: "flex" }}>
        <AppBar component="nav">
          <Container>
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flex: 1,
                  color: "gold",
                  fontFamily: "Montsserat",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Stocks Dash
              </Typography>
              <Box>
                <Select
                  variant="outlined"
                  style={{ width: 100, height: 40, marginRight: 15 }}
                  value="INR"
                  // onChange={(e) => setCurrency(e.target.value)}
                >
                  <MenuItem value={"USD"}>USD</MenuItem>
                  <MenuItem value={"INR"}>INR</MenuItem>
                </Select>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default DrawerAppBar;
