import { tokens } from "@/app/theme";
import { useTheme } from "@emotion/react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  menuClasses,
} from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";

// Icons
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { PersonOutline, ReceiptLongOutlined } from "@mui/icons-material";

// Item
const Item = ({ title, icon, selected, setSelected, path }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const router = useRouter();
  return (
    <MenuItem
      rootStyles={{
        ["." + menuClasses.button]: {
          background: `${colors.primary[400]}`,
          padding: "5px 35px 5px 20px",
          "&:hover": {
            color: "#868dfb",
          },
        },
        ["." + menuClasses.active]: {
          color: "#6870fa",
        },
      }}
      active={title === selected}
      onClick={() => {
        setSelected(title);
        router.push(path);
      }}
      icon={icon}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

export default function SidebarComponent() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [collapsed, setCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Sidebar
      backgroundColor={colors.primary[400]}
      rootStyles={{ borderRightWidth: 0 }}
      collapsed={collapsed}
    >
      <Box
        display="flex"
        justifyContent={!collapsed ? "space-between" : "center"}
        alignItems="center"
        p={2}
        mr="10px"
      >
        {!collapsed && (
          <Typography variant="h3" component="h2" textTransform="uppercase">
            Admin
          </Typography>
        )}
        <IconButton
          // sx={{ m: "auto" }}
          onClick={() => setCollapsed(!collapsed)}
        >
          <MenuOutlinedIcon />
        </IconButton>
      </Box>

      {!collapsed && (
        <Box mb="25px">
          <Box display="flex" justifyContent="center" alignItems="center">
            <img
              width="100px"
              height="100px"
              style={{ borderRadius: "50%", cursor: "pointer" }}
              src="assets/user.jpg"
              alt="user image"
            />
          </Box>
          <Box textAlign="center">
            <Typography
              variant="h2"
              color={colors.grey[100]}
              fontWeight="bold"
              sx={{ m: "10px 0 0 0" }}
            >
              Nizam Robin
            </Typography>
            <Typography variant="h5" color={colors.greenAccent[500]}>
              Principal Admin
            </Typography>
          </Box>
        </Box>
      )}

      {/* Menu Items */}
      <Box paddingLeft={collapsed ? undefined : "10%"}>
        <Menu>
          <Item
            title="Dashboard"
            icon={<HomeOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            path="/"
          />
          <Typography
            variant="h6"
            color={colors.grey[100]}
            sx={{ m: "15px 0 5px 20px" }}
          >
            Data
          </Typography>
          <Item
            title="Manage Team"
            icon={<PeopleOutlineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            path="/team"
          />
          <Item
            title="Contacts Information"
            icon={<ContactsOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            path="/contacts"
          />
          <Item
            title="Invoice"
            icon={<ReceiptOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            path="/invoices"
          />
          <Item
            title="Calendar"
            icon={<CalendarTodayOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            path="/calendar"
          />
          <Typography
            variant="h6"
            color={colors.grey[100]}
            sx={{ m: "15px 0 5px 20px" }}
          >
            Pages
          </Typography>
          <Item
            title="Profile Form"
            icon={<PersonOutline />}
            selected={selected}
            setSelected={setSelected}
            path="/form"
          />
          <Item
            title="FAQ Page"
            icon={<HelpOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            path="/faq"
          />
          <Typography
            variant="h6"
            color={colors.grey[100]}
            sx={{ m: "15px 0 5px 20px" }}
          >
            Charts
          </Typography>
          <Item
            title="Bar Chart"
            icon={<BarChartOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            path="/bar"
          />
          <Item
            title="Pie Chart"
            icon={<PieChartOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            path="/pie"
          />
          <Item
            title="Line Chart"
            icon={<TimelineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            path="/line"
          />
          <Item
            title="Geography Chart"
            icon={<MapOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            path="/geography"
          />
        </Menu>
      </Box>
    </Sidebar>
  );
}
