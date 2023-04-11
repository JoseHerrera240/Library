//components
import Swal from 'sweetalert2';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material'
//Icons
import EnjoyIcon from '../../Assets/Icons/innovation.png';
import ComeBack from '../../Assets/Icons/izquierda.png';
//styles
import './CreateAcoutn.sass'

const CreateAcountAdmin = () => {
    const [name, setName] = useState("");
    const [nameLibrary, setNameLibrary] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const checkCreateAdmin = () => {
        if (email !== "" && password !== "" && name !== "" &&  repeatPassword !== "" && nameLibrary !== "") {
            if (email.includes("@") && email.includes(".co")) {
                if(password === repeatPassword){
                    return Swal.fire({
                        icon: 'success',
                        title: "that's all"
                    })
                }else{
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
                <p>We are here to make your bookstore grow</p>
                <input
                    placeholder='Complete Name'
                    type='text'
                    onChange={e => setName(e.target.value)}
                />
                <input
                    placeholder='Name library'
                    type='text'
                    onChange={e => setNameLibrary(e.target.value)}
                />
                <input
                    placeholder='Email'
                    type='email'
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    placeholder='Password'
                    type='password'
                    onChange={e => setPassword(e.target.value)}
                />
                <input
                    placeholder='Repeat password'
                    type='password'
                    onChange={e => setRepeatPassword(e.target.value)}
                />
                <div>
                    <Link to={'/'}>
                        <Button variant="contained">
                            <img src={ComeBack} width='25' alt='entry' />
                        </Button>
                    </Link>
                    <Button onClick={checkCreateAdmin} variant="contained">
                        <img src={EnjoyIcon} width='25' alt='entry' />
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default CreateAcountAdmin