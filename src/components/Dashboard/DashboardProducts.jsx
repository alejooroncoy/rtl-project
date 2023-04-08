const DashboardProducts = ({ title, modifier, products }) => {
  return (
    <section
      className={"products-section".concat(
        modifier ? ` products-section--${modifier}` : ""
      )}
    >
      <div className="products-section-container">
        <h2 className="products-section__title">{title}</h2>
        <ul className="menu menu--categories">
          <li className="menu__item menu__item--categories">
            <h5 className="menu__item__title">Price</h5>
            <h5 className="menu__item__title">Products</h5>
            <h5 className="menu__item__title">Sno</h5>
          </li>
          {products?.map((product) => (
            <li
              key={crypto.randomUUID()}
              className="menu__item menu__item--categories"
            >
              <h6 className="menu__item__subtitle">
                ${product.producto_precio}
              </h6>
              <div className="menu__item__product">
                <h6 className="menu__item__product__title">
                  {product.producto_nombre}
                </h6>
                <img
                  className="menu__item__product__img"
                  src={product.producto_imagen}
                  alt={`Samsung image`}
                />
              </div>
              <h6 className="menu__item__subtitle">{product.producto_orden}</h6>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DashboardProducts;
