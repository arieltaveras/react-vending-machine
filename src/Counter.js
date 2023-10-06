import React, {useState, useEffect} from "react";

const Counter = () => {
  const [num, setNum] = useState(0);

    const increment = () => {
        setNum(n => n + 1);
    };
    useEffect(() => {
      document.h2 = num + 1
  })
    
  return (
    <>
        <h4>BAGS EATEN: {`${num}`}</h4>
      <button onClick={increment}>NOM NOM NOM</button>
    </>
  );
};

export default Counter;
