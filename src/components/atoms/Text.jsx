import styled from "styled-components"
const TextSyled = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    color: #ffffff;
    font-size: 18px;
`;

function Text(props){
    return (
        <TextSyled>{props.text}</TextSyled>
    )
}

export default Text