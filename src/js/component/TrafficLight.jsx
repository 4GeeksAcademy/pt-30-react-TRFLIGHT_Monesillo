import React, {useState} from 'react'

export function TraficLight(props){
    const [ color, setColor] = useState("");
    const lightOn = (event) => {
        setColor(prev => {
                return !prev
        })
    }

    return (
        <div id="container">
            <div 
            className={`luzRoja ${color == "luzRoja" ? "luzEncendida" : ""}`}
            onClick={()=>{
                setColor(prev => {
                     if (prev == "luzRoja"){
                        return ""
                     }else {
                        return "luzRoja"
                     }
                })
            } }
        
            ></div>
            <div 
            className={`luzAmarilla ${color =="luzAmarilla" ? "luzEncendida" : ""}`}
            onClick={() => {
                    setColor(prev => {
                        return prev == "luzAmarilla" ? "" : "luzAmarilla"
                    })
            }}
            
            ></div>
            <div 
            className={`luzVerde ${color == "luzVerde" ? "luzEncendida" : ""}`}
            onClick={() => {
                    setColor(prev => {
                        return prev == "luzVerde" ? "" : "luzVerde"
                    })
            }}
            ></div>
        </div>

    )
   
};