function Input(props){
    return(
        <div>
            <input 
                type={props.type || ''} 
                name={props.name || ''} 
                value={props.value || ''}
                placeholder={props.placeholder || ''}
                onChange = {props.handleChange || ''}/>
        </div>
    )
}

export default Input;