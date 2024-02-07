import React from 'react';
// import Style from './Register.module.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Register() {

                                       //formik
    // function validateRegister(e) {
    //     let errors = {};
    //     if (!e.name) {
    //         errors.name = "name is required"
    //     }
    //     else if (e.name.length < 3) {
    //         errors.name = "name must be at least 3 charcter"
    //     }
    //     if (!e.phone) {
    //         errors.phone = "phone number required"
    //     }
    //     return errors
    // }

    // let registerFormiK = useFormik({
    //     initialValues: {
    //         name: '',
    //         phone: '',
    //         email: '',
    //         password: '',
    //         rePassword: ''
    //     },
    //     validate: validateRegister,
    //     onSubmit: ()=>{console.log('hhhh')}
    // })

                                            //yub
    
    let phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    let valSchema = Yup.object({
        name: Yup.string().min(3, 'must be 3 characters at least').max(10, 'max 10 characters').required('name is required'),
        email: Yup.string().email('email invalid').required('email required'),
        phone: Yup.string().matches(phoneRegExp, 'invalid phone number').required('phone required'),
        password: Yup.string().min(6, 'min 6 character').required(),
        rePassword: Yup.string().oneOf([Yup.ref('password')],'rePassword not match').required('repassword require')
    })

    let registerFormiK = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            password: '',
            rePassword: ''
        },
        validationSchema: valSchema,
        onSubmit: ()=>{console.log('hhhh')}
    })

    return <>
        <div className="w-50 m-auto my-5">
            <form onSubmit={registerFormiK.handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input type='text' className='form-control my-3' value={registerFormiK.values.name} onBlur={registerFormiK.handleBlur} onChange={registerFormiK.handleChange} name='name' id='name' />
                {registerFormiK.errors.name && registerFormiK.touched.name ? <div className="alert mt-2 p-2 alert-danger">{registerFormiK.errors.name}</div> :''}

                <label htmlFor='phone'>Phone</label>
                <input type='tel' className='form-control my-3' value={registerFormiK.values.phone} onBlur={registerFormiK.handleBlur} onChange={registerFormiK.handleChange} name='phone' id='phone' />
                {registerFormiK.errors.phone &&  registerFormiK.touched.phone? <div className="alert mt-2 p-2 alert-danger">{registerFormiK.errors.phone}</div> : ''}

                <label htmlFor='email'>Email</label>
                <input type='email' className='form-control my-3' value={registerFormiK.values.email} onBlur={registerFormiK.handleBlur} onChange={registerFormiK.handleChange}  name='email' id='email'/>
                {registerFormiK.errors.email && registerFormiK.touched.email ? <div className="alert mt-2 p-2 alert-danger">{registerFormiK.errors.email}</div> : ''}

                <label htmlFor='password'>Password</label>
                <input type='password' className='form-control my-3' value={registerFormiK.values.password} onBlur={registerFormiK.handleBlur} onChange={registerFormiK.handleChange}  name='password' id='password'/>
                {registerFormiK.errors.password && registerFormiK.touched.password ? <div className="alert mt-2 p-2 alert-danger">{registerFormiK.errors.password}</div> : ''}

                <label htmlFor='rePassword'>RePassword</label>
                <input type='password' className='form-control my-3' value={registerFormiK.values.rePassword} onBlur={registerFormiK.handleBlur} onChange={registerFormiK.handleChange} name='rePassword' id='rePassword'/>
                {registerFormiK.errors.rePassword && registerFormiK.touched.rePassword ? <div className="alert mt-2 p-2 alert-danger">{registerFormiK.errors.rePassword}</div> : ''}

                <button type="submit" disabled={!(registerFormiK.isValid && registerFormiK.dirty)} className='btn bg-main text-white'>Register</button>
            </form>
        </div>
    </>
}





