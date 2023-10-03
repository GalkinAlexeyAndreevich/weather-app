// export const Colors ={
//     light:{
//         primary:"#f3f4f6",
//         secondary:"#ffffff",
//         tertiary:"#4b5563",
//         accent:"#0891b2",
//         tint:"#111827"
//     },
//     dark:{
//         primary:"#1f2937",
//         secondary:"#111827",
//         tertiary:"#d1d5bd",
//         accent:"#0891b2",
//         tint:"#f9fafb"
//     }
// }

import { typeTheme,IColors } from "../interfaces"


export const Colors:{light:IColors,dark:IColors} ={
    light:{
        background:"#f4f4f4",
        text:"#111111",
        primary:"#302ae6",
        secondary:"#536390",
        fontColor:"#424242",
        bgColor:"#fff",
        headingColor:"#292922"
    },
    dark:{
        background:"#111111",
        text:"#f4f4f4",
        primary:"#9a97f3",
        secondary:"#818cab",
        fontColor:"#e1e1ff",
        bgColor:"#161625",
        headingColor:"#292922"
    }
}   

export const defaultTheme:typeTheme = {
    theme:"light",
    colors:Colors.light,
    // getColors(){
    //     this.colors = this.theme==="dark"?Colors.light:Colors.dark
    //     return this.colors
    // },
    
    toggleTheme(){
      
        
       this.theme = this.theme==="dark"?"light":"dark"
       this.colors = this.theme==="dark"?Colors.dark:Colors.light
       console.log(this.theme );
       console.log(this.colors);
    },
}

/* .for_light_theme{
    --primary-color:#302ae6;
    --secondary-color:#536390;
    --font-color:#424242;
    --bg-color:#fff;
    --heading-color:#292922
}

.for_light_theme{
    --primary-color:#9a97f3;
    --secondary-color:#818cab;
    --font-color:#e1e1ff;
    --bg-color:#161625;
    --heading-color:#818cab;
} */