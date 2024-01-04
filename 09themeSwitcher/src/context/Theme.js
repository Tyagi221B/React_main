import { createContext , useContext } from "react";

// hum yha par variables bhi de sakte hai plus appne methods bhi de sakte hai 
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme:()=>{},
    lightTheme:()=>{},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
    
}