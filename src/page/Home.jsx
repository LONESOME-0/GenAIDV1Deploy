import React, { useContext } from "react";
import Nav from "../components/Navbar/Nav";
import NavMobile from "../components/Navbar/NavMobile";
import CardCategry from "../components/Category/CardCategry";
import CardProduct from "../components/Product/CardProduct";
import { Link } from "react-router-dom";
import { CategoryContext } from "../context/CategoryProvider";
import { ProductContext } from "../context/ProductProvider";
import About from "../components/footer/About.jsx"
const Home = () => {
  const { category } = useContext(CategoryContext);
  //console.log("cate1",category);
  const { product, loading } = useContext(ProductContext);
  //console.log("Home",product)
  // if (loading) {
  //   return <p>Loading products...</p>;
  // }

  return (
    <>

    <Nav logo search/>
    <div className='flex bg-ga-primary w-full h-72 mt-28 items-center'>
      <img 
      src='../../public/img/CartmainGenAID.png' 
      alt='cart'
      className='flex h-[240px] ml-28 '
      />
      <div className=' text-white text-6xl '>
        ร้านขายยาคุณภาพดีต้องมีแต่ยาดีๆ
      </div>
      <br/>
      <div className='absolute left-[54%] text-white text-6xl pt-36'>
        แต่ยาดีๆ ไม่ได้อยู่ในร้านเรา
      </div>

    </div>
    <div className='my-8 p-3'>
      <p className='text-3xl px-5 pb-2'>หมวดหมู่สินค้า</p>
      <div className=' no-scrollbar  flex items-center overflow-x-scroll snap-x snap-mandatory mx-4 space-x-7'>
      <CardCategry /> <CardCategry /> <CardCategry /> <CardCategry /> <CardCategry />
      <CardCategry /><CardCategry /><CardCategry /><CardCategry /><CardCategry /><CardCategry />    
      </div>
      <div className='grid grid-flow-col justify-items-stretch '>
      <section id='bestselling'>
      <p className='flex text-3xl px-5 py-8 justify-self-end'>สินค้าแนะนำ</p>

      </section>

      <div id="about ">
        <p className=" text-center text-3xl" >เกี่ยวกับเรา</p>
        <hr/>
        <About   />
      </div>
      <NavMobile />
      
    </>
  );
};

export default Home;
