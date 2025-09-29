import React, { useEffect, useState } from "react";
import ProductThumbnail from "./ProductThumbnail";
import ProductDetail from "./ProductDetail";
import "../styles/Slider.scss";

const Slider = () => {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  const handleSelect = (idx) => setSelected(idx);

  return (
    <div className="slider-root">
      <div className="slider-thumbnails">
        {products.map((product, idx) => (
          <ProductThumbnail
            key={product.id}
            product={product}
            isActive={selected === idx}
            onClick={() => handleSelect(idx)}
          />
        ))}
      </div>
      <div className="slider-details">
        {products.map((product, idx) => (
          <ProductDetail
            key={product.id}
            product={product}
            isActive={selected === idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
