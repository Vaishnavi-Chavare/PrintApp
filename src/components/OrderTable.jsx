import React from "react";
import cross from '../../Images/cross.png';

const OrderTable = () => {
  const orders = [
    { sno: 1, name: "Sem Presentation", pages: 500, qty: 2, price: 1000 },
    { sno: 2, name: "Mid Exam", pages: 300, qty: 2, price: 600 },
    { sno: 3, name: "NMAT", pages: 500, qty: 2, price: 1000 },
    { sno: 4, name: "Java", pages: 400, qty: 2, price: 800 },
    { sno: 5, name: "Python", pages: 600, qty: 2, price: 1200 },
  ];

  return (
    <div className="w-2/3 shadow-md">
      <table className="w-full p- text-left">
        <thead className="text-white">
          <tr className="bg-indigo-700">
            <th className="px-4 py-4">SNO</th>
            <th className="px-4 py-4">File Name</th>
            <th className="px-4 py-4">Pages</th>
            <th className="px-4 py-4">Qty</th>
            <th className="px-4 py-4">Price</th>
            <th className="px-4 py-4">Total Price</th>
            <th className="px-4 py-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr className="p-2" key={index}>
              <td className="px-4 py-4">{order.sno}</td>
              <td className="px-4 py-4">{order.name}</td>
              <td className="px-4 py-4">{order.pages}</td>
              <td className="px-4 py-4">{order.qty}</td>
              <td className="px-4 py-4">{order.price}</td>
              <td className="px-4 py-4">{order.qty * order.price}</td>
              <td className="px-4 py-4 text-red-600 cursor-pointer">
                <img src={cross} alt="Delete" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
