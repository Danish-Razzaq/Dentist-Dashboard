import React, { useState } from "react";

import InvoiceList from "./InvoiceList";
import InvoiceView from "./InvoiceView";
import InvoiceForm from "./InvoiceForm";

// Mock data for invoices
const mockInvoices = [
  {
    id: "009",
    customerName: "Hamspire Jordan",
    date: "2024-10-20",
    dueDate: "2024-11-20",
    status: "Overdue",
    total: 16725.0,
    items: [
      {
        description: "Bootstrap Admin Template",
        details:
          "Create quality mockups and prototypes and Design mobile based features.",
        medicine: "Deedicline",
        days: 40,
        amount: 7950.0,
      },
      {
        description: "Admin Themes",
        details: "Best Bootstrap Admin Dashboards and Admin Themes",
        medicine: "Navbpyoxen",
        days: 60,
        amount: 3690.0,
      },
    ],
    subtotal: 16890.0,
    discount: 60.0,
    vat: 95.0,
    billTo: {
      name: "Hamspire Jordan",
      address: "8900 Gilsion Ave.",
      city: "San Francisco, California(CA), 66789",
    },
    hospitalAddress: {
      name: "Medicare LTD, 76890 St.",
      address: "5000 thomos Street, Suite 980",
      city: "Huntsville, Alabama, 87890",
    },
  },
];

const InvoiceManagement = () => {
  const [currentView, setCurrentView] = useState("list"); // 'list', 'view', 'create', 'edit'
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [invoices, setInvoices] = useState(mockInvoices);

  const handleViewInvoice = (invoice) => {
    setSelectedInvoice(invoice);
    setCurrentView("view");
  };

  const handleEditInvoice = (invoice) => {
    setSelectedInvoice(invoice);
    setCurrentView("edit");
  };

  const handleCreateInvoice = () => {
    setSelectedInvoice(null);
    setCurrentView("create");
  };

  const handleDeleteInvoice = (invoiceId) => {
    if (window.confirm("Are you sure you want to delete this invoice?")) {
      setInvoices(invoices.filter((inv) => inv.id !== invoiceId));
    }
  };

  const handleBackToList = () => {
    setCurrentView("list");
    setSelectedInvoice(null);
  };

  if (currentView === "list") {
    return (
      <InvoiceList
        invoices={invoices}
        onView={handleViewInvoice}
        onEdit={handleEditInvoice}
        onCreate={handleCreateInvoice}
        onDelete={handleDeleteInvoice}
      />
    );
  }

  if (currentView === "view") {
    return <InvoiceView invoice={selectedInvoice} onBack={handleBackToList} />;
  }

  if (currentView === "create" || currentView === "edit") {
    return (
      <InvoiceForm
        invoice={currentView === "edit" ? selectedInvoice : null}
        onBack={handleBackToList}
        onSave={(invoiceData) => {
          if (currentView === "edit") {
            setInvoices(
              invoices.map((inv) =>
                inv.id === selectedInvoice.id ? { ...inv, ...invoiceData } : inv
              )
            );
          } else {
            const newInvoice = {
              ...invoiceData,
              id: String(
                Math.max(...invoices.map((i) => parseInt(i.id))) + 1
              ).padStart(3, "0"),
              status: "Draft",
            };
            setInvoices([...invoices, newInvoice]);
          }
          handleBackToList();
        }}
      />
    );
  }
};

export default InvoiceManagement;
