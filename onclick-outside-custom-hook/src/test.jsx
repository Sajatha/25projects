import { useState, useRef } from "react"
import useOutsideClick from "./index.jsx";


export default function UseOnClickOutsideTest() {

    const [showContent, setShowContent] = useState(false);

    const ref = useRef();
    useOutsideClick(ref, () => setShowContent(false));


    return <div>
        {
            showContent ? <div ref={ref}>
                <h1>This is a random content</h1>
                <p>Please click outside of this content to close this content.</p>
            </div> : <button onClick={() => setShowContent(true)}>Show Content</button>
        }
    </div>
}