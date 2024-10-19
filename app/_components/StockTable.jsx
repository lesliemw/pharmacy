function StockTable() {
  return (
    <table className="table-fixed rounded-md text-sm text-left rtl:text-right w-full">
      <thead className="text-xs bg-indigo-600 text-indigo-50  uppercase">
        <tr>
          <th className="text-md px-6 py-3">Drug Name</th>
          <th className="text-md px-6 py-3">Strength</th>
          <th className="text-md px-6 py-3">Brand</th>
          <th className="text-md px-6 py-3">Pack Size</th>
          <th className="text-md px-6 py-3">Price</th>
          <th className="text-md px-6 py-3">Stock</th>
        </tr>
      </thead>
      <tbody className="bg-indigo-50">
        <tr className="border-b">
          <td className="text-md px-6 py-3">Rosuvastatin</td>
          <td className="text-md px-6 py-3">5MG</td>
          <td className="text-md px-6 py-3">Crestor</td>
          <td className="text-md px-6 py-3">28</td>
          <td className="text-md px-6 py-3">€2</td>
          <td className="text-md px-6 py-3">56</td>
        </tr>
        <tr className="border-b">
          <td className="text-md px-6 py-3">Rosuvastatin</td>
          <td className="text-md px-6 py-3">10MG</td>
          <td className="text-md px-6 py-3">Crestor</td>
          <td className="text-md px-6 py-3">28</td>
          <td className="text-md px-6 py-3">€2</td>
          <td className="text-md px-6 py-3">84</td>
        </tr>
        <tr className="border-b">
          <td className="text-md px-6 py-3">Rosuvastatin</td>
          <td className="text-md px-6 py-3">20MG</td>
          <td className="text-md px-6 py-3">Crestor</td>
          <td className="text-md px-6 py-3">28</td>
          <td className="text-md px-6 py-3">€2</td>
          <td className="text-md px-6 py-3">112</td>
        </tr>
      </tbody>
    </table>
  );
}

export default StockTable;
