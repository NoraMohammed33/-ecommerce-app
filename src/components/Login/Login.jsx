import React, { useContext, useState } from 'react';
// import Style from './Login.module.css'
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner'
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';

export default function Login() {

    let navigate = useNavigate()
    let { setUserToken} = useContext(UserContext)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function loginSubmit(values) {
        setLoading(true)
        let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values)
            .catch((err) => {
                setLoading(false)
                setError(err.response.data.message)
            })
        if (data.message === 'success') {
            setLoading(false)
            localStorage.setItem('userToken', data.token)
            setUserToken(data.token)
            // console.log(userToken);
            navigate('/')
        }
    }
    let loginFormiK = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: loginSubmit
    })

    return <>
        <div className="w-50 m-auto my-5">
            {error ? <div className="alert alert-danger">{error}</div> : ''}
            <form onSubmit={loginFormiK.handleSubmit}>

                <label htmlFor='email'>Email</label>
                <input type='email' className='form-control my-3' value={loginFormiK.values.email} onBlur={loginFormiK.handleBlur} onChange={loginFormiK.handleChange} name='email' id='email' />

                <label htmlFor='password'>Password</label>
                <input type='password' className='form-control my-3' value={loginFormiK.values.password} onBlur={loginFormiK.handleBlur} onChange={loginFormiK.handleChange} name='password' id='password' />

                {loading ? '' : <div className='d-flex align-items-center'><button type="submit" disabled={!(loginFormiK.isValid && loginFormiK.dirty)} className='btn bg-main text-white me-3'>Login</button> <Link className="nav-link text-primary" to="/register">Register now</Link></div>}
                {loading ? <ColorRing visible={true} height="80" width="80" ariaLabel="color-ring-loading" wrapperStyle={{}}
                    wrapperClass="color-ring-wrapper" colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']} /> : ''}
            </form>
        </div>
    </>
}
