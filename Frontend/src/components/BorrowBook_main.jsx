import React from "react";
import '../style/BorrowBook_style.css';

export default function BorrowBook_main() {
  const books = [
    {
        id: 'B0004',
        title: "เจ้าชายน้อย",
        borrower: "สมรักษ์ สะอาด",
        borrowedDate: "2021-08-23",
        returnDate: "0000-00-00",
        fine: 0,
    },
    {
        id: 'B0003',
        title: "เย็บ ปัก ถักร้อย",
        borrower: "สมหญิง จริงใจ",
        borrowedDate: "2021-08-23",
        returnDate: "0000-00-00",
        fine: 0,
    },
    {
        id: 'B0001',
        title: "คู่มือการสอบรับราชการ",
        borrower: "สมชาย มั่นคง",
        borrowedDate: "2021-08-22",
        returnDate: "2021-08-26",
        fine: 5,
    },
    {
        id: 'B0001',
        title: "คู่มือการสอบรับราชการ",
        borrower: "สมชาย มั่นคง",
        borrowedDate: "2021-08-21",
        returnDate: "2021-08-28",
        fine: 0,
    },
    {
        id: 'B0002',
        title: "แฮร์รี่ พอตเตอร์",
        borrower: "สมเกียรติ เก่งกล้า",
        borrowedDate: "2021-08-20",
        returnDate: "2021-08-28",
        fine: 25,
    },
  ];

  return (
    <section className="bb-main">
      <div className="container w-[760px] mx-auto">
        <div className="bb-box border-2 border-black p-6">
          <h3 className="mt-2 mb-8 text-lg font-medium">
            การจัดการข้อมูลการยืม-คืนหนังสือ
          </h3>

          {/* ค้นหาหนังสือ */}
          <form action="" className="my-6">
            <input className="border-[1.5px] border-black" type="text" />
            <button className=" mx-4 border-[1.5px] border-black px-6 font-medium rounded-md">
              ค้นหา
            </button>
          </form>

          <div className="button-checkinfo flex justify-end gap-2 my-2">
            <button className="border-[1.5px] border-black px-3 font-medium rounded-md">
              ยืม-คืนหนังสือ
            </button>
            <button className="border-[1.5px] border-black px-3 font-medium rounded-md">
              ข้อมูลสถิติ
            </button>
          </div>

          <table className="w-full border border-collapse border-black">
            <thead className="bb-table-head">
              <tr>
                <th>รหัสหนังสือ</th>
                <th>ชื่อหนังสือ</th>
                <th>ผู้ยืม-คืน</th>
                <th>วันที่ยืม</th>
                <th>วันที่คืน</th>
                <th>ค่าปรับ</th>
              </tr>
            </thead>
            <tbody className="bb-table-body">
              {books.map((book) => (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.borrower}</td>
                  <td>{book.borrowedDate}</td>
                  <td>{book.returnDate}</td>
                  <td>{book.fine}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
