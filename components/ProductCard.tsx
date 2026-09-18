import Image from "next/image";
import { assetUrl } from "@/lib/assets";
import type { MenuProduct } from "@/types/menu";

const imageMap = {
  coffee: "/images/coffee/cappuccino.webp",
  pancakes: "/images/pancakes/souffle-pancakes.webp",
  matcha: "/images/matcha/iced-matcha.webp",
};

const formatPrice = (price: number) => Number.isInteger(price) ? `${price} TND` : `${price.toFixed(1)} TND`;

export function ProductCard({ product, index }: { product: MenuProduct; index: number }) {
  return (
    <article className="product-card" style={{ "--delay": `${Math.min(index, 7) * 45}ms` } as React.CSSProperties}>
      <div className={`product-visual ${product.image ? "has-image" : "no-image"}`}>
        {product.image ? (
          <Image src={assetUrl(imageMap[product.image])} alt="" width={900} height={900} loading={index < 2 ? "eager" : "lazy"} sizes="(min-width: 960px) 30vw, (min-width: 600px) 46vw, 100vw" />
        ) : (
          <div className="visual-mark" aria-hidden="true"><span>CO</span><i>•</i><span>CO</span></div>
        )}
        <span className="product-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="product-copy">
        <div className="product-heading">
          <h3>{product.name}</h3>
          <span className="price">{formatPrice(product.price)}</span>
        </div>
        {product.description && <p>{product.description}</p>}
        {product.options && <p className="details"><b>Choice</b> {product.options.join(" · ")}</p>}
        {product.extras && <p className="details"><b>Extras</b> {product.extras.map((extra) => `${extra.name}${extra.price ? ` +${extra.price} TND` : ""}`).join(" · ")}</p>}
      </div>
    </article>
  );
}
