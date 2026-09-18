import Image from "next/image";
import { assetUrl } from "@/lib/assets";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Image className="hero-image" src={assetUrl("/images/hero/coco-table.webp")} alt="A cappuccino, pastry and open book on a warm café table" width={1536} height={1024} priority sizes="100vw" />
      <div className="hero-shade" />
      <div className="hero-content">
        <p className="kicker">Welcome to Coco</p>
        <h1 id="hero-title">Good food,<br/><em>better days.</em></h1>
        <a href="#menu" className="hero-link">Explore the menu <span aria-hidden="true">↓</span></a>
      </div>
      <p className="hero-note">Coffee &amp; stories,<br/>best shared slowly.</p>
    </section>
  );
}
