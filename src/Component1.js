function Component1(props){
    return(
        <div>
            <h1>Returning an input</h1>
            <input 
                type={props.type} 
                name={props.name} 
                placeholder={props.placeholder}
                onChange = {props.handleChange}/>
        </div>
    )
}

export default Component1;