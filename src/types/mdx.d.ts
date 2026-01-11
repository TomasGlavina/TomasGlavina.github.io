declare module "*.mdx" {
  import type { ComponentType } from "react";

  const Component: ComponentType;
  export default Component;

  export const frontmatter: {
    title?: string;
    date?: string;
    tags?: string[];
    [key: string]: unknown;
  };
}
