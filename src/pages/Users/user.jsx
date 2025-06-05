import React from "react";

const User = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-20">User Page</h1>
      <p className="text-center mt-4">This is the user page.</p>
      <div className="flex justify-center mt-8">
        <a
          href="/"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Go to Home
        </a>
      </div>
      <table>
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">John Doe</td>
            <td className="border px-4 py-2">
              <a
                href="mailto:danish@gmail.com"
                className="text-blue-500 hover:underline"
              >
                danis@gmail.com{" "}
              </a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">2</td>
            <td className="border px-4 py-2">Jane Smith</td>
            <td className="border px-4 py-2">
              <a
                href="mailto:danish@gmail.com"
                className="text-blue-500 hover:underline"
              >
                danis@gmail.com{" "}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default User;
