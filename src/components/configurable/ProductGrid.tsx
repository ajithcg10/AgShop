import { useFilteredProducts } from "../../hooks/useFilteredProducts";

const ProductGrid = () => {
  const { products, categories, activeCategory, setActiveCategory } =
    useFilteredProducts();

  return (
    <section className="cfg-section px-4">

      {/* Filters */}
      <div className="cfg-filters flex flex-wrap gap-2 mb-6">

      <button
        className={`cfg-chip ${!activeCategory ? "cfg-chip--active" : ""}`}
        onClick={() => setActiveCategory(null)}
      >
           All
      </button>

        {categories.map((c) => (
          <button
            key={c}
            className={`cfg-chip ${
              activeCategory === c ? "cfg-chip--active" : ""
            }`}
            onClick={() => setActiveCategory(c)}
          >
            {c }
          </button>
        ))}

      </div>

      {/* Product Grid */}
      <div
        className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        gap-6
      "
      >
        {products.map((p) => (
          <div key={p.id} className="cfg-card cfg-card--product">

            {/* Image */}
            <div className="cfg-card__img-placeholder flex items-center justify-center text-3xl">
              {p.category.charAt(0)}
            </div>

            {/* Body */}
            <div className="cfg-card__body">

              <span className="cfg-card__category">
                {p.category}
              </span>

              <h3 className="cfg-card__title">
                {p.name}
              </h3>

              <p className="cfg-card__desc">
                {p.description}
              </p>

              <div className="cfg-card__footer flex justify-between items-center mt-3">

                <span className="cfg-card__price">
                  ${p.price.toFixed(2)}
                </span>

                <span className="cfg-card__rating">
                  ★ {p.rating}
                </span>

              </div>

            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;