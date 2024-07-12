import { Box, IconButton, InputBase } from "@mui/material";
import { ColorModeContext, tokens } from "@/app/theme";
import { useTheme } from "@emotion/react";
import SearchIcon from "@mui/icons-material/Search";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOUtlinedIcon from "@mui/icons-material/NotificationsOUtlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SettingsOUtlinedIcon from "@mui/icons-material/SettingsOUtlined";
import { useContext } from "react";

export default function Topbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box display="flex" backgroundColor={colors.primary[400]}>
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Box>
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <LightModeOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOUtlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOUtlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
