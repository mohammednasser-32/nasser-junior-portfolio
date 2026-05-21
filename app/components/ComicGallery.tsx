import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";

import {
  fetchComics,
  type ComicCollection,
  type ComicImage,
} from "~/lib/comics";

import "yet-another-react-lightbox/styles.css";

const breakpointColumns = {
  default: 2,
  500: 1,
};

type ComicGalleryProps = {
  collection: ComicCollection;
};

export function ComicGallery({ collection }: ComicGalleryProps) {
  const [images, setImages] = useState<ComicImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  useEffect(() => {
    let cancelled = false;

    async function loadComics() {
      setLoading(true);
      setError(null);

      try {
        const comics = await fetchComics(collection);
        if (!cancelled) {
          setImages(comics);
        }
      } catch {
        if (!cancelled) {
          setError("Could not load comics. Please try again later.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    void loadComics();

    return () => {
      cancelled = true;
    };
  }, [collection]);

  if (loading) {
    return <p className="portfolio-status">Loading comics...</p>;
  }

  if (error) {
    return <p className="portfolio-status portfolio-status-error">{error}</p>;
  }

  if (images.length === 0) {
    return <p className="portfolio-status">No comics yet.</p>;
  }

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumns}
        className="comic-masonry"
        columnClassName="comic-masonry-column"
      >
        {images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            className={`comic-masonry-item ${index % 2 === 0 ? "comic-masonry-item-even" : "comic-masonry-item-odd"}`}
            onClick={() => setLightboxIndex(index)}
            aria-label={`Open comic ${index + 1}`}
          >
            <img src={image.url} alt="" loading="lazy" />
          </button>
        ))}
      </Masonry>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={images.map((image) => ({ src: image.url }))}
      />
    </>
  );
}
