// eslint-disable-next-line no-unused-vars
import React , {useState , useEffect , useRef} from "react";

function MioComponent(){
    
    const inputRef1 = useRef(null);
    const inputRef2= useRef(null);
    const inputRef3 = useRef(null);



     useEffect(() => {
        console.log("COMPONENT RENDERED");
     });

     function handleClick1(){
       inputRef1.current.focus();
       inputRef1.current.style.backgroundColor = "Yellow";
       inputRef2.current.style.backgroundColor = "";
       inputRef3.current.style.backgroundColor = "";
     }
     function handleClick2(){
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
       inputRef2.current.style.backgroundColor = "Orange";
       inputRef3.current.style.backgroundColor = "";
      }
      function handleClick3(){
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
       inputRef2.current.style.backgroundColor = "";
       inputRef3.current.style.backgroundColor = "Red";
        
      }
    return(
        <div>
         <button onClick={handleClick1}>
           Click Me 1!
        </button>
        <input ref={inputRef1}/>

        <button onClick={handleClick2}>
           Click Me 2!
        </button>
        <input ref={inputRef2}/>

        <button onClick={handleClick3}>
           Click Me 3!
        </button>
        <input ref={inputRef3}/>
        </div>
        
    );
}
export default MioComponent;