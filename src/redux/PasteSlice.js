import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';


const initialState = {  //jo bhi saare paste ka data he hum local storage me rkte he
  pastes: localStorage.getItem("pastes")  //local storage me agar data mil jayega toh parse krke le lenge usko 
  ? JSON.parse(localStorage.getItem("pastes"))
  : [] //nhi milega toh empty array ko
}

export const PasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state , action) => {  // state = abhi ka data, action = jo bheja gaya naya paste
    const paste = action.payload // .payload matlab jo actual data bheja usko nikal liya
    state.pastes.push(paste);  // array mein naya paste add karo (push = end mein add)
    localStorage.setItem('pastes',JSON.stringify(state.pastes)) //// localStorage mein save karo... array ko string mein convert karo then save (localStorage sirf string store karta hai)
    toast('Paste Created Successfully') //// screen pe notification dikhao.. ye toast ka kaam hota h

  },
    updateToPastes: (state,action) => {
      const paste = action.payload;    // naya updated paste aaya

      // dhundo ki kaun se index pe purana paste hai
      const index = state.pastes.findIndex((item) => 
      item._id === paste._id);
    
    if (index >= 0) {   // agar mila
      state.pastes[index] = paste;   // purane ko naye se replace karo
 
      localStorage.setItem("pastes", JSON.stringify(state.pastes));  // local storage me bhi usko replace kr dena hai nye wale paste se

      toast.success("Paste updated");
    }
  },
    resetAllPastes: (state, action) => {
      state.pastes = [];   // array khali kar do mtlb jo bhi saare paste likhe hain unn sbko remove kr do

      localStorage.removeItem("pastes");  // local storage se bhi hta do "pastes" key ko
    },
    removeFromPastes: (state, action) => {
      const pasteId = action.payload;   // konsa paste delete karna hai uski id aayi

      console.log(pasteId);  // terminal/console mein id print karo — debugging ke liye

      // us id wali paste ka index dhundo array mein
      const index = state.pastes.findIndex((item) =>
      item._id === pasteId);

      if(index >= 0) {  // agar mila
        state.pastes.splice(index, 1);   // sirf woh ek item hata do mtlb sirf ek uss paste ko hta do
    // splice = array se item nikalo
    // (index, 1) matlab — is position se, sirf 1 item nikalo

        localStorage.setItem("pastes", JSON.stringify(state.pastes));  // localStorage se bhi remove kr do uss ek paste ko 

        toast.success("Paste deleted");
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, resetAllPastes, removeFromPastes } = PasteSlice.actions

export default PasteSlice.reducer