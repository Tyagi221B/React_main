import { useCallback, useEffect, useState ,useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*(){}";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]); 
  // yha par jo jo dependencies ki vjha se method bar bar run hoga to hum kaise us method ko optimize kar le //concept of memoization 

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,9);
    window,navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length , numberAllowed, charAllowed, passwordGenerator ]) // kuch bhi change ho dependencies me to dobara se run kardo . 

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />

          <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 px-3 py-0.5 shrink-0 text-white transition ease-in-out delay-150 hover:bg-indigo-500 duration-300">
            copy
          </button>


        </div>
        <div className="flex text-sum gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" 
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length: {length}</label>

          </div>
          <div className="flex item-center gap-x-1">
          <input type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={()=>{
            setNumberAllowed((prev)=>!prev);
          }}
          
          />
          <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex item-center gap-x-1">
          <input type="checkbox"
          defaultChecked={charAllowed}
          id="charInput"
          onChange={()=>{
            setCharAllowed((prev)=>!prev);
          }}
          
          />
          <label htmlFor="charInput">Characters</label>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
