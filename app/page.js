"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./components/nav/Topbar";
import Sidebar from "./components/nav/Sidebar";

export default function Home() {
  const [theme, colorMode] = useMode();

  return (
    <AppRouterCacheProvider>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Topbar />
          <Sidebar />
          <main>
            <h1>Interface -an Admin Dashboard</h1>
          </main>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </AppRouterCacheProvider>
  );
}
