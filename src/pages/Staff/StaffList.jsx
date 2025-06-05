import { Edit2, LucideView, Trash2 } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
// import Table from '../../components/common/DynamicTable';
import Table from "../../components/common/DynamicTable";

const StaffList = () => {

    const columns = [
        { key: "id", header: "# ID" },
        { key: "staffName", header: "Staff Name" },
        { key: "designation", header: "Designation" },
        { key: "contact", header: "Contact" },
        { key: "email", header: "Email" },
        {
            key: "action",
            header: "Action",
            render: (item) => (
                <div className="flex gap-2 justify-center">
                    <button>
                        <Trash2 color="red" />
                    </button>
                    <button>
                        <Edit2 color="green" />
                    </button>
                    <Link to={`/staffdashboard/${item.id.replace("#", "")}`}>
                        <LucideView color="blue" />
                    </Link>
                </div>
            ),
        },
    ];

    const data = [
        {
            id: "#0001",
            staffName: "John Doe",
            designation: "Nurse",
            contact: "123-456-7890",
            email: "john.doe@example.com"
        },
        {
            id: "#0002",
            staffName: "Jane Smith",
            designation: "Doctor",
            contact: "987-654-3210",
            email: "jane.smith@example.com"
        }
    ];

  return (
    <div className='bg-white p-4 rounded shadow-md border border-primary/20'>
        <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold mb-4">Staff List</h1>
        <Link to={'/addstaff'} className="btn">Add Staff</Link>
        </div>
        <Table columns={columns} data={data}  pagination={false}  />
    </div>
  );
}

export default StaffList;
