import React from 'react'
import { useSelector } from 'react-redux'

const Account = () => {

  
  let data = useSelector((state)=>{
    return state
  })


  return (
    <>
    <div className='container'>
      <h2 className='text-danger'>Account Details</h2>
       <table className='table table-bordered w-50'>
          <thead>
            <tr>
              <th>
                Balance
              </th>
              <th>
                FullName
              </th>
              <th>
                Mobile
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {data.user.balance}
              </td>
              <td>
                {data.user.fullName}
              </td>
              <td>
                {data.user.mobile}
              </td>
            </tr>
          </tbody>
       </table>
       <table className='table table-bordered w-50'>
          <thead>
            <tr>
              <th>
                Type
              </th>
              <th>
               Time
              </th>
              <th>
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {data.transaction.map((tr)=>{
              return (
              <tr>
              <td>
              {tr.type}
              </td>
              <td>
              {tr.time}
              </td>
              <td>
              {tr.amount}
              </td>
            </tr>
              )
            })}
          </tbody>
       </table>
    </div>
    </>
  )
}

export default Account
