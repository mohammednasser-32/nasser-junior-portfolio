import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    route("selected-comics", "routes/selected-comics.tsx"),
    route("coding-comics", "routes/coding-comics.tsx"),
    route("palestine-comics", "routes/palestine-comics.tsx"),
    route("books", "routes/books.tsx")
  ]),
] satisfies RouteConfig;
