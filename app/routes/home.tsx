import { assetUrl } from "~/lib/assets";
import { Clients } from "~/components/Clients";
import { WallOfHonor } from "~/components/WallOfHonor";

import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Nasser Junior" }];
}

export default function Home() {
  return (
    <>
      <section className="home">
        <div className="home-about">
          <h1 className="home-about-title">Hello there!</h1>
          <p>
            You actually visited my website! well..uhm..not sure how to start but, I am Mohammed Nasser -AKA Nasser Junior-,
            a software engineer by day, a cartoonist by night.
          </p>
          <p>
            I started my journey many years ago by expressing my thoughts and feelings through cartoons and sharing them
            with the world through social media, whether it was happiness, sadness, frustration or just a random thought..I had a comics for it.
          </p>
          <p>
            My work gained a lot of attention, gathering over <strong>500,000</strong> followers across different platforms,
            and got featured in various media outlets, including newspapers, magazines, and TV shows.
          </p>
          <p>
            I am now collaborating with companies and institutions to help them deliver their message in a more
            engaging and creative way, the same way I express myself, and help them reach a wider
            audience through cartoons! so if you think your brand can be a little cooler, let's work together!
          </p>
          <p>
            <strong>PS:</strong> If you want to know more about my other personality,
            check my other <a className="website-link" href="https://dev.nasserjunior.com/" target="_blank" rel="noopener noreferrer"><strong>website!</strong></a>
          </p>
        </div>

        <div className="home-image">
          <img src={assetUrl("assets/me.webp")} alt="Nasser Junior" />
        </div>
      </section>

      <Clients />

      <WallOfHonor />
    </>
  );
}
