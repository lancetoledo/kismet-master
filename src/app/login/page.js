import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from '../Login.module.css';

function Login({
    title = 'Sign In',
    button = 'Login',
    href = '/',
    link = 'Sign Up',
    help = 'Forgot Password',
    headerStatement = 'Not a member?',
    emailInputRef,
    passwordInputRef,
    btnFunction = () => console.log('Button clicked'),
    googleMsg = 'Sign in with Google',
    googleFunction = () => console.log('Google sign-in clicked') }) {
    return (
        <div className={styles.App}>
            <div className={styles.Login}>
                <div className={styles.login_wrapper}>
                    <Link className={styles.logo_div} style={{ textDecoration: 'none' }} href="/" passHref>
                        <p>Image</p>
                    </Link>
                    <div className={styles.form_content}>
                        <form className={styles.loginForm} >
                            <h1>{title}</h1>
                            <label htmlFor='email'>Email</label>
                            <input ref={emailInputRef} type='email' required />
                            <label htmlFor='password'>Password</label>
                            <input ref={passwordInputRef} type='password' required />
                            <button className={styles.login_btn} type="submit">{button}</button>
                            <div className={styles.login_options}>
                                {/* <Image src={defaultGoogleIcon} alt="google" width={25} height={25} /> */}
                                <button type="button" className={styles.login_with_google_btn}>
                                    {googleMsg}
                                </button>
                            </div>
                            <div className={styles.options}>
                                <span>{headerStatement} </span>
                                <Link href={href}>{link}</Link>
                            </div>
                            <span className={styles.forgot}>{help}</span>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Login