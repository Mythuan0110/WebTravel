import React from 'react'
import Layout from '../components/shared/Layout'

const Messages = () => {
  const customerData = [
    {
        id: '1',
        name: 'Shirley A. Lape',
        email: 'alex@gmail.com',
        message: 'hello ',
        mobile: '0000000000'
    },
    {
      id: '1',
      name: 'Shirley A. Lape',
      email: 'alex@gmail.com',
      message: 'hello ',
      mobile: '0000000000'
  },
  {
    id: '1',
    name: 'Shirley A. Lape',
    email: 'alex@gmail.com',
    message: 'hello ',
    mobile: '0000000000'
},
{
  id: '1',
  name: 'Shirley A. Lape',
  email: 'alex@gmail.com',
  message: 'hello ',
  mobile: '0000000000'
},
]

return (
    <Layout>
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="text-gray-700 font-medium">Transactions</strong>
            <div className="border-x border-gray-200 rounded-sm mt-3">
                <table className="w-full text-gray-700">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Transaction id</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customerData?.map((e) => (
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.email} </td>
                                <td> {e.transaction_id}</td>
                                <td>
                                    <button className="capitalize py-1 px-2 rounded-md text-xs text-sky-600 bg-sky-100">
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </Layout>
)
}

export default Messages