import type { Preview } from "@storybook/react-vite";
import React from "react";
import "../src/index.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const withTheme = (Story: React.ComponentType, context: any) => {
  const theme = context.globals.theme || "light";

  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(theme);

  return React.createElement(Story);
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
  },
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "light", icon: "circlehollow", title: "Light" },
          { value: "dark", icon: "circle", title: "Dark" },
        ],
      },
    },
  },
  decorators: [withTheme],
};

export default preview;
