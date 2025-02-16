import { layout, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  layout("./(app)/layout.tsx", [
    route("/", "./(app)/page.tsx")
  ])
] satisfies RouteConfig