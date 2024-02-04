function Todo(props){
    return(
        <div>
            <h1>{props.title}</h1>
            <div>{props.description}</div>
        </div>
    )
}

export default Todo