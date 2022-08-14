import "src/lib/tailwind.css";
import "styles/global.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      emotionOptions={{ key: "mantine", prepend: false }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
