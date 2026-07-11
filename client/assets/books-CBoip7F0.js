import { UNSAFE_withComponentProps } from "react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/BooksList.tsx
function BooksList({ books }) {
	return /* @__PURE__ */ jsx("ul", {
		className: "books-list",
		children: books.map((book) => /* @__PURE__ */ jsxs("li", {
			className: "book-item",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "book-cover",
					children: /* @__PURE__ */ jsx("img", {
						src: book.cover,
						alt: book.title,
						loading: "lazy"
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "book-details",
					children: [/* @__PURE__ */ jsx("div", {
						className: "book-title",
						children: book.title
					}), /* @__PURE__ */ jsx("div", {
						className: "book-language",
						children: book.language
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "book-order",
					children: book.orderLink ? /* @__PURE__ */ jsx("a", {
						href: book.orderLink,
						className: "book-order-button",
						target: "_blank",
						rel: "noreferrer",
						children: "Order"
					}) : /* @__PURE__ */ jsx("span", {
						className: "book-order-unavailable",
						children: "currently not available"
					})
				})
			]
		}, `${book.title}-${book.language}`))
	});
}
//#endregion
//#region app/routes/books.tsx
function meta({}) {
	return [{ title: "Books | Nasser Junior" }];
}
var books = [{
	cover: "/assets/bubble.jpeg",
	title: "Bubble",
	language: "Arabic",
	orderLink: "https://www.aseeralkotb.com/en/books/%D9%81%D9%82%D8%A7%D8%B9%D8%A9?srsltid=AfmBOoq2zb_gGuJaA6Cjx--As7iscVLRyYBuF7ZHNnoONI4csuveUvs_"
}, {
	cover: "/assets/uninvited-guest.jpeg",
	title: "Uninvited Guest",
	language: "English",
	orderLink: null
}];
var books_default = UNSAFE_withComponentProps(function Books() {
	return /* @__PURE__ */ jsx(BooksList, { books });
});
//#endregion
export { books_default as default, meta };
