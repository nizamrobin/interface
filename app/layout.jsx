"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ColorModeContext, useMode } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./components/nav/Topbar";
import Sidebar from "./components/nav/Sidebar";

export default function RootLayout({ children }) {
  const [theme, colorMode] = useMode();

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Box display="flex" height="100vh">
                <Sidebar />
                <main style={{ width: "100%", padding: "15px" }}>
                  <Topbar />
                  {children}
                </main>
              </Box>
            </ThemeProvider>
          </ColorModeContext.Provider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
