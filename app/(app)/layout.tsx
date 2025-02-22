import { Outlet } from "react-router";
import Navbar from "~/components/navbar";

export default function RootLayout() {
  return (
    <>
      <main className="relative z-[1] bg-primary border border-transparent data-[aria-hidden=true]:border-border transition-colors duration-200 ease-in-out">
        <Navbar />
        <Outlet />
      </main>
    </>
  )
}