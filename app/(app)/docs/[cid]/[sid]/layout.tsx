import { Outlet } from "react-router";
import { Header } from "~/components/ui/header";
import { Sidebar } from "~/components/ui/sidebar";
import { getDoc } from "~/lib/utils/docs/utils";

export default async function RootLayout({ params }: Readonly<{ params: any }>) {
  const { cid, sid } = params;
  const document = await getDoc(cid, sid);

  return (
    <div className="container">
      <Sidebar onMobile={false} />
      <div className="flex lg:pl-[20rem] pt-[1.5rem] gap-12">
        <Header category={cid[0].toUpperCase() + cid.slice(1)} title={document.title} description={document.description} />
        <article className="flex-1 w-full !max-w-5xl">
          <div data-toc><Outlet /></div>
        </article>
      </div>
    </div>
  )
}