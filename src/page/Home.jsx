import React, { useContext } from 'react'
import Nav from '../components/Navbar/Nav'
import NavMobile from '../components/Navbar/NavMobile'
import CardCategry from '../components/Category/CardCategry'
import CardProduct from '../components/Product/CardProduct'
import { Link } from 'react-router-dom'
import { CategoryContext } from '../context/CategoryProvider'

import { ProductContext } from '../context/ProductProvider'

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
    <Nav logo search/>
    <div className='my-16 p-3 lg:my-40'>
      <p className='text-3xl px-5 pb-2'>หมวดหมู่สินค้า</p>
      <div className='flex items-center overflow-x-auto snap-x snap-mandatory mx-4 space-x-7'>
      <CardCategry /> <CardCategry /> <CardCategry /> <CardCategry /> <CardCategry />
      <CardCategry /><CardCategry /><CardCategry /><CardCategry /><CardCategry /><CardCategry />    
      </div>
      <div className='flex p-3 pl-24 justify-between '>
      <section id='bestselling'>
      <p className='text-3xl px-5 py-2 justify-self-center'>สินค้าขายดี</p>
      </section>
      <Link to='#' className='underline justify-self-end'>เพิ่มเติม</Link>
    </div>
    <div className='p-2 grid grid-cols-2 gap-3 lg:grid-cols-6 lg:grid-rows-2 lg:gap-3'>
  {
    product
      .filter(product => product.rating >= 4)
      .slice(0, 12)
      .map(product => (
        <CardProduct key={product.id} product={product} />
      ))
  }
    </div>
    
    </div>
      <section id='discounted'>
      <p>สินค้าลดราคา</p>
      </section>
    <div>
    <div className='p-2 grid grid-cols-2 gap-3 lg:grid-cols-6 lg:gap-3 '>
      {/* <CardProduct /> */}

    </div>

    </div>
      <section id='about'>
      <p>เกี่ยวกับเรา</p>
      </section>
      <div className='p-2 grid grid-cols-2 gap-3 lg:grid-cols-6 lg:gap-3 '>
      {/* <CardProduct /> */}

    </div>
      
   
    <NavMobile />
    </>
    
  )
}

export default Home
