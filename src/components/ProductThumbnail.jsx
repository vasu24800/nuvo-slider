import React, { useRef, useEffect } from "react";
import ChevronButton from "./ChevronButton";
import "../styles/ProductThumbnail.scss";

const ProductThumbnail = ({ product, isActive, onClick }) => {
  // Ref for auto-scroll to selected thumbnail
  const ref = useRef();

  useEffect(() => {
    if (isActive && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [isActive]);

  return (
    <div
      className={`product-thumbnail${isActive ? " active" : ""}`}
      ref={ref}
      tabIndex={0}
      role="button"
      onClick={onClick}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick()}
      aria-pressed={isActive}
    >
      <img src={product.image} alt={product.title} className="thumbnail-img" />
      <div className="thumbnail-info">
        <span className="thumbnail-title">{product.title}</span>
        <ChevronButton isActive={isActive} />
      </div>
    </div>
  );
};

export default ProductThumbnail;
