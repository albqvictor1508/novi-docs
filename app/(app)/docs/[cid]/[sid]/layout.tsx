'use client'

import { Outlet } from "react-router";
import { Header } from "~/components/markdown/header";
import { Sidebar } from "~/components/sidebar";

export default async function RootLayout({ params }: Readonly<{ params: { cid: string, sid: string } }>) {
  const { cid, sid } = params;

  const document = {
    title: "Introduction",
    description: "Getting started with our documentation"
  };

  return (
    <div className="container">
      <Sidebar onMobile={false} />
      <div className="flex lg:pl-[20rem] pt-[1.5rem] gap-12">
        <article className="flex-1 w-full !max-w-5xl">
          <Header
            category={cid[0].toUpperCase() + cid.slice(1)}
            title={document.title}
            description={document.description}
          />
          <div data-toc><Outlet /></div>
        </article>
      </div>
    </div>
  )
}