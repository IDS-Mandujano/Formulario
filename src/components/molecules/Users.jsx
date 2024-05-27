import Text from "../atoms/Text";

function Users(props){
    return (
        <div id="txt_users">
            <Text text={props.user}/>
            <Text text={props.email}/>
            <Text text={props.pass}/>
            <Text text={props.date}/>
        </div>
    )
}

export default Users