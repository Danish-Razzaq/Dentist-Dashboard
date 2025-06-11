import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { Trash2, Plus, ArrowLeft } from "lucide-react";

const InvoiceForm = ({ invoice, onBack, onSave }) => {
  const { register, control, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      customerName: invoice?.customerName || "",
      invoiceNumber: invoice?.id || "",
      dueDate: invoice?.dueDate || "",
      message: "",
      items: invoice?.items || [
        { description: "", details: "", medicine: "", days: 0, amount: 0 },
      ],
      discountPercent: 0,
      vatPercent: 0,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const watchedItems = watch("items");
  const discountPercent = watch("discountPercent");

  const subtotal = watchedItems.reduce(
    (sum, item) => sum + (parseFloat(item.amount) || 0),
    0
  );
  const discount = (subtotal * discountPercent) / 100;
  const vat = (subtotal - discount) * 0.1; // 10% VAT
  const total = subtotal - discount + vat;

  const onSubmit = (data) => {
    const invoiceData = {
      ...data,
      subtotal,
      discount,
      vat,
      total,
      date: new Date().toISOString().split("T")[0],
    };
    onSave(invoiceData);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={onBack}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-secondary">
              {invoice ? "Edit Invoice" : "Create Invoice"}
            </h1>
            <p className="text-primary mt-1">
              Fill in the details to generate your invoice
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Basic Information */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Invoice Information
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Customer Name
                </label>
                <input
                  {...register("customerName", { required: true })}
                  placeholder="Enter Customer Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Invoice Number
                </label>
                <input
                  {...register("invoiceNumber")}
                  placeholder="Enter Invoice Number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Due Date
                </label>
                <input
                  {...register("dueDate")}
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                {...register("message")}
                placeholder="Enter a message for this invoice..."
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Items */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Items</h2>
              <button
                type="button"
                onClick={() =>
                  append({
                    description: "",
                    details: "",
                    medicine: "",
                    days: 0,
                    amount: 0,
                  })
                }
                className="flex items-center gap-2 px-4 py-2 text-primary bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
              >
                <Plus size={16} />
                Add New Row
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left py-3 px-4 rounded-l-lg">
                      Product
                    </th>
                    <th className="text-left py-3 px-4">Medicine</th>
                    <th className="text-left py-3 px-4">Days</th>
                    <th className="text-left py-3 px-4">Price</th>
                    <th className="text-left py-3 px-4">Amount (Net)</th>
                    <th className="text-left py-3 px-4 rounded-r-lg">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {fields.map((field, index) => (
                    <tr key={field.id} className="border-b border-gray-200">
                      <td className="py-3 px-4">
                        <input
                          {...register(`items.${index}.description`)}
                          placeholder="Enter product description"
                          className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-primary focus:border-transparent"
                        />
                      </td>
                      <td className="py-3 px-4">
                        <input
                          {...register(`items.${index}.medicine`)}
                          placeholder="Medicine name"
                          className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-primary focus:border-transparent"
                        />
                      </td>
                      <td className="py-3 px-4">
                        <input
                          {...register(`items.${index}.days`)}
                          type="number"
                          placeholder="0"
                          className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-primary focus:border-transparent"
                        />
                      </td>
                      <td className="py-3 px-4">
                        <input
                          {...register(`items.${index}.price`)}
                          type="number"
                          step="0.01"
                          placeholder="0.00"
                          className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-primary focus:border-transparent"
                        />
                      </td>
                      <td className="py-3 px-4">
                        <input
                          {...register(`items.${index}.amount`)}
                          type="number"
                          step="0.01"
                          placeholder="0.00"
                          className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-primary focus:border-transparent"
                        />
                      </td>
                      <td className="py-3 px-4">
                        {fields.length > 1 && (
                          <button
                            type="button"
                            onClick={() => remove(index)}
                            className="p-1 text-red-600 hover:bg-red-50 rounded"
                          >
                            <Trash2 size={16} />
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Totals */}
            <div className="flex justify-end mt-6">
              <div className="w-80 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">
                    Discount % of Total Amount
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      {...register("discountPercent")}
                      type="number"
                      step="0.1"
                      placeholder="0"
                      className="w-16 px-2 py-1 border border-gray-300 rounded text-center"
                    />
                    <span className="text-gray-600">%</span>
                  </div>
                </div>
                <div className="space-y-2 pt-2 border-t border-gray-200">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Discount</span>
                    <span className="font-medium">${discount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">VAT</span>
                    <span className="font-medium">${vat.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between py-2 border-t border-gray-200">
                    <span className="text-lg font-semibold text-gray-900">
                      Total USD
                    </span>
                    <span className="text-xl font-bold text-primary">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-end gap-4">
            <button
              type="button"
              onClick={onBack}
              className="px-6 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              className="px-6 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Save as Draft
            </button>
            <button
              type="submit"
              onClick={handleSubmit(onSubmit)}
              className="px-6 py-2 text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
            >
              {invoice ? "Update Invoice" : "Create Invoice"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceForm;
