import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";
import { GithubInfo } from "fumadocs-ui/components/github-info";
import { ReactNode } from "react";

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await params;

  return (
    <DocsLayout
      {...baseOptions(lang)}
      tree={source.pageTree[lang]}
      links={[
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
      ]}
    >
      {children}
    </DocsLayout>
  );
}
