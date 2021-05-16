import React from 'react';
import * as S from './styles';
import logo from '../../assets/library.png';
import InputSearch from '../InputSearch';

function Header() {
    return (
      <S.Container>
        <S.LeftSide>
          <img src={logo} alt="logo" />
        </S.LeftSide>
        
        <S.RightSide>
          <InputSearch txtPlaceholder={'Buscar por autores e titulos'}/>
          <a href="#">Autores</a>
          <span className="dividir"/>
          <a href="#">Livros</a>
        </S.RightSide>
      </S.Container>
    );
  }
  
  export default Header;