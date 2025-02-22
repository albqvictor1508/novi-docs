import { Links, LinksFunction, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

import stylesheet from "./tailwind.css?url";

import "swiper/css"

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Teste</title>
        <Meta />
        <Links />
      </head>
      <body className="bg-dark text-white">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />;
}