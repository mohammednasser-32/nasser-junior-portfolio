import { ComicGallery } from "~/components/ComicGallery";

import type { Route } from "./+types/coding-comics";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Coding Comics | Nasser Junior" }];
}

export default function CodingComics() {
  return <ComicGallery collection="coding-comics" />;
}
