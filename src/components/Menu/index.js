import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import { LogoImage, MenuWrapper} from './style.js'
import Buttom from '../Button';
//import './Menu.css';
//import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <MenuWrapper className="Menu">
            <Link to="/">
                <LogoImage className="Logo" src={logo} alt="LucasFlix logo"/>
            </Link>

            <Buttom as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Buttom>
        </MenuWrapper>
    );
}

export default Menu;