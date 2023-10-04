import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { IDataCity} from "../interfaces";


interface TypeState extends IDataCity {
    searchBy:"currentPlace" | "nameCity"
    currentPlace:IDataCity
}
const initialState:TypeState = {
    Key:"293006",
    LocalizedName:"Калуга",
    EnglishName:"Kaluga",
    searchBy:"currentPlace",
    currentPlace:{
        Key:"293006",
        LocalizedName:"Калуга",
        EnglishName:"Kaluga",
    }
}


const citySlice = createSlice({
    name:"city",
    initialState,
    reducers:{
        setCurrentPlace(state,actions){
            const  {Key,LocalizedName,EnglishName} = actions.payload
            const newObj:TypeState = {
                Key,LocalizedName,EnglishName,
                searchBy:"currentPlace",
                currentPlace:{
                    Key,LocalizedName,EnglishName,
                }
            }
            state = newObj
        },
        setPlaceNow(state,actions){
            const  {Key,LocalizedName,EnglishName} = actions.payload
            state.Key = Key
            state.LocalizedName = LocalizedName
            state.EnglishName = EnglishName
        }
    },
})

export const {setCurrentPlace,setPlaceNow} = citySlice.actions

export default citySlice.reducer