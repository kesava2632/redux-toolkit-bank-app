import React, { useState } from 'react'
import {updateMobile,updateName,withdraw,deposit,reset,addTransaction} from './store'
import { useDispatch, useSelector } from 'react-redux'



const Form = () => {
    let dispath = useDispatch()
    
    const [amount,setAmount] =useState("")
    const [name,setName] =useState("")
    const [mobile,setMoblie] =useState("")


  return (
    <div className='container'>
      <h1>Account form</h1>
      <div className='row'>
         <div className='col-5'>
         <input type='number' className='form-control' placeholder='Enter the Amount' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
         </div>
         <button className='btn btn-primary col-1 mx-2' onClick={()=>{
             dispath(deposit(amount)),
             dispath(addTransaction({
                type:'Credit',
                time:new Date().toISOString(),
                amount:amount,
             })),
             setAmount("")
         }}>Deposite</button>
         <button className='btn btn-danger col-1 mx-2' onClick={()=>{
             dispath(withdraw(amount)),
             dispath(addTransaction({
                type:'debit',
                time:new Date().toISOString(),
                amount:amount,
             })),
             setAmount("")
         }}>Withdraw</button>
      </div>
      <div className='row mt-2'>
         <div className='col-5'>
         <input type='text' className='form-control' placeholder='Enter the Name' value={name} onChange={(e)=>setName(e.target.value)}/>
         </div>
         <button className='btn btn-primary col-1 mx-2' onClick={()=>{
             dispath(updateName(name)),
             setName("")
         }}>Name</button>
      </div>
      <div className='row mt-2'>
         <div className='col-5'>
         <input type='number' className='form-control' placeholder='Enter the Mobile Number' value={mobile} onChange={(e)=>setMoblie(e.target.value)}/>
         </div>
         <button className='btn btn-primary col-1 mx-2' onClick={()=>{
             dispath(updateMobile(mobile)),
             setMoblie("")
         }}>Mobile</button>
      </div>
      <div>
      <button className='btn btn-primary mt-2' onClick={()=>{
             dispath(reset())
         }}>reset</button>
      </div>
    </div>
  )
}

export default Form
