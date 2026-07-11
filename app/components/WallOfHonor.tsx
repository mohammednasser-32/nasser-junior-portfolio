import { useEffect, useState } from "react";

import { assetUrl } from "~/lib/assets";
import { fetchHonorImages, type HonorImage } from "~/lib/comics";

export function WallOfHonor() {
  const [images, setImages] = useState<HonorImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadHonorImages() {
      setLoading(true);
      setError(null);

      try {
        const honorImages = await fetchHonorImages();
        if (!cancelled) {
          setImages(honorImages);
        }
      } catch {
        if (!cancelled) {
          setError("Could not load wall of honor. Please try again later.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    void loadHonorImages();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="wall-of-honor" aria-labelledby="wall-of-honor-title">
      <img
        src={assetUrl("assets/Wall of honor.webp")}
        alt="Wall of Honor"
        className="wall-of-honor-header"
      />

      {loading && (
        <p className="portfolio-status">Loading wall of honor...</p>
      )}

      {error && (
        <p className="portfolio-status portfolio-status-error">{error}</p>
      )}

      {!loading && !error && images.length === 0 && (
        <p className="portfolio-status">No images yet.</p>
      )}

      {!loading && !error && images.length > 0 && (
        <ul className="wall-of-honor-list">
          {images.map((image) => (
            <li key={image.id} className="wall-of-honor-item">
              <div className="honor-frame">
                <img
                  src={image.url}
                  alt={image.title}
                  className="honor-photo"
                  loading="lazy"
                />
                <img
                  src={assetUrl("assets/Frame.webp")}
                  alt=""
                  className="honor-frame-overlay"
                  aria-hidden
                />
              </div>
              {image.title && (
                <p className="honor-title">{image.title}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
