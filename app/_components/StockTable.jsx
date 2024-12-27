import { headers, stockData } from "../lib/stockData";

function StockTable() {
  return (
    <table className="table-fixed rounded-md text-sm text-left rtl:text-right w-full">
      <thead className="text-xs bg-indigo-600 text-indigo-50 uppercase">
        <tr>
          {headers.map((header, i) => (
            <th key={i} className="text-md px-6 py-3">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="">
        {stockData.map((stock, i) => (
          <tr key={i} className="border-b odd:bg-indigo-50">
            <td className="text-md px-6 py-3">{stock.name}</td>
            <td className="text-md px-6 py-3">{stock.strength}</td>
            <td className="text-md px-6 py-3">{stock.brand}</td>
            <td className="text-md px-6 py-3">{stock.packSize}</td>
            <td className="text-md px-6 py-3">€ {stock.price}</td>
            <td className="text-md px-6 py-3">{stock.stock}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StockTable;
