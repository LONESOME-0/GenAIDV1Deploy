import React, { useContext } from "react";
import Nav from "../components/Navbar/Nav";
import NavMobile from "../components/Navbar/NavMobile";
import CardCategry from "../components/Category/CardCategry";
import CardProduct from "../components/Product/CardProduct";
import { Link } from "react-router-dom";
import { CategoryContext } from "../context/CategoryProvider";
import { ProductContext } from "../context/ProductProvider";
import About from "../components/footer/about";
const Home = () => {
  const {category} = useContext(CategoryContext);
  //console.log("cate1",category);
    const {product,loading} = useContext(ProductContext)
    //console.log("Home",product)
    // if (loading) {
    //   return <p>Loading products...</p>;
    // }
  return (
    <>
      <Nav logo search />
      <div className="hidden md:block  ">
      <div className="flex  bg-ga-primary w-full h-72 mt-28 items-center">
        <img
          src="/img/CartmainGenAID.png"
          alt="cart"
          className="flex h-[240px] ml-28"
        />
        <div className="text-white text-6xl ">
          ร้านขายยาคุณภาพดีต้องมีแต่ยาดีๆ
        </div>
        <div className="absolute left-[54%] text-white text-6xl pt-36">
          แต่ยาดีๆ ไม่ได้อยู่ในร้านเรา
        </div>
      </div>
      </div>

      <div className=" py-16 p-3 ">
        <p className="text-3xl px-5 pb-2">หมวดหมู่สินค้า</p>
        <div className="no-scrollbar flex items-center overflow-x-scroll snap-x snap-mandatory mx-4 space-x-7">
          {category?.map((cat, index) => (
            <CardCategry key={index} data={cat} />
          ))}
        </div>
        <div className="grid grid-flow-col justify-items-stretch ">
          <section id="bestselling">
            <p className="flex text-3xl px-5 py-3 justify-self-end">
              สินค้าแนะนำ
            </p>
          </section>
          <Link
            to="#"
            className="flex px-5 underline justify-self-end items-center"
          >
            เพิ่มเติม
          </Link>
        </div>
        <div className="p-2 grid grid-cols-2 gap-3 lg:grid-cols-6 lg:grid-rows-2 lg:gap-3">
          {product
            .filter((product) => product.rating >= 4)
            .slice(0, 12)
            .map((product) => (
              <CardProduct key={product.id} product={product} />
            ))}
        </div>
        <section id="discounted">
          <p>สินค้าลดราคา</p>
        </section>
        <div id="about">
          <p className="text-center text-3xl">เกี่ยวกับเรา</p>
          <hr />
          <About />
        </div>
      </div>
      <NavMobile />
    </>
  );
};

export default Home;
