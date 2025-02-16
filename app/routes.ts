import { layout, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  layout("./(app)/layout.tsx", [
    route("/", "./(app)/page.tsx"),
    layout("./(app)/docs/layout.tsx", [
      route("docs/:sid", "./(app)/docs/[sid]/page.tsx")
    ])
  ])
] satisfies RouteConfig