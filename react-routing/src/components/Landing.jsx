import { useNavigate } from "react-router-dom";

export default function  Landing() {
 
    const navigate = useNavigate();
    function handleClick(){
        navigate('/dashboard')
    }


    return(
        <button onClick={handleClick}>Go to Dashboard</button>
    )
}