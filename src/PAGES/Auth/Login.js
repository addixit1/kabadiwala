import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import './AuthPage.css'
const Login = () => {
    return (
        <div className='authpage'>
            <Navbar reloadnavbar={false}/>

            <div className='authcont'>
                <img src={require('../../ASSETS/sign.jpg')}
                    alt='login' />

                <form className='authform'>
                    <h1>Login</h1>
                    <div className='formgroup'>
                        {/* <label htmlFor='email'>Email</label> */}
                        <input type='email' id='email' placeholder='Email' />
                    </div>

                    <div className='formgroup'>
                        {/* <label htmlFor='password'>Password</label> */}
                        <input type='password' id='password' placeholder='Password' />
                    </div>

                    <Link to='/forgotpassword'
                        className='stylenone'
                    >
                        <p>Forgot password?</p>
                    </Link>
                    <Link to='/'
                        className='stylenone'

                    >
                        <button className='btn'>Login</button>
                    </Link>
                    <h2 className='or'>OR</h2>
                    <Link to='/signup'
                        className='stylenone'
                    >
                        <button className='btn'>Signup</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Login