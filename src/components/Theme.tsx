import { useEffect, useState } from "react";

import '../styles/global.scss'

export function Theme() {
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        document.body.classList.toggle('dark', toggle);
      },[toggle])

    return(
        <button onClick={()=> setToggle(!toggle)}>
            { toggle ? "Claro" : "Escuro" }
        </button>
    )
}