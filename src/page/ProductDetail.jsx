import Navbar from "../components/Navbar/Nav";
import NavMobile from "../components/Navbar/NavMobile";
import CardDetail from "../components/Product/CardDetail";
import CardDesc from "../components/Product/CardDesc";
import CardProduct from "../components/Product/CardProduct";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductProvider";

const ProductDetail = () => {
  const { id } = useParams();
  const { product, loading } = useContext(ProductContext);
  const productDetail = product.find((product) => product.id === Number(id));
  const [quantity, setQuantity] = useState(1);
  // console.log(productDetail);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  if (loading) {
    return <p>Loading</p>;
  }
  return (
    <>
      <Navbar back cart />
      <div className="my-16 lg:my-40">
        <CardDetail
          product={productDetail}
          setQuantity={handleQuantityChange}
        />
        <CardDesc product={productDetail} />
        <NavMobile
          product={productDetail}
          quantity={quantity}
          setQuantity={setQuantity}
        />
        <div className="mx-4">
          <span>สินค้าแนะนำ</span>
          <div className="flex gap-x-1 p-3 overflow-x-auto snap-x snap-mandatory h-full">
            {loading ? (
              <p>Loading products...</p>
            ) : (
              product
                .filter((p) =>
                  p.tags[0]
                    .split(", ")
                    .some((tag) =>
                      productDetail.tags[0].split(", ").includes(tag)
                    )
                )
                .slice(0, 4)
                .map((product) => (
                  <CardProduct key={product.id} product={product} />
                ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
