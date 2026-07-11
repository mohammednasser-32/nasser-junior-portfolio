import { r as fetchHonorImages, t as fetchClients } from "./comics-CSeVfp--.js";
import { UNSAFE_withComponentProps } from "react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
//#region app/components/Clients.tsx
function Clients() {
	const [clients, setClients] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		let cancelled = false;
		async function loadClients() {
			setLoading(true);
			setError(null);
			try {
				const clientList = await fetchClients();
				if (!cancelled) setClients(clientList);
			} catch {
				if (!cancelled) setError("Could not load clients. Please try again later.");
			} finally {
				if (!cancelled) setLoading(false);
			}
		}
		loadClients();
		return () => {
			cancelled = true;
		};
	}, []);
	return /* @__PURE__ */ jsxs("section", {
		className: "clients",
		"aria-labelledby": "clients-title",
		children: [
			/* @__PURE__ */ jsx("h2", {
				id: "clients-title",
				className: "clients-title",
				children: "Clients"
			}),
			loading && /* @__PURE__ */ jsx("p", {
				className: "clients-status",
				children: "Loading clients..."
			}),
			error && /* @__PURE__ */ jsx("p", {
				className: "clients-status clients-status-error",
				children: error
			}),
			!loading && !error && clients.length === 0 && /* @__PURE__ */ jsx("p", {
				className: "clients-status",
				children: "No clients yet."
			}),
			!loading && !error && clients.length > 0 && /* @__PURE__ */ jsx("ul", {
				className: "clients-list",
				children: clients.map((client) => /* @__PURE__ */ jsx("li", {
					className: "clients-item",
					children: /* @__PURE__ */ jsx("img", {
						src: client.url,
						alt: client.name,
						className: "clients-logo",
						loading: "lazy"
					})
				}, client.id))
			})
		]
	});
}
//#endregion
//#region app/components/WallOfHonor.tsx
function WallOfHonor() {
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		let cancelled = false;
		async function loadHonorImages() {
			setLoading(true);
			setError(null);
			try {
				const honorImages = await fetchHonorImages();
				if (!cancelled) setImages(honorImages);
			} catch {
				if (!cancelled) setError("Could not load wall of honor. Please try again later.");
			} finally {
				if (!cancelled) setLoading(false);
			}
		}
		loadHonorImages();
		return () => {
			cancelled = true;
		};
	}, []);
	return /* @__PURE__ */ jsxs("section", {
		className: "wall-of-honor",
		"aria-labelledby": "wall-of-honor-title",
		children: [
			/* @__PURE__ */ jsx("img", {
				src: "/assets/Wall of honor.webp",
				alt: "Wall of Honor",
				className: "wall-of-honor-header"
			}),
			loading && /* @__PURE__ */ jsx("p", {
				className: "portfolio-status",
				children: "Loading wall of honor..."
			}),
			error && /* @__PURE__ */ jsx("p", {
				className: "portfolio-status portfolio-status-error",
				children: error
			}),
			!loading && !error && images.length === 0 && /* @__PURE__ */ jsx("p", {
				className: "portfolio-status",
				children: "No images yet."
			}),
			!loading && !error && images.length > 0 && /* @__PURE__ */ jsx("ul", {
				className: "wall-of-honor-list",
				children: images.map((image) => /* @__PURE__ */ jsxs("li", {
					className: "wall-of-honor-item",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "honor-frame",
						children: [/* @__PURE__ */ jsx("img", {
							src: image.url,
							alt: image.title,
							className: "honor-photo",
							loading: "lazy"
						}), /* @__PURE__ */ jsx("img", {
							src: "/assets/Frame.webp",
							alt: "",
							className: "honor-frame-overlay",
							"aria-hidden": true
						})]
					}), image.title && /* @__PURE__ */ jsx("p", {
						className: "honor-title",
						children: image.title
					})]
				}, image.id))
			})
		]
	});
}
//#endregion
//#region app/routes/home.tsx
function meta({}) {
	return [{ title: "Nasser Junior" }];
}
var home_default = UNSAFE_withComponentProps(function Home() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "home",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "home-about",
				children: [
					/* @__PURE__ */ jsx("h1", {
						className: "home-about-title",
						children: "Hello there!"
					}),
					/* @__PURE__ */ jsx("p", { children: "You actually visited my website! well..uhm..not sure how to start but, I am Mohammed Nasser -AKA Nasser Junior-, a software engineer by day, a cartoonist by night." }),
					/* @__PURE__ */ jsx("p", { children: "I started my journey many years ago by expressing my thoughts and feelings through cartoons and sharing them with the world through social media, whether it was happiness, sadness, frustration or just a random thought..I had a comics for it." }),
					/* @__PURE__ */ jsxs("p", { children: [
						"My work gained a lot of attention, gathering over ",
						/* @__PURE__ */ jsx("strong", { children: "500,000" }),
						" followers across different platforms, and got featured in various media outlets, including newspapers, magazines, and TV shows."
					] }),
					/* @__PURE__ */ jsx("p", { children: "I am now collaborating with companies and institutions to help them deliver their message in a more engaging and creative way, the same way I express myself, and help them reach a wider audience through cartoons! so if you think your brand can be a little cooler, let's work together!" }),
					/* @__PURE__ */ jsxs("p", { children: [
						/* @__PURE__ */ jsx("strong", { children: "PS:" }),
						" If you want to know more about my other personality, check my other ",
						/* @__PURE__ */ jsx("a", {
							className: "website-link",
							href: "https://dev.nasserjunior.com/",
							target: "_blank",
							rel: "noopener noreferrer",
							children: /* @__PURE__ */ jsx("strong", { children: "website!" })
						})
					] })
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "home-image",
				children: /* @__PURE__ */ jsx("img", {
					src: "/assets/me.webp",
					alt: "Nasser Junior"
				})
			})]
		}),
		/* @__PURE__ */ jsx(Clients, {}),
		/* @__PURE__ */ jsx(WallOfHonor, {})
	] });
});
//#endregion
export { home_default as default, meta };
