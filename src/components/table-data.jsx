const TableData = ({ text, color, isBold }) => {
  return (
    <td
      className={`px-3 py-6 font-mulish text-sm ${color} ${
        isBold ? "font-bold" : "font-medium"
      }`}
    >
      {text}
    </td>
  );
};

export default TableData;
