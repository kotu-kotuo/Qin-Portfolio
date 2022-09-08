import "src/lib/tailwind.css";
import "styles/global.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { Layout } from "src/components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  console.log(process.env.NEXT_PUBLIC_MICROCMS_KEY);
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      emotionOptions={{ key: "mantine", prepend: false }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  );
}

export default MyApp;
