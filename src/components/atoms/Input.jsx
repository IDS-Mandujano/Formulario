import styled from "styled-components";

const InputStyled = styled.input`
    width: 100%;
    padding: 6px;
    border: none;
    border-bottom: solid white 3px;
    color: white;
    background: none;

    &:hover{
        border-bottom: solid #1f006c;
        transition: 0.5s;
        cursor: pointer;
    }
`;

function Input(props){

    const handlerOnChange = (event) => {
        props.fnVal(event.target.value)
    }

    return (
        <InputStyled type={props.type} placeholder={props.placeholder} value={props.val} onChange={handlerOnChange}/>
    );
}

export default Input;