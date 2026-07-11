import { t as ComicGallery } from "./ComicGallery-FZJHQMNk.js";
import { UNSAFE_withComponentProps } from "react-router";
import { jsx } from "react/jsx-runtime";
//#region app/routes/coding-comics.tsx
function meta({}) {
	return [{ title: "Coding Comics | Nasser Junior" }];
}
var coding_comics_default = UNSAFE_withComponentProps(function CodingComics() {
	return /* @__PURE__ */ jsx(ComicGallery, { collection: "coding-comics" });
});
//#endregion
export { coding_comics_default as default, meta };
