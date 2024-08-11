"use client";

import { useTheme } from "@emotion/react";
import { tokens } from "../theme";
import { Box, Typography } from "@mui/material";
import Header from "../components/Header";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataInvoices } from "../data/mockData";

// Icons
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/adminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/lockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/securityOutlined";
import { BorderAll } from "@mui/icons-material";

export default function Team() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const mockDataTeamCol = [
    { field: "id", headerName: "ID", flex: 1 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          $ {params.row.cost}
        </Typography>
      ),
    },
    { field: "date", headerName: "Date", flex: 1 },
  ];

  return (
    <Box mt="20px">
      <Header title="Invoices" subTitle="List of Invoice Balances" />
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
            "& .MuiDataGrid-container--top [role=row]": {
              background: colors.blueAccent[700],
            },
            "& .MuiDataGrid-footerContainer": {
              background: colors.blueAccent[700],
            },
            "& .MuiDataGrid-virtualScrollerContent": {},
            "& .MuiDataGrid-cell": {
              border: "none",
              display: "flex",
              alignItems: "center",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-filler": {
              border: "none",
            },
            "& .mui-1oudwrl::after": {
              content: "none",
            },
            "& .mui-1jlz3st": {
              border: "none",
            },
            "& .MuiButton-root": {
              color: "#ffffff",
            },
            "& .MuiSvgIcon-root": {
              color: colors.greenAccent[200],
            },
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataInvoices}
          columns={mockDataTeamCol}
        />
      </Box>
    </Box>
  );
}
