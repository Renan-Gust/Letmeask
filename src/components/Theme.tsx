import { useEffect, useState } from "react";

import { Button } from '../components/Button'

import '../styles/dark-mode.scss'

export function Theme() {
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        document.body.classList.toggle('dark', toggle);
      },[toggle])

    return(
        <div className="dark-mode">
            <Button  onClick={()=> setToggle(!toggle)} className="button">
                { toggle ? "Claro" : "Escuro" }
            </Button>
        </div>
    )
}