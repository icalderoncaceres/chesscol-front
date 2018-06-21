import React from 'react';


class Tablero extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="chess2DBox" style={{width: 512, height: 512}}>
                <table id="flatChessboard" style={{width: 500, height: 500, marginBottom: 6, marginTop: 6}}>
                    <tbody>
                        <tr>
                            <td className="boardAngle"></td>
                            <th className="horizCoords">a</th>
                            <th className="horizCoords">b</th
                            ><th className="horizCoords">c</th>
                            <th className="horizCoords">d</th
                            ><th className="horizCoords">e</th
                            ><th className="horizCoords">f</th>
                            <th className="horizCoords">g</th>
                            <th className="horizCoords">h</th>
                            <td className="boardAngle"></td>
                        </tr>
                        <tr>
                            <th className="vertCoords">8</th>
                            <td className="whiteSquares" id="flatSq91">
                                <span>♜</span>
                            </td>
                            <td className="blackSquares" id="flatSq92">
                                <span>♞</span>
                            </td>
                            <td className="whiteSquares" id="flatSq93">
                                <span>♝</span>
                            </td>
                            <td className="blackSquares" id="flatSq94">
                                <span>♛</span>
                            </td>
                            <td className="whiteSquares" id="flatSq95">
                                <span>♚</span>
                            </td>
                            <td className="blackSquares" id="flatSq96">
                                <span>♝</span>
                            </td>
                            <td className="whiteSquares" id="flatSq97">
                                <span>♞</span>
                            </td>
                            <td className="blackSquares" id="flatSq98">
                                <span>♜</span>
                            </td>
                            <th className="vertCoords">8</th>
                        </tr>
                        <tr>
                            <th className="vertCoords">7</th>
                            <td className="blackSquares" id="flatSq81">
                                <span>♟</span>
                            </td>
                            <td className="whiteSquares" id="flatSq82">
                                <span>♟</span>
                            </td>
                            <td className="blackSquares" id="flatSq83">
                                <span>♟</span>
                            </td>
                            <td className="whiteSquares" id="flatSq84">
                                <span>♟</span>
                            </td>
                            <td className="blackSquares" id="flatSq85">
                                <span>♟</span>
                            </td>
                            <td className="whiteSquares" id="flatSq86">
                                <span>♟</span>
                            </td>
                            <td className="blackSquares" id="flatSq87">
                                <span>♟</span>
                            </td>
                            <td className="whiteSquares" id="flatSq88">
                                <span>♟</span>
                            </td>
                            <th className="vertCoords">7</th>
                        </tr>
                        <tr>
                            <th className="vertCoords">6</th>
                            <td className="whiteSquares" id="flatSq71"></td>
                            <td className="blackSquares" id="flatSq72"></td>
                            <td className="whiteSquares" id="flatSq73"></td>
                            <td className="blackSquares" id="flatSq74"></td>
                            <td className="whiteSquares" id="flatSq75"></td>
                            <td className="blackSquares" id="flatSq76"></td>
                            <td className="whiteSquares" id="flatSq77"></td>
                            <td className="blackSquares" id="flatSq78"></td>
                            <th className="vertCoords">6</th>
                        </tr>
                        <tr>
                            <th className="vertCoords">5</th>
                            <td className="blackSquares" id="flatSq61"></td>
                            <td className="whiteSquares" id="flatSq62"></td>
                            <td className="blackSquares" id="flatSq63"></td>
                            <td className="whiteSquares" id="flatSq64"></td>
                            <td className="blackSquares" id="flatSq65"></td>
                            <td className="whiteSquares" id="flatSq66"></td>
                            <td className="blackSquares" id="flatSq67"></td>
                            <td className="whiteSquares" id="flatSq68"></td>
                            <th className="vertCoords">5</th>
                        </tr>
                        <tr>
                            <th className="vertCoords">4</th>
                            <td className="whiteSquares" id="flatSq51"></td>
                            <td className="blackSquares" id="flatSq52"></td>
                            <td className="whiteSquares" id="flatSq53"></td>
                            <td className="blackSquares" id="flatSq54"></td>
                            <td className="whiteSquares" id="flatSq55"></td>
                            <td className="blackSquares" id="flatSq56"></td>
                            <td className="whiteSquares" id="flatSq57"></td>
                            <td className="blackSquares" id="flatSq58"></td>
                            <th className="vertCoords">4</th>
                        </tr>
                        <tr>
                            <th className="vertCoords">3</th>
                            <td className="blackSquares" id="flatSq41"></td>
                            <td className="whiteSquares" id="flatSq42"></td>
                            <td className="blackSquares" id="flatSq43"></td>
                            <td className="whiteSquares" id="flatSq44"></td>
                            <td className="blackSquares" id="flatSq45"></td>
                            <td className="whiteSquares" id="flatSq46"></td>
                            <td className="blackSquares" id="flatSq47"></td>
                            <td className="whiteSquares" id="flatSq48"></td>
                            <th className="vertCoords">3</th>
                        </tr>
                        <tr>
                            <th className="vertCoords">2</th>
                            <td className="whiteSquares" id="flatSq31">
                                <span>♙</span>
                            </td>
                            <td className="blackSquares" id="flatSq32">
                                <span>♙</span>
                            </td>
                            <td className="whiteSquares" id="flatSq33">
                                <span>♙</span>
                            </td>
                            <td className="blackSquares" id="flatSq34">
                                <span>♙</span>
                            </td>
                            <td className="whiteSquares" id="flatSq35">
                                <span>♙</span>
                            </td>
                            <td className="blackSquares" id="flatSq36">
                                <span>♙</span>
                            </td>
                            <td className="whiteSquares" id="flatSq37">
                                <span>♙</span>
                            </td>
                            <td className="blackSquares" id="flatSq38">
                                <span>♙</span>
                            </td>
                            <th className="vertCoords">2</th>
                        </tr>
                        <tr>
                            <th className="vertCoords">1</th>
                            <td className="blackSquares" id="flatSq21">
                                <span>♖</span>
                            </td>
                            <td className="whiteSquares" id="flatSq22">
                                <span>♘</span>
                            </td>
                            <td className="blackSquares" id="flatSq23">
                                <span>♗</span>
                            </td>
                            <td className="whiteSquares" id="flatSq24">
                                <span>♕</span>
                            </td>
                            <td className="blackSquares" id="flatSq25">
                                <span>♔</span>
                            </td>
                            <td className="whiteSquares" id="flatSq26">
                                <span>♗</span>
                            </td>
                            <td className="blackSquares" id="flatSq27">
                                <span>♘</span>
                            </td>
                            <td className="whiteSquares" id="flatSq28">
                                <span>♖</span>
                            </td>
                            <th className="vertCoords">1</th>
                        </tr>
                        <tr>
                            <td className="boardAngle"></td>
                            <th className="horizCoords">a</th>
                            <th className="horizCoords">b</th>
                            <th className="horizCoords">c</th>
                            <th className="horizCoords">d</th>
                            <th className="horizCoords">e</th>
                            <th className="horizCoords">f</th>
                            <th className="horizCoords">g</th>
                            <th className="horizCoords">h</th>
                            <td className="boardAngle"></td>
                        </tr>
                    </tbody>
                </table>
            </div>        );
    }
}

export default Tablero;