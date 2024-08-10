import { Box } from "@mui/material";
import Header from "./components/Header";

export default function Home() {
  return (
    <Box mt="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subTitle="Welcome to your dashboard" />
      </Box>
    </Box>
  );
}
