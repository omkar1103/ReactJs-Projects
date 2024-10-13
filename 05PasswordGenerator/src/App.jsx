import { useCallback, useEffect, useState,useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8); // corrected typo: lenght to length
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const passwordRef=useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIKLMNOPQRSTVXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '@#$%&!&';

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  const copyPasswordToClibboard=useCallback(()=>{
    passwordRef.current?.select()
      window.navigator.clipboard.writeText(password);
  },[password])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password...'
            readOnly
            ref={passwordRef}
          />
          <button
              className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={copyPasswordToClibboard}
          >
            Copy
          </button>
        </div>

        <div className='flex items-center gap-x-1'>
          <input
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(Number(e.target.value))} 
          />
          <label htmlFor=''>Length:{length}</label>
          <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            checked={numberAllowed} 
            id='numberInput'
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor='numberInput'>Numbers</label>
          
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            checked={charAllowed} 
            id='characterInput'
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label htmlFor='characterInput'>Characters</label>
          
        </div>

        </div>

      </div>
    </>
  );
}

export default App;
