import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
    return (
        <div className="container">
            <form>
                <h1>Faça Login</h1>
                <div>
                    <input type="email" placeholder="E-mail" />
                    <FaUser className="icon" />
                </div>
                <div>
                    <input type="password" placeholder="Senha" />
                    <FaLock className="icon" />
                </div>

                <div className="recall-forget">
                    <label>
                        <input type="checkbox" />
                       Lembre de mim 
                    </label>
                    <a href="#">Esqueceu a senha?</a>
                </div>

                <button>Entrar</button>

                <div className="signup-link">
                    <p>Não tem uma conta? <a href="#"></a>Registrar</p>
                </div>

            </form>
        </div>
    )
}

export default Login
