// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import "eslint-plugin-only-warn";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          args: "all",
          argsIgnorePattern: "^_+$",
          varsIgnorePattern: "^_+$",
        },
      ],
    },
  },
  {
    ignores: ["dist/**", "playwright/**"],
  }
);
