import { useRef } from "react";
import { Link } from "react-router-dom";
import api from "../../src/services/api";


function Cadastro() {
    const nameRef = useRef();
    const emailRef = useRef(); 
    const passwordRef = useRef();

    async function handlesubmit(event){
        event.preventDefault(); 

        try{
            await api.post('/cadastro', {
                name: nameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value
            })
            alert("Usuário cadastrado com sucesso")
        } catch (err) {
            alert("Erro ao cadastrar. Tente novamente.");
            return;
        }
        console.log("Nome:", nameRef.current.value);
        console.log("Email:", emailRef.current.value);
    }

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Cadastro</h2>

            <form className="flex flex-col gap-5" onSubmit={handlesubmit}>
                <input ref={nameRef} placeholder='Nome' type='text' className="my-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                <input ref={emailRef} placeholder='Email' type='email' className="my-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                <input ref={passwordRef} placeholder='Senha' type='password' className="my-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-400">Cadastrar</button>
            </form>
            <Link to="/login" className="text-blue-700 hover:underline mt-4 block text-center">Já tem uma conta? Faça login</Link>

        </div>
    )
}
export default Cadastro;