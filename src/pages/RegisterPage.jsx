import { useEffect } from "react";
import { register } from "../services/authService";

export default function RegisterPage(){
    useEffect(()=>{
        const probarRegistro = async () => {
            try {
                const resultado = await register({
                    name: "pruebareact3",
                    email: "pruebareact3@gmail.com",
                    password: "12345678"
                });
                console.log("Registro exitoso", resultado);
            } catch (error) {
                console.error("❌ Error al registrar:", error.response?.data || error.message) 
            }
        };
        probarRegistro()
    },[]);
    return(
        <div>
            <h2>Probando registro automático....</h2>
        </div>
    )
}

