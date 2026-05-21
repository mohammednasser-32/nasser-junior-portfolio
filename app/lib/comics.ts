import { collection, getDocs } from "firebase/firestore";

import { db } from "./firebase";

export type ComicImage = {
  id: string;
  url: string;
  order?: number;
};

export type ComicCollection = "comics" | "coding-comics" | "palestine comics";

function parseOrder(data: Record<string, unknown>): number | undefined {
  if (typeof data.order === "number") return data.order;
  if (typeof data.order === "string") {
    const parsed = Number.parseInt(data.order, 10);
    return Number.isNaN(parsed) ? undefined : parsed;
  }
  return undefined;
}

function parseComicDoc(
  id: string,
  data: Record<string, unknown>,
): ComicImage | null {
  if (typeof data.url !== "string" || !data.url) return null;
  const order = parseOrder(data);
  return order === undefined ? { id, url: data.url } : { id, url: data.url, order };
}

function sortComics(comics: ComicImage[]): ComicImage[] {
  const hasOrder = comics.some((comic) => comic.order !== undefined);
  if (!hasOrder) return comics;

  return [...comics].sort((a, b) => {
    const orderA = a.order ?? Number.NEGATIVE_INFINITY;
    const orderB = b.order ?? Number.NEGATIVE_INFINITY;
    if (orderB !== orderA) return orderB - orderA;
    return a.id.localeCompare(b.id);
  });
}

export async function fetchImages(
  collectionName: string,
): Promise<ComicImage[]> {
  const snapshot = await getDocs(collection(db, collectionName));
  const images = snapshot.docs
    .map((doc) => parseComicDoc(doc.id, doc.data()))
    .filter((image): image is ComicImage => image !== null);

  return sortComics(images);
}

export async function fetchComics(
  collectionName: ComicCollection,
): Promise<ComicImage[]> {
  return fetchImages(collectionName);
}

export type HonorImage = {
  id: string;
  url: string;
  title: string;
  order?: number;
};

function parseHonorDoc(
  id: string,
  data: Record<string, unknown>,
): HonorImage | null {
  if (typeof data.url !== "string" || !data.url) return null;

  const order = parseOrder(data);
  const title = typeof data.title === "string" ? data.title : "";

  return order === undefined
    ? { id, url: data.url, title }
    : { id, url: data.url, title, order };
}

function sortHonorImages(images: HonorImage[]): HonorImage[] {
  const hasOrder = images.some((image) => image.order !== undefined);
  if (!hasOrder) return images;

  return [...images].sort((a, b) => {
    const orderA = a.order ?? Number.NEGATIVE_INFINITY;
    const orderB = b.order ?? Number.NEGATIVE_INFINITY;
    if (orderB !== orderA) return orderB - orderA;
    return a.id.localeCompare(b.id);
  });
}

export async function fetchHonorImages(): Promise<HonorImage[]> {
  const snapshot = await getDocs(collection(db, "honor"));
  const images = snapshot.docs
    .map((doc) => parseHonorDoc(doc.id, doc.data()))
    .filter((image): image is HonorImage => image !== null);

  return sortHonorImages(images);
}

export type Client = {
  id: string;
  url: string;
  name: string;
  order?: number;
};

function parseClientDoc(
  id: string,
  data: Record<string, unknown>,
): Client | null {
  if (typeof data.url !== "string" || !data.url) return null;

  const order = parseOrder(data);
  const name = typeof data.name === "string" ? data.name : "";

  return order === undefined
    ? { id, url: data.url, name }
    : { id, url: data.url, name, order };
}

function sortClients(clients: Client[]): Client[] {
  const hasOrder = clients.some((client) => client.order !== undefined);
  if (!hasOrder) return clients;

  return [...clients].sort((a, b) => {
    const orderA = a.order ?? Number.NEGATIVE_INFINITY;
    const orderB = b.order ?? Number.NEGATIVE_INFINITY;
    if (orderB !== orderA) return orderB - orderA;
    return a.id.localeCompare(b.id);
  });
}

export async function fetchClients(): Promise<Client[]> {
  const snapshot = await getDocs(collection(db, "clients"));
  const clients = snapshot.docs
    .map((doc) => parseClientDoc(doc.id, doc.data()))
    .filter((client): client is Client => client !== null);

  return sortClients(clients);
}
