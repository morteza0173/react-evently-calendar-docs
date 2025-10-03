import { DocsLayout, DocsLayoutProps } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";
import { GithubInfo } from "fumadocs-ui/components/github-info";

const docsOptions: DocsLayoutProps = {
  ...baseOptions(),
  tree: source.pageTree,

  links: [
    {
      type: "custom",
      children: (
        <GithubInfo
          owner="Morteza0173"
          repo="react-evently-calendar"
          className="lg:-mx-2 text-xs"
        />
      ),
    },
  ],
};

export default function Layout({ children }: LayoutProps<"/docs">) {
  return <DocsLayout {...docsOptions}>{children}</DocsLayout>;
}
