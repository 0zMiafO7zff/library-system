import React from 'react'
import { Link } from 'react-router-dom' 

export default function BorrowBook_borrow() {
  return (
    <section className="bb-borrow">
        <div className="container w-[760px] mx-auto">
            <div className="btn-menu">
            {/* <Link to="/" className="border-[1.5px] border-black px-3 font-medium rounded-md">
              ยืม-คืนหนังสือ
            </Link> */}
            <button className="border-[1.5px] border-black px-3 font-medium rounded-md">
              ข้อมูลสถิติ
            </button>
            </div>
        </div>
    </section>
  )
}
