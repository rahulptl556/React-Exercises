import { countAtom } from "../store/atoms/count";
import { useSetRecoilState} from "recoil";

export default function Buttons(){

    //Only extract setCount
    const setCount = useSetRecoilState(countAtom);


    console.log('Button re-rendering');
    return(
        <div>
            <button onClick={function(){
                // Count passed as function
                setCount(count => count + 1);
            }}>Increase</button>

            <button onClick={function(){
                // Count passed as function
                setCount(count => count - 1);
            }}>Decrease</button>
        </div>
    )
}