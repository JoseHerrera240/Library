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
    const [identification, setIdentification] = useState("");
    const [name, setName] = useState("");
    const [nameLibrary, setNameLibrary] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [adminAcount, setAdminAcount] = useState([
        {
            identification: '1000570051',
            name: 'Jose David Herrera',
            nameLibrary: 'luKastro',
            email: 'hjose0650@gmail.com',
            password: 'Nuryamparo123'
        },
        {
            identification: '1000560052',
            name: 'Jose Luis peralta',
            nameLibrary: 'voldemor',
            email: 'voldemos@gmail.com',
            password: 'voldemor123'
        }
    ]);

    const regexEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');

    const checkCreateAdmin = () => {
        if (identification !== "" && email !== "" && password !== "" && name !== "" && repeatPassword !== "" && nameLibrary !== "") {
            if (regexEmail.test(email)) {
                const emailValidate = adminAcount?.some(obj => obj.email === email);
                const identificationValidate = adminAcount?.some(obj => obj.identification === identification);
                const libraryValidation = adminAcount?.some(obj => obj.nameLibrary === nameLibrary);
                if (emailValidate || identificationValidate || libraryValidation) {
                    if (emailValidate) {
                        return Swal.fire({
                            icon: 'error',
                            title: "That email already exists"
                        })
                    } else if (identificationValidate) {
                        return Swal.fire({
                            icon: 'error',
                            title: "That identification already exists"
                        })
                    } else {
                        return Swal.fire({
                            icon: 'error',
                            title: "That name library already exists"
                        })
                    }
                } else {
                    if (password === repeatPassword) {
                        let object = {
                            identification: identification,
                            name: name,
                            nameLibrary: nameLibrary,
                            email: email,
                            password: password
                        }
                        setAdminAcount(current => [...current, object])
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
                <p>We are here to make your bookstore grow</p>
                <input
                    placeholder='identification'
                    type='text'
                    onChange={e => setIdentification(e.target.value)}
                />
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