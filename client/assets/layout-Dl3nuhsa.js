import { NavLink, Outlet, UNSAFE_withComponentProps } from "react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/Footer.tsx
function InstagramIcon() {
	return /* @__PURE__ */ jsx("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		width: "28",
		height: "28",
		"aria-hidden": true,
		children: /* @__PURE__ */ jsx("path", {
			fill: "currentColor",
			d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
		})
	});
}
function XIcon() {
	return /* @__PURE__ */ jsx("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		width: "28",
		height: "28",
		"aria-hidden": true,
		children: /* @__PURE__ */ jsx("path", {
			fill: "currentColor",
			d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
		})
	});
}
function Footer() {
	return /* @__PURE__ */ jsx("footer", {
		className: "portfolio-footer",
		children: /* @__PURE__ */ jsxs("nav", {
			className: "portfolio-footer-nav",
			"aria-label": "Social and contact",
			children: [
				/* @__PURE__ */ jsx("a", {
					href: "https://www.instagram.com/nasser_junior",
					className: "portfolio-footer-icon-link",
					target: "_blank",
					rel: "noreferrer",
					"aria-label": "Instagram",
					children: /* @__PURE__ */ jsx(InstagramIcon, {})
				}),
				/* @__PURE__ */ jsx("span", {
					className: "portfolio-footer-line",
					"aria-hidden": true
				}),
				/* @__PURE__ */ jsx("a", {
					href: "https://x.com/nasser_Junior",
					className: "portfolio-footer-icon-link",
					target: "_blank",
					rel: "noreferrer",
					"aria-label": "X",
					children: /* @__PURE__ */ jsx(XIcon, {})
				}),
				/* @__PURE__ */ jsx("span", {
					className: "portfolio-footer-line",
					"aria-hidden": true
				}),
				/* @__PURE__ */ jsx("a", {
					href: "mailto:contact@nasserjunior.com",
					className: "portfolio-footer-email",
					children: "contact@nasserjunior.com"
				})
			]
		})
	});
}
//#endregion
//#region app/components/Navigation.tsx
var navItems = [
	{
		to: "/",
		label: "Home",
		end: true,
		target: "_self"
	},
	{
		to: "/selected-comics",
		label: "Selected Comics",
		target: "_self"
	},
	{
		to: "/coding-comics",
		label: "Coding Comics",
		target: "_self"
	},
	{
		to: "/palestine-comics",
		label: "Palestine Comics",
		target: "_self"
	},
	{
		to: "/books",
		label: "Books",
		target: "_self"
	},
	{
		to: "https://microbusstore.com/collections/microbus-nasser",
		label: "Shop",
		target: "_blank"
	}
];
function Navigation() {
	return /* @__PURE__ */ jsx("nav", {
		className: "portfolio-nav",
		"aria-label": "Main",
		children: /* @__PURE__ */ jsx("ul", {
			className: "portfolio-nav-list",
			children: navItems.map(({ to, label, target, ...item }) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, {
				to,
				end: "end" in item ? item.end : false,
				target,
				className: ({ isActive }) => isActive ? "portfolio-nav-link is-active" : "portfolio-nav-link",
				children: label
			}) }, to))
		})
	});
}
//#endregion
//#region app/routes/layout.tsx
var layout_default = UNSAFE_withComponentProps(function PortfolioLayout() {
	return /* @__PURE__ */ jsxs("div", {
		className: "portfolio-shell",
		children: [
			/* @__PURE__ */ jsx("header", {
				className: "portfolio-header",
				children: /* @__PURE__ */ jsx("img", {
					src: "/assets/Header animated.webp",
					alt: "Nasser Junior",
					className: "portfolio-header-image"
				})
			}),
			/* @__PURE__ */ jsx(Navigation, {}),
			/* @__PURE__ */ jsx("main", {
				className: "portfolio-main",
				children: /* @__PURE__ */ jsx(Outlet, {})
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
});
//#endregion
export { layout_default as default };
