import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { addToPastes, updateToPastes } from '../redux/PasteSlice'

const Home = () => {
    const [title , setTitle] = useState('')
    const [value, setValue] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()//paste it ke liye, use nikalne ke liye useSearch param ka use krke nikal skte ho
    const pasteId = searchParams.get("pasteId") //mujhe query params chahieye jisme key ki value paste id ho
    //agar pasteid mil jayegi to uske value isme place ho jayegi agar nhi mili to nhi aayegi value
    const dispatch = useDispatch();
    
    //for edit button in paste.jsx
    const allPastes = useSelector((state) => state.paste.pastes)
    useEffect(() => {
      if(pasteId){
        const paste = allPastes.find((p) => p._id === pasteId)
        setTitle(paste.title)
        setValue(paste.content)
      }
    }, [pasteId])
    


  //Create My Paste pr click krne se kya logic aa rha he voh mention krna padega
  function createPaste (){ //iske andr hum chahte he pura ka puraa paste ka data create kr le aur slice ko forward krde
    const paste ={
        title: title,  //isme title
        content: value,  //isme value
        _id: pasteId ||  
        Date.now().toString(36),   //id create krli he date ke basis pr means aaj ki date pr
        createdAt: new Date().toISOString(),  //time bhi save kr liya
    }
    //create to kr liya ab save bhi krvane chahte he ki baad me use kr paaye
    //aur save localStorage pr krenge
    
    if(pasteId){ //if pasteId available he means create nhi krna he save he krna he keval
    dispatch(updateToPastes(paste));
    }
    else{ //create 
    //update aur create ke logic slice me likhe he aur vha pr reducer function ko use krne ke liye dispatcher ki need hogi
    dispatch(addToPastes(paste));
    }

    //after updation aur addition hum chahte he clear ho jaye 
    setTitle('')
    setValue('')
    setSearchParams({})

  }
  return (
    <div className='flex flex-col gap-4 p-4'>

      <div className='flex gap-3'>
      <input 
      className='p-4 border border-gray-600 rounded w-full bg-transparent text-white'
      type="text" 
      placeholder='enter title name'
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />
      
      <button 
      onClick={createPaste}
      className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded whitespace-nowrap'>
        {
          pasteId ? 'Update My Paste' : 'Create My Paste'  //agar paste id miligi to update ka button nhi to create ka
        }
      </button>
    </div>

    <div className='mt-8'>
      <textarea 
      className='border border-gray-600 rounded-lg p-4 w-full bg-transparent text-white'
      value={value}
      placeholder='enter content here'
      onChange={(e) => setValue(e.target.value)}
      rows={20}
      />
    </div>

    </div>
  )
}

export default Home