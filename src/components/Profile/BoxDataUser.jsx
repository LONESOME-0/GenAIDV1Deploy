import React from 'react'

function BoxDataUser() {
  return (
    <>
    <div className='flex flex-col mt-80 ml-24   bg-white border border-3 grey-500 shadow-lg rounded'>
        <div className=''>
          ชื่อ-นามสกุล
          <input></input>
        </div>
        <div>
          เบอร์มือถือ
          <input></input>
        </div>
        <div>
          อีเมล
          <input></input>
        </div>
        <br/><br/>
        <div>
          ลบอีเมล
        </div>
    </div>
    </>
  )
}

export default BoxDataUser