import { ComicGallery } from "~/components/ComicGallery";

import type { Route } from "./+types/palestine-comics";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Palestine Comics | Nasser Junior" }];
}

export default function PalestineComics() {
  return <ComicGallery collection="palestine comics" />;
}
