import CountRender from './CountRender'
import Buttons from './Buttons'

export default function Count(){

    console.log("Count Re-rendering");
    return(
        <div>
            <CountRender></CountRender>
            <Buttons></Buttons>
        </div>
    )
}