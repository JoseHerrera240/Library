import { useState } from 'react';
//components
import Button from '@mui/material/Button';
import EnjoyIcon from '../../Assets/Icons/entry.png';
import ComeBack from '../../Assets/Icons/izquierda.png';
import Swal from 'sweetalert2';
//styles
import './Login.sass'
import { Link } from 'react-router-dom';

function Login() {
    const [admin, setAdmin] = useState(false);
    const [user, setUser] = useState(false);
    const [emailUser, setEmailUser] = useState("");
    const [passwordUSer, setPasswordUSer] = useState("");
    const [emailAdmin, setEmailAdmin] = useState("");
    const [passwordAdmin, setPasswordAdmin] = useState("");

    const changeAdmin = () => {
        setAdmin(!admin)
    }
    const changeUser = () => {
        setUser(!user)
    }

    const checkUser = () => {
        if (emailUser !== "" && passwordUSer !== "") {
            if (emailUser.includes("@") && emailUser.includes(".co")) {
                return null
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
            if (emailAdmin.includes("@") && emailAdmin.includes(".co")) {
                return null
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