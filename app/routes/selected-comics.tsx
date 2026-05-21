import { ComicGallery } from "~/components/ComicGallery";

import type { Route } from "./+types/selected-comics";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Selected Comics | Nasser Junior" }];
}

export default function SelectedComics() {
  return <ComicGallery collection="comics" />;
}
