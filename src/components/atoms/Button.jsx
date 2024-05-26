import styled from "styled-components";

const ButtonStyled = styled.button `
    width: 100%;
    padding: 8px;
    border-radius: 3px;
    box-shadow: 5px 5px 5px black;
    font-family: Arial, Helvetica, sans-serif;
    background-color: rgb(0, 208, 255);
    transition: 0.5s;
    color: black;

    &:hover{
        background-color: #3f00e0;
        transition: 0.5s;
        color: white;
    }
`;

function Button({text,onClick}){
    return (
        <ButtonStyled onClick={onClick}>{text}</ButtonStyled>
    );
}

export default Button;