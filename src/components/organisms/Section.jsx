import { useState} from 'react';
import Swal from 'sweetalert2';
import Field from '../molecules/Field';
import Button from "../atoms/Button";
import { list } from '../../data/controllers/depencendies';
import User from "../../data/models/User";
import Users from "../molecules/Users";
import './section.css';

function Section() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [users, setUsers] = useState([]);

    const handlerClick = (event) => {
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Guardado con éxito",
            showConfirmButton: false,
            timer: 1500,
        });

        let user = new User(userName, email, password, date);
        list.push(user);

        const newUsers = [];
        for (let i = 0; i < list.size(); i++) {
            newUsers.push(list.getElementAt(i).getData());
        }
        setUsers(newUsers);

        setUserName('');
        setPassword('');
        setEmail('');
        setDate('');
    };

    return (
        <div id="form_Section">
            <form>
                <Field type="text" placeholder="ej: Jgutierrez23" text="Usuario" val={userName} fnVal={setUserName} />
                <Field type="email" placeholder="eduardo@gmail.com" text="E-mail" val={email} fnVal={setEmail} />
                <Field type="password" placeholder="Passw0rd" text="Contraseña" val={password} fnVal={setPassword} />
                <Field type="date" text="Fecha" val={date} fnVal={setDate} />
            </form>
            <div id="form_Button">
                <Button text="Guardar datos" onClick={handlerClick} />
            </div>
            <div id="users_list">
                {users.map((user,index) => (
                    <Users
                        key={index} user={user.getUser()} email={user.getEmail()} 
                        pass={user.getPassword()} date={user.getDate()}/>
                ))}
            </div>
        </div>
    );
}

export default Section;
