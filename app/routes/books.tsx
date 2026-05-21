import { BooksList, type Book } from "~/components/BooksList";

import type { Route } from "./+types/books";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Books | Nasser Junior" }];
}

const books: Book[] = [
  {
    cover: "/assets/bubble.jpeg",
    title: "Bubble",
    language: "Arabic",
    orderLink:
      "https://www.aseeralkotb.com/en/books/%D9%81%D9%82%D8%A7%D8%B9%D8%A9?srsltid=AfmBOoq2zb_gGuJaA6Cjx--As7iscVLRyYBuF7ZHNnoONI4csuveUvs_",
  },
  {
    cover: "/assets/uninvited-guest.jpeg",
    title: "Uninvited Guest",
    language: "English",
    orderLink: null,
  },
];

export default function Books() {
  return <BooksList books={books} />;
}
