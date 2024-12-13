import React from 'react'

function BoxDataUser() {
  return (
    <>
    <div className='flex flex-col mt-80 ml-24 w-2/3 h-auto] bg-white border border-3 grey-500 shadow-lg rounded'>
        <div className='flex flex-col m-3 mt-12 p-6 border border-3 grey-500 shadow-lg rounded'>
          ชื่อ-นามสกุล
          <input></input>
        </div>
        <div className='flex flex-col m-3 p-6 border border-3 grey-500 shadow-lg rounded'>
          เบอร์มือถือ
          <input></input>
        </div>
        <div className='flex flex-col m-3 p-6 border border-3 grey-500 shadow-lg rounded'>
          อีเมล
          <input></input>
        </div>
        <br/><br/>
        <button className=' m-3 mb-6 p-6 border border-3 grey-500 shadow-lg rounded text-left'>
          ลบอีเมล
        </button>
        
    </div>
    </>
  )
}

export default BoxDataUser