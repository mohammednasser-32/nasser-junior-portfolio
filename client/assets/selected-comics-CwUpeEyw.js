import { t as ComicGallery } from "./ComicGallery-FZJHQMNk.js";
import { UNSAFE_withComponentProps } from "react-router";
import { jsx } from "react/jsx-runtime";
//#region app/routes/selected-comics.tsx
function meta({}) {
	return [{ title: "Selected Comics | Nasser Junior" }];
}
var selected_comics_default = UNSAFE_withComponentProps(function SelectedComics() {
	return /* @__PURE__ */ jsx(ComicGallery, { collection: "comics" });
});
//#endregion
export { selected_comics_default as default, meta };
