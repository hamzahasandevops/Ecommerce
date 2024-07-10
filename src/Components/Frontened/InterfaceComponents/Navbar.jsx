import React from "react";
import {
  Toolbar,
  Divider,
  Typography,
  IconButton,
  Badge,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Navbar() {
  const TITLE = styled(Typography)`
    flex-grow: 1;
  `;

  const TAGLINE = styled(Toolbar)`
    font-size: 20px;
    text-transform: "uppercase";
    justify-content: "center";
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
  `;

  return (
    <>
      <Toolbar>
        <IconButton>
          <MenuIcon />
        </IconButton>

        <TITLE variant="h6">Blogging website</TITLE>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>

      <Divider />
      <TAGLINE variant="h1">Here is your luck to change the world</TAGLINE>
    </>
  );
}
