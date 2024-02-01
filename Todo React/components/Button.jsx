function Button(props){
    function addTodo(){
        props.setTodos([...props.todos,{
             title: 'Cook a New Recipe', 
             description: 'Try preparing a new dish for a change of taste' 
        }]);
    }
    return(
        <button onClick={addTodo}> Add a random todo </button>
    )
}

export default Button