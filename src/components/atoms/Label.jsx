import styled from "styled-components";

const LabelStyled = styled.label`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    color: white;
`;


function Label({text}){
    return (
        <LabelStyled>{text}</LabelStyled>
    );
}

export default Label;