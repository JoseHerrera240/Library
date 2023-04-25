import { useState } from 'react';
//components
import Button from '@mui/material/Button';
import EnjoyIcon from '../../Assets/Icons/entry.png';
import ComeBack from '../../Assets/Icons/izquierda.png';
import Swal from 'sweetalert2';
//styles
import './Login.sass'
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [admin, setAdmin] = useState(false);
    const [user, setUser] = useState(false);
    const [emailUser, setEmailUser] = useState("");
    const [passwordUSer, setPasswordUSer] = useState("");
    const [emailAdmin, setEmailAdmin] = useState("");
    const [passwordAdmin, setPasswordAdmin] = useState("");
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
    const navigate = useNavigate();

    const changeAdmin = () => {
        setAdmin(!admin)
    }

    const changeUser = () => {
        setUser(!user)
    }

    const checkUser = () => {
        if (emailUser !== "" && passwordUSer !== "") {
            if (regexEmail.test(emailUser)) {
                const emailValidate = userAcount?.some(obj => obj.email === emailUser);
                const passwordValidate = userAcount?.some(obj => obj.password === passwordUSer);
                if (!emailValidate || !passwordValidate) {
                    return Swal.fire({
                        icon: 'error',
                        title: "The username or password is not correct"
                    })
                } else {
                    navigate('/userHome');
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

    const checkAdmin = () => {
        if (emailAdmin !== "" && passwordAdmin !== "") {
            if (regexEmail.test(emailAdmin)) {
                const emailValidate = adminAcount?.some(obj => obj.email === emailAdmin);
                const passwordValidate = adminAcount?.some(obj => obj.password === passwordAdmin);
                if (!emailValidate || !passwordValidate) {
                    return Swal.fire({
                        icon: 'error',
                        title: "The username or password is not correct"
                    })
                } else {
                    navigate('/homeAdmin');
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
        <div className='parent-card-init'>
            <div className='section-login'>
                <h1>Welcome to Parnaso</h1>
                <p>We are very happy that you want to expand your knowledge and we hope that you find the book you are looking for.</p>
                <section className='section-card'>
                    {admin === false && user === false ?
                        <>
                            <h1>But before, how do you want to enter today?</h1>
                            <div>
                                <Button onClick={changeAdmin}>Admin</Button>
                                <Button onClick={changeUser}>User</Button>
                            </div>
                        </>
                        : admin === true && user === false ?
                            <>
                                <h1>Hi admin, enter your data</h1>
                                <div className='login-card'>
                                    <input
                                        type='email'
                                        placeholder='Email'
                                        onChange={e => setEmailAdmin(e.target.value)}
                                    />
                                    <input
                                        type='password'
                                        placeholder='Password'
                                        onChange={e => setPasswordAdmin(e.target.value)}
                                    />
                                    <div>
                                        <Button onClick={changeAdmin} variant="contained">
                                            <img src={ComeBack} width='25' alt='entry' />
                                        </Button>
                                        <Button onClick={checkAdmin} variant="contained">
                                            <img src={EnjoyIcon} width='25' alt='entry' />
                                        </Button>
                                    </div>
                                    <Link to={'/createAcountAdmin'}>Don't have an account yet?</Link>
                                </div>
                            </>
                            : admin === false && user === true ?
                                <>
                                    <h1>Hi user, enter your data</h1>
                                    <div className='login-card'>
                                        <input
                                            type='email'
                                            placeholder='Email'
                                            onChange={e => setEmailUser(e.target.value)}
                                        />
                                        <input
                                            type='password'
                                            placeholder='Password'
                                            onChange={e => setPasswordUSer(e.target.value)}
                                        />
                                        <div>
                                            <Button onClick={changeUser} variant="contained">
                                                <img src={ComeBack} width='25' alt='entry' />
                                            </Button>
                                            <Button onClick={checkUser} variant="contained">
                                                <img src={EnjoyIcon} width='25' alt='entry' />
                                            </Button>

                                        </div>
                                        <Link to={'/createAcountUser'}>Don't have an account yet?</Link>
                                    </div>

                                </>
                                : <h1>Error :?</h1>
                    }

                </section>
            </div>
        </div>
    );
}

export default Login;