import React from "react"
import "./CustomMouse.css"
import img from "./greenMouse.png"

export function CustomMouse() {
    const cursorRef = React.useRef(null)

    React.useEffect(()=>{
        document.addEventListener("mousemove",(event)=>{
            const {clientX, clientY} = event;
            const mouseX = clientX - 12
            const mouseY = clientY - 2
        cursorRef.current.style.transform = "translate3d("+mouseX+"px, "+mouseY+"px,0)"
        })
    })

    return (
        // <div className="cursor" ref={cursorRef}></div>
        <img className="cursor"  src={img} alt="" ref={cursorRef}></img>
    )
}