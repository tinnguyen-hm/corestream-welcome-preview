import { Button, createTheme, rem } from "@mantine/core";

// Preview subset of consumer-web/src/themes/dec2025.ts.
// In the app, inherit its existing ThemeProvider instead of adding this provider.
export const theme = createTheme({
  fontFamily: "'DM Sans', sans-serif",
  primaryColor: "hike",
  primaryShade: 5,
  defaultRadius: "xl",
  colors: {
    hike: [
      "#e6f0ff",
      "#cce0ff",
      "#99c2ff",
      "#4d8ef7",
      "#1a6bef",
      "#024AE3",
      "#0240c7",
      "#002AA2",
      "#001f7a",
      "#007AFF",
    ],
    "hike-accent": [
      "#e6fdfe",
      "#ccfbfd",
      "#99f7fb",
      "#66f3f9",
      "#33eff7",
      "#18EAF3",
      "#14d2da",
      "#10b9c2",
      "#0ca1a9",
      "#088891",
    ],
  },
  headings: {
    fontFamily: "'Geologica', sans-serif",
    fontWeight: "700",
    sizes: {
      h1: { fontSize: rem(48), lineHeight: "1.08" },
      h2: { fontSize: rem(30), lineHeight: "1.2" },
      h3: { fontSize: rem(20), lineHeight: "1.35" },
    },
  },
  components: {
    Button: Button.extend({
      defaultProps: { radius: "xl", size: "lg" },
      styles: {
        root: {
          minHeight: rem(58),
          fontFamily: "'Geologica', sans-serif",
          fontWeight: 700,
        },
        label: { whiteSpace: "normal" },
      },
    }),
  },
});
