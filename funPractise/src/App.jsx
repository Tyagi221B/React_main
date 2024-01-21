import { useState } from 'react';

function App() {
  const [arr, setArray] = useState([
    { id: 1, text: "playGame", isChecked: false },
    { id: 2, text: "sayhi", isChecked: false },
    { id: 3, text: "sayBye", isChecked: false }
  ]);

  const handleDeleteBtn = (index) => {
    const newArray = arr.filter((_, i) => i !== index);
    setArray(newArray);
  };

  const handleCheckbox = (index) => {
    setArray(arr.map((item, i) => (i === index ? { ...item, isChecked: !item.isChecked } : item)));
  };

  return (
    <>
      <ul>
        {arr.map((item, index) => (
          <li key={index}>
            <input
              type='checkbox'
              checked={item.isChecked}
              onChange={() => handleCheckbox(index)}
            />
            {item.text}
            {item.isChecked && (
              <button onClick={() => handleDeleteBtn(index)}>Delete</button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
