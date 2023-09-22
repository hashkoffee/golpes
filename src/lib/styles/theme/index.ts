import { extendTheme } from "@chakra-ui/react";

type GlobalStyleProps = { colorMode: "light" | "dark" };

const themeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  ...themeConfig,
  fonts: {
    heading: "Arial, monospace",
    body: "Arial, monospace",
  },
  components: {},
  styles: {
    global: (props: GlobalStyleProps) => ({
      body: {
        backgroundColor: "black",
        color: "orange"
      },
      p: {
        color: "orange",
      },
      // Style for Webkit scrollbars
      "::-webkit-scrollbar": {
        width: "4px",
      },
      "::-webkit-scrollbar-track": {
        backgroundColor: "black",
      },
      "::-webkit-scrollbar-thumb": {
        backgroundColor: "orange",
        borderRadius: "0px",
      },
      // Style for Firefox scrollbars
      scrollbarWidth: "thin",
      scrollbarColor: "orange black",
    }),
  },
});
