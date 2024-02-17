import React from "react";
import { Link } from "react-router-dom";

export default function BorrowBook_borrow() {
  return (
    <section className="bb-borrow">
      <div className="container w-[660px] mx-auto">
        <div className="bb-borrow-box border-2 border-black p-6">
          <div className="btn-menu flex justify-center gap-2">
            <Link
              to="/borrowbook_borrow"
              className="border-[1.5px] border-black py-1 px-3 font-medium rounded-md"
            >
              ยืม-คืนหนังสือ
            </Link>
            <button className="border-[1.5px] border-black py-1 px-4 font-medium rounded-md">
              ข้อมูลสถิติ
            </button>
          </div>
          <h1 className="text-2xl mt-2">ยืมหนังสือ</h1>

          <form action="">
            <label htmlFor="username" className="">
              ชื่อผู้ใช้
            </label>
            <input
              type="text"
              id="m_user"
              name="username"
              className=""
              required
            />
          </form>
        </div>
      </div>
    </section>
  );
}
