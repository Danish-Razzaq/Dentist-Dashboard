import React from "react";
import { Eye, Edit, Trash2, Plus, User } from "lucide-react";
import GenericTable from "../../components/common/DynamicTable";

const InvoiceList = ({ invoices, onView, onEdit, onCreate, onDelete }) => {
  const columns = [
    {
      header: "# Invoice ID",
      key: "id",
      render: (info) => (
        <span className="font-medium text-primary"># {info.id}</span>
      ),
    },
    {
      header: "Customer Name",
      key: "customerName",
      render: (info) => (
        <div className="flex items-center justify-center gap-3 ">
          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
            <User size={16} className="text-primary" />
          </div>
          <span className="font-medium text-gray-900">
            {info?.customerName}
          </span>
        </div>
      ),
    },
    {
      header: "Date",
      key: "date",
    },
    {
      header: "Due Date",
      key: "dueDate",
    },
    {
      header: "Amount",
      key: "total",
      render: (info) => (
        <span className="font-semibold text-gray-900">
          ${info?.total.toFixed(2)}
        </span>
      ),
    },
    {
      header: "Status",
      key: "status",
      render: (info) => (
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            info?.status === "Overdue"
              ? "bg-red-100 text-red-800"
              : info?.status === "Paid"
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {info?.status}
        </span>
      ),
    },
    {
      header: "Actions",
      key: "actions",
      render: (row) => (
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => onView(row.invoice)}
            className="p-2 text-gray-600 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
            title="View Invoice"
          >
            <Eye size={16} />
          </button>
          <button
            onClick={() => onEdit(row.invoice)}
            className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            title="Edit Invoice"
          >
            <Edit size={16} />
          </button>
          <button
            onClick={() => onDelete(row.invoice.id)}
            className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            title="Delete Invoice"
          >
            <Trash2 size={16} />
          </button>
        </div>
      ),
    },
  ];

  const data = invoices.map((invoice) => ({
    id: invoice.id,
    customerName: invoice.customerName,
    date: invoice.date,
    dueDate: invoice.dueDate,
    total: invoice.total,
    status: invoice.status,
    invoice: invoice,
  }));

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-[90rem] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-secondary">Invoices</h1>
            <p className="text-primary mt-1">
              Manage your invoices and billing
            </p>
          </div>
          <button onClick={onCreate} className="btn-secondary gap-1">
            <Plus size={20} />
            Create Invoice
          </button>
        </div>

        {/* Invoice Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <GenericTable
              columns={columns}
              data={data}
              pagination={false}
              key={data.map((item) => item.id).join(",")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default InvoiceList;
