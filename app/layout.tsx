// Material UI Imports and Styles
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import CssBaseline from '@mui/material/CssBaseline';
import { StyledRoot } from "./StyledRoot";

import { ApolloWrapper } from "./lib/ApolloWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <CssBaseline />
      <body>
        <AppRouterCacheProvider options={{ key: 'css' }}>
          <StyledRoot>
            <ApolloWrapper>
              {children}
            </ApolloWrapper>
          </StyledRoot>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
