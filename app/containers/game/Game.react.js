import React from 'react';
import Tablero from '../../components/tablero/Tablero.react';

class Game extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Tablero></Tablero>
        );
    }
}

export default Game;