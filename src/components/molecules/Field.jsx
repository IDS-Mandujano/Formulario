import './field.css'
import Label from "../atoms/Label"
import Input from "../atoms/Input"


function Field(props){
    return (
        <div id="form_Field">
            <Label text={props.text}/>
            <Input type={props.type} placeholder={props.placeholder} val={props.val} fnVal={props.fnVal}/>
        </div>
    );
}

export default Field;