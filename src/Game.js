import React, { Component } from 'react';

import './App.css';
import {Sprite} from './common/Sprite';
import sheet from './res/sheet.png';


class Game extends Component {
	render() {
		return (
			<div className="App">
			{Sprite({
				filename: sheet,
				x : 1,
				y : 1,
				width : 307,
				height : 193
			})}

			</div>
			);
	}
}

export default Game;