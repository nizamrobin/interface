"use client";

import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { tokens } from "../theme";

export default function Header({ title, subTitle }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        textTransform="uppercase"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subTitle}
      </Typography>
    </Box>
  );
}
