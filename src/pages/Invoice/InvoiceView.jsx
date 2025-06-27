import React from "react";
import {
  Download,
  Printer,
  CreditCard,
  ArrowLeft,
  User,
  Building,
} from "lucide-react";

const InvoiceView = ({ invoice, onBack }) => {
  const handlePrint = () => {
    const printContents = document.getElementById("printView").innerHTML;
    const printWindow = window.open("", "_blank");

    // Get all <style> and <link> elements to preserve styles
    const styles = Array.from(
      document.querySelectorAll('style, link[rel="stylesheet"]')
    )
      .map((node) => node.outerHTML)
      .join("");

    printWindow.document.write(`
    <html>
      <head>
        <title>Print Invoice</title>
        ${styles}
        <style>
          @media print {
            body {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
          }
        </style>
      </head>
      <body>
        <div class="invoice">${printContents}</div>
      </body>
    </html>
  `);

    printWindow.document.close();

    // Wait a bit before printing to allow styles to load
    printWindow.onload = () => {
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    };
  };

  const hanldeDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById("printView").innerHTML], {
      type: "text/html",
    });
    element.href = URL.createObjectURL(file);
    element.download = `invoice-${invoice.id}.html`;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-secondary">
                Invoice #{invoice.id}
              </h1>
              <p className="text-primary mt-1">{invoice.date}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="btn-white gap-2" onClick={hanldeDownload}>
              <Download size={16} />
              Download
            </button>
            <button className="btn-white gap-2" onClick={handlePrint}>
              <Printer size={16} />
              Print
            </button>
            <button className="btn-secondary gap-1">
              <CreditCard size={16} />
              Pay Now
            </button>
          </div>
        </div>

        {/* Invoice Content */}
        <div
          id="printView"
          className=" bg-white rounded-xl shadow-sm border border-gray-200 p-8"
        >
          {/* Invoice Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <img
                src="/logos/logo.png"
                alt="Logo"
                className="w-32 object-contain"
              />
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">
                Invoice - <span className="text-red-400">#{invoice.id}</span>{" "}
              </p>
              <p className="text-sm text-gray-600 mt-1">{invoice.date}</p>
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 ${
                  invoice.status === "Overdue"
                    ? "bg-red-100 text-red-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {invoice.status}
              </span>
            </div>
          </div>

          {/* Billing Information */}
          <div className="grid sm:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <User size={18} />
                Billed To:
              </h3>
              <div className="text-gray-600 space-y-1">
                <p className="font-medium text-gray-900">
                  {invoice?.billTo?.name}
                </p>
                <p>{invoice?.billTo?.address}</p>
                <p>{invoice?.billTo?.city}</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Building size={18} />
                Hospital Address:
              </h3>
              <div className="text-gray-600 space-y-1">
                <p className="font-medium text-gray-900">
                  {invoice?.hospitalAddress?.name}
                </p>
                <p>{invoice?.hospitalAddress?.address}</p>
                <p>{invoice?.hospitalAddress?.city}</p>
              </div>
            </div>
          </div>

          {/* Items Table */}
          <div className="mb-8">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-white text-nowrap">
                  <th className="text-left py-3 px-4 ">Description</th>
                  <th className="text-left py-3 px-4">Medicine</th>
                  <th className="text-left py-3 px-4">No. Of Days</th>
                  <th className="text-right py-3 px-4 ">Amount (Net)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {invoice?.items.map((item, index) => (
                  <tr key={index}>
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium text-gray-900">
                          {item?.description}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          {item?.details}
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-600">
                      {item?.medicine}
                    </td>
                    <td className="py-4 px-4 text-gray-600">{item?.days}</td>
                    <td className="py-4 px-4 text-right font-semibold text-gray-900">
                      ${item?.amount?.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Totals */}
          <div className="flex justify-end">
            <div className="w-80 space-y-2">
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">
                  ${invoice?.subtotal?.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Discount</span>
                <span className="font-medium">
                  ${invoice?.discount?.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">VAT</span>
                <span className="font-medium">${invoice?.vat?.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-3 border-t border-gray-200">
                <span className="text-lg font-semibold text-gray-900">
                  Total USD
                </span>
                <span className="text-xl font-bold text-primary">
                  ${invoice.total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h4 className="font-semibold text-red-600 mb-2">NOTES</h4>
            <p className="text-sm text-gray-600">
              We really appreciate your business and if there's anything else we
              can do, please let us know! Also, should you need us to add VAT or
              anything else to this order, It's super easy since this is a
              template, so just ask!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceView;
