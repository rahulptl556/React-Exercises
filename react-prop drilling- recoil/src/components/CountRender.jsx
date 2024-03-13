import { useContext } from "react"
import { MyContext } from "../context"

export default function CountRender(){
    const count = useContext(MyContext);
    return(
        <div>
            {count}
        </div>
    )
}