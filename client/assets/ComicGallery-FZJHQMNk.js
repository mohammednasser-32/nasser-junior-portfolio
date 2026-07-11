import { n as fetchComics } from "./comics-CSeVfp--.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
//#region app/components/ComicGallery.tsx
var breakpointColumns = {
	default: 2,
	500: 1
};
function ComicGallery({ collection }) {
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [lightboxIndex, setLightboxIndex] = useState(-1);
	useEffect(() => {
		let cancelled = false;
		async function loadComics() {
			setLoading(true);
			setError(null);
			try {
				const comics = await fetchComics(collection);
				if (!cancelled) setImages(comics);
			} catch {
				if (!cancelled) setError("Could not load comics. Please try again later.");
			} finally {
				if (!cancelled) setLoading(false);
			}
		}
		loadComics();
		return () => {
			cancelled = true;
		};
	}, [collection]);
	if (loading) return /* @__PURE__ */ jsx("p", {
		className: "portfolio-status",
		children: "Loading comics..."
	});
	if (error) return /* @__PURE__ */ jsx("p", {
		className: "portfolio-status portfolio-status-error",
		children: error
	});
	if (images.length === 0) return /* @__PURE__ */ jsx("p", {
		className: "portfolio-status",
		children: "No comics yet."
	});
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Masonry, {
		breakpointCols: breakpointColumns,
		className: "comic-masonry",
		columnClassName: "comic-masonry-column",
		children: images.map((image, index) => /* @__PURE__ */ jsx("button", {
			type: "button",
			className: `comic-masonry-item ${index % 2 === 0 ? "comic-masonry-item-even" : "comic-masonry-item-odd"}`,
			onClick: () => setLightboxIndex(index),
			"aria-label": `Open comic ${index + 1}`,
			children: /* @__PURE__ */ jsx("img", {
				src: image.url,
				alt: "",
				loading: "lazy"
			})
		}, image.id))
	}), /* @__PURE__ */ jsx(Lightbox, {
		open: lightboxIndex >= 0,
		close: () => setLightboxIndex(-1),
		index: lightboxIndex,
		slides: images.map((image) => ({ src: image.url }))
	})] });
}
//#endregion
export { ComicGallery as t };
