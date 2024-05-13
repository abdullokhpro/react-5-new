import React, { useEffect, useState } from "react";
import phone from "../../assets/shopPage/phone.png";
import mainUrl from "../../api";
import "./allProducts.scss";
import Loading from "../loading/Loading";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    mainUrl
      .get(`products`)
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  let allProductCard = products?.map((el) => (
    <div key={el.id} className="all-products__card">
      <div className="all-products__card__top">
        <Link to={`/product/${el.id}`}>
          <img src={el.images[0]} alt={el.title} />
        </Link>
      </div>
      <div className="all-products__card__bottom">
        <p className="all-products__card__title">{el.title}</p>
        <p className="all-products__card__text">${el.stock}</p>
      </div>
    </div>
  ));
  return (
    <section className="all-products">
      <div className="container all-products__container">
        <h1 className="all-products__title">Shop All Products</h1>
        <div className="all-products__cards">{allProductCard}</div>
        {loading ? <Loading /> : <></>}
      </div>
    </section>
  );
};

export default AllProducts;
