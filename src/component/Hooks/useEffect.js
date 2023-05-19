import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [myNum, setMyNum] = useState(0);
  //   console.log(myNum);

  useEffect(() => {
    document.title = `Chats(${myNum})`;
  });

  return (
    <>
      <div className="btn-grp">
        <p>{myNum}</p>
        <button onClick={() => setMyNum(myNum + 1)} className="btn">
          INCR
        </button>
        <span></span>
        {/* <button
          onClick={() => (myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0))}
          className="btn"
        >
          DECR
        </button> */}
      </div>
    </>
  );
};

export default UseEffect;
