export function WrapperComponent({children}){
    return(
        <div style={{border:'2px solid black'}}> 
            {children}
        </div>
    )
}