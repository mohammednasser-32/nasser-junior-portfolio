import { Outlet } from "react-router";

import { assetUrl } from "~/lib/assets";

import { Footer } from "~/components/Footer";
import { Navigation } from "~/components/Navigation";

export default function PortfolioLayout() {
  return (
    <div className="portfolio-shell">
      <header className="portfolio-header">
        <img
          src={assetUrl("assets/Header animated.webp")}
          alt="Nasser Junior"
          className="portfolio-header-image"
        />
      </header>

      <Navigation />

      <main className="portfolio-main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
