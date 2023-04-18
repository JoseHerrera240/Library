//components
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@mui/material'

//Icons
import EnjoyIcon from '../../Assets/Icons/innovation.png';
import ComeBack from '../../Assets/Icons/izquierda.png';
//styles
import './CreateAcoutn.sass'

const CreateAcountUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    

    // la idea es crear un array que guarde los usuarios yya existentes y los que esta creando
    // crear unos usuarios de prueba
    //hacer una condición que si el correo ya existe, no se puede crear 
    //hacer una alerta cuando ya fue creado con exito y devolverlo a la pagina de inicio


    const checkCreateUser = () => {
        if (email !== "" && password !== "" && name !== "" && repeatPassword !== "") {
            if (email.includes("@") && email.includes(".co")) {
                if (password === repeatPassword) {
                    return Swal.fire({
                        icon: 'success',
                        title: "that's all"
                    })
                } else {
                    return Swal.fire({
                        icon: 'error',
                        title: "the keys do not match"
                    })
                }
            } else {
                return Swal.fire({
                    icon: 'info',
                    title: 'Incomplete email',
                    html: 'Please check the mail, since it does not match the standards'
                })
            }
        } else {
            return Swal.fire({
                icon: 'info',
                title: 'Incomplete fields',
                html: 'Please enter the requested data'
            })
        }
    }

    return (
        <div className='divRegisterParent'>
            <form className='formRegister'>
                <h1>Parnaso</h1>
                <p>We hope you find the book of your dreams</p>
                <input
                    placeholder='Name'
                    type='text'
                    onChange={e => setName(e.target.value)}
                />
                <input
                    placeholder='Email'
                    type='email'
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    placeholder='password'
                    type='password'
                    onChange={e => setPassword(e.target.value)}
                />
                <input
                    placeholder='Repeat the password'
                    type='password'
                    onChange={e => setRepeatPassword(e.target.value)}
                />
                <div>
                    <Link to={'/'}>
                        <Button variant="contained">
                            <img src={ComeBack} width='25' alt='entry' />
                        </Button>
                    </Link>
                    <Button onClick={checkCreateUser} variant="contained">
                        <img src={EnjoyIcon} width='25' alt='entry' />
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default CreateAcountUser