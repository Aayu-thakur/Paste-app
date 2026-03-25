import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom'
import { addToPastes, updateToPastes } from '../redux/PasteSlice'




const ViewPaste = () => {

const {id} = useParams();
const allPastes = useSelector(
  (state) => state.paste.pastes)

const paste = allPastes.filter(
  (p) => p._id==id)[0]
console.log("final paste:",paste);


  return (
    <div className='flex flex-col gap-4 p-4'>

      <div className='flex gap-3'>
      <input 
      className='p-4 border border-gray-600 rounded w-full bg-transparent text-white'
      type="text" 
      placeholder='enter title name'
      value={paste.title}
      disabled
      onChange={(e) => setTitle(e.target.value)}
      />
      
      {/* <button 
      onClick={createPaste}
      className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded whitespace-nowrap'>
        {
          pasteId ? 'Update My Paste' : 'Create My Paste'  //agar paste id miligi to update ka button nhi to create ka
        }
      </button> */}
    </div>

    <div className='mt-8'>
      <textarea 
      className='border border-gray-600 rounded-lg p-4 w-full bg-transparent text-white'
      value={paste.content}
      placeholder='enter content here'
      disabled
      onChange={(e) => setValue(e.target.value)}
      rows={20}
      />
    </div>

    </div>
  )
}

export default ViewPaste