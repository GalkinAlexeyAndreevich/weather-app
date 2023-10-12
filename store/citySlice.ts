import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { IDataCity} from "../interfaces";


interface TypeState extends IDataCity {
    searchBy:"currentPlace" | "nameCity"
}
const initialState:TypeState = {
    Key:"293006",
    LocalizedName:"Калуга",
    EnglishName:"Kaluga",
    searchBy:"currentPlace",
}
// const initialState:TypeState = {
//     Key:"",
//     LocalizedName:"",
//     EnglishName:"",
//     searchBy:"currentPlace",
// }


const citySlice = createSlice({
    name:"city",
    initialState,
    reducers:{
        setCurrentPlace(state,actions:PayloadAction<IDataCity>){
            const  {Key,LocalizedName,EnglishName} = actions.payload
            const newObj:TypeState = {
                Key,LocalizedName,EnglishName,
                searchBy:"currentPlace"
            }
            state = newObj
        },
        setChosenPlace(state,actions:PayloadAction<IDataCity>){
            const  {Key,LocalizedName,EnglishName} = actions.payload
            console.log(Key,LocalizedName,EnglishName);
            
            state.Key = Key
            state.LocalizedName = LocalizedName
            state.EnglishName = EnglishName
            state.searchBy = "nameCity"
        }
    },
})

export const {setCurrentPlace,setChosenPlace} = citySlice.actions

export default citySlice.reducer