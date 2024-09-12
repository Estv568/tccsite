import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/cadastroClientes.css'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div class="container">
        <a href="index.html">
            <img src="SetaEsquerda.png" alt="Voltar" class="imagem"/>
          </a>    
        <img src="iconeCadastroUsuario" alt="Ícone" class="icone"/>
        <h2>Cadastro de Clientes</h2>
        <form>
            <label for="nome">Nome</label>
            <input type="text" id="nome" name="nome" placeholder="Digite seu nome de usuário" required/>

            <div class="row">
                
            <div>
            <label for="cpf">CPF</label>
            <input type="text" id="cpf" name="cpf" placeholder="Insira seu CPF" required/>
            </div>

            <div>
            <label for="telefone">Telefone </label>
            <input type="tel" id="telefone" name="telefone" placeholder="(XX) XXXXX-XXXX" required/>
            </div>

            </div>
               
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Digite seu email" required/>
            
            <div class="row">

            <div>
            <label for="password">Senha</label>
            <input type="password" id="password" name="password" placeholder="Crie uma senha" required/>
            </div>

            <div>
            <label for="password">Confirmar Senha</label>
            <input type="password" id="ConfirmarSenha" name="Confirmar Senha" placeholder="Confirme sua Senha" required/>
            </div>
            </div>

            <div class="btn-group">
                <button type="reset" class="cancel">Cancelar</button>
                <button type="submit" class="submit">Cadastrar</button>
                </div>
        </form>
    </div>
    </>
  )
}

export default App
