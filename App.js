import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import { NativeRouter, Routes, Route } from 'react-router-native';

import Menu from './assets/Componentes/Menu';

import Cadastro from './assets/Paginas/Cadastro';
import Carrinho from './assets/Paginas/Carrinho';
import Produtos from './assets/Paginas/Produtos';

export default function App() {

    const banco = [
        { id: 1, nome: "DRY MARTINI", ingredientes: "Gin e Vermouth dry.", preco: "24.90" },
        { id: 2, nome: "CHATEAU", ingredientes: "Vodka, essência de amora, espumante e suco de limão. Taça de 760ml.", preco: "33.90" },
        { id: 3, nome: "HELEDA", ingredientes: "Tequila, limão, cerveja corona e sal", preco: "28.90" }
    ]

    const [ produtos, alteraProdutos ] = React.useState( banco );
    const [ carrinho, alteraCarrinho ] = React.useState( [] );

    return (
        <View>
            <NativeRouter>
                <Menu />

                <Routes>
                    <Route path="/" element={ <Carrinho carrinho={carrinho} /> } />
                    <Route path="/produtos" element={ <Produtos produtos={produtos} carrinho={carrinho} alteraCarrinho={alteraCarrinho} /> } />
                    <Route path="/cadastro" element={ <Cadastro produtos={produtos} alteraProdutos={alteraProdutos} /> } />
                </Routes>

            </NativeRouter>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
