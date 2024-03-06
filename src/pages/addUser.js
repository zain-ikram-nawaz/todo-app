"use client"
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddUser } from './redux/slice'


export default function addUser() {
    const [userData,setUserData]= useState("")
    const dispatch = useDispatch()
    const handle = (e)=>{
        e.preventDefault()
      e.target.reset()
    }
  return (
    <div  className='Add-User'>
        <h1>Add Task</h1>
<form onSubmit={handle}>

    <input type="text" placeholder='Add task here' onChange={(e)=>{setUserData(e.target.value)}}/>
    <button type='submit' onClick={()=>dispatch(AddUser(userData))}>Add</button>

</form>

    </div>
  )
}
