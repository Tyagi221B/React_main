import { useEffect, useState } from "react";
import "./App.css";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";
import { ThemeProvider } from "./context/Theme";

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = ()=>{
      setThemeMode("light")
  }
  const darkTheme = ()=>{
      setThemeMode("dark")
  }


  // actuall change in theme 

  useEffect (()=>{
    document.querySelector("html").classList.remove("light" , "dark")
    document.querySelector("html").classList.add(themeMode)
    
  },[themeMode])

  return (
    <ThemeProvider value={{darkTheme , lightTheme , themeMode}}> 
     {/* yha mill gaya hume eccess jo hume theme.js me define kiya , ya export kiya , ya store kiya*/}
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
