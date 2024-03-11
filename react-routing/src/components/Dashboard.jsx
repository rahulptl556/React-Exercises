import { useNavigate } from "react-router-dom";

export default function  Dashboard() {
 
    const navigate = useNavigate();
    function handleClick(){
        navigate('/')
    }


    return(
        <button onClick={handleClick}>Go to Landing Page</button>
    )
}