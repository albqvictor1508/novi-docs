import { layout, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  layout("./(app)/layout.tsx", [
    route("/", "./(app)/page.tsx"),
    layout("./(app)/docs/[cid]/[sid]/layout.tsx", [
      route("docs/:cid/:sid", "./(app)/docs/[cid]/[sid]/page.tsx")
    ])
  ])
] satisfies RouteConfig