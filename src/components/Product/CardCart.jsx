import React from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri";
import QuantityInput from './QuantityInput'
const CardCart = () => {
    return (
        <div className='flex justify-evenly bg-white p-2 h-44  items-center max-w-96 mx-auto rounded-xl my-auto'>
            <div className='flex gap-2 h-full w-[40%]'> {/* Changed to horizontal layout with gap */}
                <div className='flex items-center'> {/* Checkbox container */}
                    <input type="checkbox" name="check" id="check" className="m-auto w-4 h-4" /> {/* Added margin top */}
                </div>
                <div className='h-full'> {/* Image container */}
                    <img
                        className="h-full w-auto object-contain"
                        src="https://cx.lnwfile.com/_/cx/_raw/xo/m0/lg.jpg"
                        alt=""
                    />
                </div>
            </div>

            <div className='flex flex-col flex-1s'>
                <div className=''><span className='text-lg'>ยาธาตุน้ำขาวตรากระต่ายบิน</span> </div>

                <div className='text-ga-secondary text-2xl font-bold'>35.- </div>
                <div className='flex justify-end'> <QuantityInput /></div>

            </div>

            <div className='self-start m-3'>
                <RiDeleteBin6Fill color='red' />
            </div>
        </div>
    )
}

export default CardCart