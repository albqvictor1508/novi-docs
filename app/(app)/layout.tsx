import { Outlet } from "react-router";
import Navbar from "~/components/navbar";

export default function RootLayout() {
  return (
    <>
      <main className="w-full overflow-x-hidden xl:!overflow-visible">
        <Outlet />
      </main>
    </>
  )
}