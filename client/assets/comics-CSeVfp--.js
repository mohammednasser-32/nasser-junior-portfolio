import { collection, getDocs, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
var db = getFirestore(initializeApp({
	apiKey: "AIzaSyCZbfqfdmlqlZXk2J9AbmLiJubd8cggfK8",
	authDomain: "nasser-junior.firebaseapp.com",
	projectId: "nasser-junior",
	storageBucket: "nasser-junior.firebasestorage.app",
	messagingSenderId: "307926284831",
	appId: "1:307926284831:web:f8325a78acc7d05cc9b32a"
}));
//#endregion
//#region app/lib/comics.ts
function parseOrder(data) {
	if (typeof data.order === "number") return data.order;
	if (typeof data.order === "string") {
		const parsed = Number.parseInt(data.order, 10);
		return Number.isNaN(parsed) ? void 0 : parsed;
	}
}
function parseComicDoc(id, data) {
	if (typeof data.url !== "string" || !data.url) return null;
	const order = parseOrder(data);
	return order === void 0 ? {
		id,
		url: data.url
	} : {
		id,
		url: data.url,
		order
	};
}
function sortComics(comics) {
	if (!comics.some((comic) => comic.order !== void 0)) return comics;
	return [...comics].sort((a, b) => {
		const orderA = a.order ?? Number.NEGATIVE_INFINITY;
		const orderB = b.order ?? Number.NEGATIVE_INFINITY;
		if (orderB !== orderA) return orderB - orderA;
		return a.id.localeCompare(b.id);
	});
}
async function fetchImages(collectionName) {
	return sortComics((await getDocs(collection(db, collectionName))).docs.map((doc) => parseComicDoc(doc.id, doc.data())).filter((image) => image !== null));
}
async function fetchComics(collectionName) {
	return fetchImages(collectionName);
}
function parseHonorDoc(id, data) {
	if (typeof data.url !== "string" || !data.url) return null;
	const order = parseOrder(data);
	const title = typeof data.title === "string" ? data.title : "";
	return order === void 0 ? {
		id,
		url: data.url,
		title
	} : {
		id,
		url: data.url,
		title,
		order
	};
}
function sortHonorImages(images) {
	if (!images.some((image) => image.order !== void 0)) return images;
	return [...images].sort((a, b) => {
		const orderA = a.order ?? Number.NEGATIVE_INFINITY;
		const orderB = b.order ?? Number.NEGATIVE_INFINITY;
		if (orderB !== orderA) return orderB - orderA;
		return a.id.localeCompare(b.id);
	});
}
async function fetchHonorImages() {
	return sortHonorImages((await getDocs(collection(db, "honor"))).docs.map((doc) => parseHonorDoc(doc.id, doc.data())).filter((image) => image !== null));
}
function parseClientDoc(id, data) {
	if (typeof data.url !== "string" || !data.url) return null;
	const order = parseOrder(data);
	const name = typeof data.name === "string" ? data.name : "";
	return order === void 0 ? {
		id,
		url: data.url,
		name
	} : {
		id,
		url: data.url,
		name,
		order
	};
}
function sortClients(clients) {
	if (!clients.some((client) => client.order !== void 0)) return clients;
	return [...clients].sort((a, b) => {
		const orderA = a.order ?? Number.NEGATIVE_INFINITY;
		const orderB = b.order ?? Number.NEGATIVE_INFINITY;
		if (orderB !== orderA) return orderB - orderA;
		return a.id.localeCompare(b.id);
	});
}
async function fetchClients() {
	return sortClients((await getDocs(collection(db, "clients"))).docs.map((doc) => parseClientDoc(doc.id, doc.data())).filter((client) => client !== null));
}
//#endregion
export { fetchComics as n, fetchHonorImages as r, fetchClients as t };
