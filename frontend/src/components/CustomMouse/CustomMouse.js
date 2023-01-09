import React from "react"
import "./CustomMouse.css"
import img from "./greenMouse.png"





export function CustomMouse() {
    
    const cursorRef = React.useRef(null)

    function renderMouse(event) {
        const { clientX, clientY } = event;
        const mouseX = clientX - 12
        const mouseY = clientY - 2
        cursorRef.current.style.transform = "translate3d(" + mouseX + "px, " + mouseY + "px,0)"
    }

    function HideMouse(event) {
        const { clientX, clientY } = event;
        const mouseX = clientX - 999
        const mouseY = clientY - 999
        cursorRef.current.style.transform = "translate3d(" + mouseX + "px, " + mouseY + "px,0)"
    }

    React.useEffect(() => {


        document.addEventListener("mousemove", renderMouse)
        window.addEventListener('DOMContentLoaded', renderMouse);
        document.addEventListener("mouseleave", HideMouse)

    })

    return (
        // <div className="cursor" ref={cursorRef}></div>
        <img id="cursor" src={img} alt="" ref={cursorRef}></img>
    )
}