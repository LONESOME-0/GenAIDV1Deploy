import React from 'react'
import Navbar from '../components/Navbar/Nav'
import NavMobile from '../components/Navbar/NavMobile'
import CardDetail from '../components/Product/CardDetail'
import CardDesc from '../components/Product/CardDesc'
import CardProduct from '../components/Product/CardProduct'
const ProductDetail = () => {
    return (
        <>

            <Navbar back cart />
            <div className='my-16 lg:my-40'>
                <CardDetail />
                <CardDesc />
                <NavMobile product />
                <div className='mx-4'>
                    <span>สินค้าแนะนำ</span>
                    <div className='flex items-center overflow-x-auto snap-x snap-mandatory -mx-4 space-x-7'>
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />

                    </div>
                </div>
            </div>


        </>

    )
}

export default ProductDetail