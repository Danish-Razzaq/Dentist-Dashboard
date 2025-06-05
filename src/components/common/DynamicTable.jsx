import React, { useState } from 'react';

const Table = ({ columns, data, renderRowActions, pagination, itemsPerPageOptions = [10, 15, 20] }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0]);

    // Calculate the total number of pages
    const totalPages = Math.ceil(data?.length / itemsPerPage);

    // Calculate the data to display on the current page
    const currentData = data?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <>
            <div className="w-full overflow-x-auto text-nowrap shadow-md sm:rounded-lg">
                <table className="w-full text-left text-sm text-gray-500">
                    <thead className="red text-xs uppercase text-white">
                        <tr className="red bg-primary">
                            {columns?.map((col) => (
                                <th key={col.key} scope="col" className="px-6 py-3 text-center">
                                    {col.header}
                                </th>
                            ))}
                            {renderRowActions && <th className="px-6 py-3 text-center">Actions</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {currentData?.length > 0 ? (
                            currentData.map((item) => (
                                <tr key={item.id} className="border-b bg-white hover:bg-gray-50">
                                    {columns.map((col) => (
                                        <td key={col.key} className="px-6 py-4 text-center">
                                            {col.render ? col.render(item) : item[col.key]}
                                        </td>
                                    ))}
                                    {renderRowActions && <td className="px-6 py-4 text-center">{renderRowActions(item)}</td>}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={columns.length + (renderRowActions ? 1 : 0)} className="px-6 py-4 text-center">
                                    The table is empty
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>

            </div>
            <div className={`flex w-full items-center justify-between p-4 ${!pagination ? 'hidden' : ''}`}>
                <div>
                    <button className="bg-gray-200 px-3 py-1 text-sm" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                        Previous
                    </button>
                    <button className="red ml-2 px-3 py-1 text-sm text-white" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                        Next
                    </button>
                </div>

                <div className="">
                    <span className="font-bold text-primary ">Items per page:</span>
                    <select
                        style={{ height: '23px' }}
                        className=" ml-2  inline-block w-28  bg-gray-200  p-0 text-sm"
                        value={itemsPerPage}
                        onChange={(e) => {
                            setItemsPerPage(Number(e.target.value));
                            setCurrentPage(1); // Reset to the first page
                        }}
                    >
                        {itemsPerPageOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <span className="text-sm text-primary">
                        Page {currentPage} of {totalPages}
                    </span>
                </div>
            </div>
        </>
    );
};

export default Table;