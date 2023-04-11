//components
import Swal from 'sweetalert2';

//Icons
import EnjoyIcon from '../../Assets/Icons/innovation.png';
import ComeBack from '../../Assets/Icons/izquierda.png';
//styles
import { Button } from '@mui/material'
import './CreateAcoutn.sass'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const CreateAcountUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");


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