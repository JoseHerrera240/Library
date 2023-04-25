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
    const [identification, setIdentification] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [userAcount, setUserAcount] = useState([
        {
            identification: '1000570051',
            name: 'Jose David Herrera',
            email: 'hjose0650@gmail.com',
            password: 'Nuryamparo123'
        },
        {
            identification: '1000560052',
            name: 'Jose Luis peralta',
            email: 'voldemos@gmail.com',
            password: 'voldemor123'
        }
    ]);
    const regexEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
    
    const checkCreateUser = () => {
        if (email !== "" && password !== "" && name !== "" && repeatPassword !== "") {
            if (regexEmail.test(email)) {
                const emailValidate = userAcount?.some(obj => obj.email === email);
                const identificationValidate = userAcount?.some(obj => obj.identification === identification);
                if (emailValidate || identificationValidate) {
                    if (emailValidate) {
                        return Swal.fire({
                            icon: 'error',
                            title: "That email already exists"
                        })
                    } else {
                        return Swal.fire({
                            icon: 'error',
                            title: "That identification already exists"
                        })
                    }
                } else {
                    if (password === repeatPassword) {
                        let object = {
                            identification: identification,
                            name: name,
                            email: email,
                            password: password
                        }
                        setUserAcount(current => [...current, object])
                        return Swal.fire({
                            icon: 'success',
                            title: "Done"
                        })
                    } else {
                        return Swal.fire({
                            icon: 'error',
                            title: "the keys do not match"
                        })
                    }
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
                    placeholder='Identification'
                    type='text'
                    onChange={e => setIdentification(e.target.value)}
                />
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