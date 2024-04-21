import { useState } from "react";


function CarComponent(){

    const [car , setCar] = useState({year: 2024 , 
                                    make: "Ford" , 
                                    model:"Mustang"});
    function handleYearChange(event){
        setCar(c =>({...c , year: event.target.value}));
    }
    function handleMakeChange(event){
        setCar(c =>({...c , make: event.target.value}));
    }
    function handleModelChange(event){
        setCar(c =>({...c , model: event.target.value}));
    }

    return(<div>
             <p>Your favorite Car is: {car.year} {car.make} {car.model}</p>

             <input type="number" value={car.year} onChange={handleYearChange}/><br />
             <input type="text" value={car.make} onChange={handleMakeChange}/><br />
             <input type="text" value={car.model} onChange={handleModelChange}/><br />
    </div>);

}

export default CarComponent;