import React, { useEffect } from 'react';
import { Button, Grid,Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './Home.css';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';

import ModalPostagem from '../../components/postagens/moldalPostagem/ModalPostagem';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

import { Link } from 'react-router-dom';


import { Link } from 'react-router-dom';
import { TokenState } from '../../store/tokens/tokensReducer';


function Home() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            navigate("/login")

        }
    }, [token])

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo' >  <img src="https://imgur.com/OwJYXzo.png" alt="logo" height="250" /></Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>A sua lavanderia em qualquer lugar! </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>

                        <Link to="/posts">
                            <Button variant="outlined" className='botao2'> Ver Lavanderias</Button>
                        </Link>
                        

                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://media.giphy.com/media/StWs9iYidDmIEjWvmh/giphy.gif" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}
export default Home;