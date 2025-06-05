import React from "react";
import { CircleCheckIcon,  X } from "lucide-react";

const GenericTable = ({
  columns = [],
  data = [],
  title = "Data Table",
  currentPage = 1,
  totalPages = 1,
  totalItems = 0,
  onPrevious = () => {},
  onNext = () => {},
  onAction = () => {},
}) => {
  const getStatusColor = (status) => {
    const statusColors = {
      urgent: "bg-red-100 text-red-800",
      emergency: "bg-red-100 text-red-800",
      discharge: "bg-blue-100 text-blue-800",
      "non urgent": "bg-gray-100 text-gray-800",
      "out patient": "bg-yellow-100 text-yellow-800",
      general: "bg-yellow-100 text-yellow-800",
      consulting: "bg-blue-100 text-blue-900",
    };
    return statusColors[status?.toLowerCase()] || "bg-gray-100 text-gray-800";
  };

  const renderCellContent = (item, column) => {
    const value = item[column.key];

    if (column.type === "avatar") {
      return (
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary/50 rounded-full flex items-center justify-center text-white text-sm font-medium">
            {value?.charAt(0) || "?"}
          </div>
          <span className="font-medium text-gray-900">{value}</span>
        </div>
      );
    }

    if (column.type === "status") {
      return (
        <span
          className={`inline-flex px-2 py-1 text-xs font-medium rounded-md ${getStatusColor(
            value
          )}`}
        >
          {value}
        </span>
      );
    }

    if (column.type === "actions") {
      return (
        <div className="flex space-x-2">
          <button
            onClick={() => onAction("cencel", item)}
            className="text-gray-400 hover:text-gray-600 border border-primary/20 rounded-full p-1"
          >
            <X />
          </button>
          <button
            onClick={() => onAction("tick", item)}
              className="text-gray-400 hover:text-gray-600 "
          >
            <CircleCheckIcon size={35} />
          </button>
        </div>
      );
    }

    return <span className="text-gray-900">{value}</span>;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-primary text-white">
            <tr>
              {columns.map((column, index) => (
                <th
                  key={column.key}
                  className={`px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider ${
                    index === 0 ? "rounded-tl-lg" : ""
                  } ${index === columns.length - 1 ? "rounded-tr-lg" : ""}`}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={item.id || index} className="hover:bg-gray-50">
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="px-6 py-4 whitespace-nowrap text-sm"
                  >
                    {renderCellContent(item, column)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-6 py-3 bg-gray-50 border-t border-gray-200 rounded-b-lg">
        <div className="text-sm text-gray-700">
          Showing Page {currentPage} of {totalPages}
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={onPrevious}
            disabled={currentPage === 1}
            className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span className="px-3 py-1 text-sm bg-indigo-500 text-white rounded">
            {currentPage}
          </span>
          <button
            onClick={onNext}
            disabled={currentPage === totalPages}
            className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenericTable;
