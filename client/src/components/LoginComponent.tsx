import React from 'react'
import styles from '../styles/LoginComponent.module.css'

const LoginComponent = () => {
  return (
    <div>
      <form className={styles.form} >
        <h3>Inicia sesión</h3>
        <label >Username</label>
        <input type='email'  />
        <label>Contraseña</label>  
        <input  type='password' />
        <button >Iniciar sesión</button>
      </form>
    </div>
  )
}

export default LoginComponent