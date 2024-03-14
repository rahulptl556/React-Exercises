import { useRecoilValue } from "recoil"
import { EvenSelector } from "../store/selectors";


export default function(){
    const isEven = useRecoilValue(EvenSelector);
    return(
        <div>{isEven ? 'It is Even' : null}</div>
    )
}