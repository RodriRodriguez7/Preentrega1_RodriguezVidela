import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const ErrorPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate ("/");
        }, 5000);
    }, [navigate]);

    return(
        <div>
            <h1>Error</h1>
            <p>Usted sera redireccionado al Inicio en 5 segundos!</p>
        </div>
    );
};

export default ErrorPage;