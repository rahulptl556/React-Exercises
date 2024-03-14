import { useRecoilValue } from "recoil";
import { countAtom } from "../store/atoms/count";
import EvenRender from "./EvenRender";

export default function CountRender(){
    const count = useRecoilValue(countAtom);
    return(
            <div>
                {count}
                <EvenRender></EvenRender>
            </div>
        
    )
}