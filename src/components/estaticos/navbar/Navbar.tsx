import React from "react";
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
<<<<<<< HEAD
import { TokenState } from "../../../store/tokens/tokensReducer";
import { Action, addToken } from "../../../store/tokens/actions";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";

function Navbar(){

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
        let navigate = useNavigate();
        const dispatch = useDispatch();
        
        function goLogout(){
            dispatch(addToken(''));
    alert("Usuário deslogado")
    navigate('/login')
}
return(
    <>
        <AppBar position="static"  className="estilo cursor">
            <Toolbar className="cursor" variant="regular">
                <Box >
                    <Link to='/login' className="text-decorator-none">
                        <Typography variant="h6" color="inherit">
                            <img src="/logoprojeto.png" alt="logo" height="80" />
                        </Typography>
                    </Link>
                </Box>

                <Box display="flex" justifyContent="start">
                    <Box mx={3} display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h6" color="inherit" >
                             Home
                        </Typography>

                    </Box>
                    <Box mx={3} className="cursor">
                        <Typography variant="h6" color="inherit">
                            Postagens
                        </Typography>
                    </Box>
                    <Link to="/temas" className="text-decorator-none">
                        <Box mx={3} className='cursor'>
=======
function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();

    function goLogout() {
        setToken('')
        alert("Usuário deslogado")
        navigate('/login')
    }
    return (
        <>
            <AppBar position="static" className="estilo">
                <Toolbar  variant="regular">
                    <Box >
                        <Link to='/home' className="text-decorator-none">
>>>>>>> 80191534e4f57d8862a3f833dedd8131f0d45221
                            <Typography variant="h6" color="inherit">
                                <img src="https://imgur.com/St2ZEFX.png" alt="logo" height="80" />
                            </Typography>
                        </Link>
                    </Box>

                    <Box display="flex" className="cursor" >
                            <Box mx={3} className="cursor">
                        <Link to="/posts" className="text-decorator-none">
                                <Typography variant="h6" >
                                    Postagens
                                </Typography>
                        </Link>
                            </Box>
                            <Box mx={3} className='cursor'>
                        <Link to="/temas" className="text-decorator-none">
                                <Typography variant="h6" >
                                    Temas
                                </Typography>
                        </Link>
                            </Box>
                            <Box mx={3} className="cursor">
                        <Link to='/formularioTema' className="text-decorator-none">
                                <Typography variant="h6" color="inherit">
                                    Cadast. Temas
                                </Typography>
                        </Link>
                            </Box>
                        <Box mx={3} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Sobre Nós
                                </Typography>
                        </Box>
                        <Box mx={3} className="cursor">
                            <Link to='/lavanderias' className="text-decorator-none">
                                <Typography variant="h6" color="inherit">
                                    Lavanderias
                                </Typography>
                            </Link>
                        </Box>
                        <Box mx={3} className="cursor"> 
                            <Typography variant="h6" color="inherit">
                                Contatos
                            </Typography>
                        </Box>
                            <Box mx={3} className="cursor" onClick={goLogout}>
                        <Link to='/login' className="text-decorator-none">
                                <Typography variant="h6" color="inherit" >
                                    Sair
                                </Typography>
                        </Link>
                            </Box>

                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}
export default Navbar;
<<<<<<< HEAD

=======
>>>>>>> 80191534e4f57d8862a3f833dedd8131f0d45221
