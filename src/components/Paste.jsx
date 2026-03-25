import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/PasteSlice";
import toast from "react-hot-toast";

const Paste = () => {
  //sbsee phle overall data nikalna padega tab he dikha skte he hum
  //iske liye hum useSelector ka use krte he
  const paste = useSelector((state) => state.paste.pastes); //slice paste he aur value pastes he, isse saara data aa jayega
  const [searchTerm, setSearchTerm] = useState(""); //jo search me likhenge voh yha se track ho jayega
  const dispatch = useDispatch(); //jb bhi koi action kroge tb isko use kroge

  const filterData = paste.filter(
    //yhapr data ko nikal liya - paste me jakr title me tolowercase krke voh term mili rhi ya nhi
    (paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );


  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  function handleShare(paste) {
  if(navigator.share) {
    navigator.share({
      title: paste.title,
      // text: paste.content,
      url: `${window.location.origin}/pastes/${paste._id}`
    })
  } else {
    // agar browser share support nahi karta toh link copy karo
    navigator.clipboard.writeText(`${window.location.origin}/pastes/${paste._id}`)
    toast.success("Link copied to clipboard!")
  }
fr}

  return (
    <div className="p-4">
      <input
        className="p-2 border border-gray-600 rounded w-full bg-transparent text-white"
        type="search"
        placeholder="search here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex flex-col gap-5 mt-5">
        {filterData.length > 0 &&
          filterData.map((paste) => {
            return (
              <div className="border" key={paste?._id}>
                <div>{paste.title}</div>
                <div>{paste.content}</div>
                <div className="flex flex-row gap-4 place-content-evenly pt-3">
                  <button>
                  <a href={`/?pasteId=${paste?._id}`}>Edit</a>
                  </button>
                  <button>
                    <a href={`/pastes/${paste?._id}`}> View</a>
                   
                  </button>
                  <button onClick={() => handleDelete(paste?._id)}>
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(paste?.content);
                      toast.success("copied to clipboard");
                    }}
                  >
                    Copy
                  </button>
          
                  <button onClick={() => handleShare(paste)}>
                  Share
                  </button>
                </div>
                <div>{paste.createdAt}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Paste;
