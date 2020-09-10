import React from 'react';
import styles from './Login.module.css';
import user from './../../assets/User.svg'

const Login = () => {
  return (
    <div className={styles.login}>
      <img src={user} alt=""/>
      <span className={styles.name}>Matusik Dmitry</span>
      <div className={styles.triangle}></div>
    </div>
  );
}

export default Login;
