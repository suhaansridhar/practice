function Input(props){
    return(
        <div>
            <h1>Returning an input using props, making this a resusable components</h1>
            <input 
                type={props.type} 
                name={props.name} 
                placeholder={props.placeholder}
                onChange = {props.handleChange}/>
        </div>
    )
}

export default Input;