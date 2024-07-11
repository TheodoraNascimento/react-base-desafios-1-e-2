import './button.css'



let Button = (props) => {
    return  <button className='btn' onClick={() => alert(`A label desse botão é: ${props.label}`)}>{props.label}</button>
}

Button.defaultProps ={
    label: "Click me!"

}

export default Button