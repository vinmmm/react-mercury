import React, { PropTypes } from 'react';
import sheet from '../res/sheet.png'

export const Sprite = ({ filename, x, y, width, height }) => {
	if (!filename) {
		return null;
	}


x *= 2
y *= 2
width *= 2
height *= 2

const style = {
	backgroundImage: `url(${filename})`,
    backgroundPosition: `${x * (-1)}px ${y * (-1)}px`,
	width,
	height,
};

return <div style={style} data-x={x} data-y={y} data-w={width} data-h={height} />;

};


export const bg = Sprite({
  filename: sheet,
  x: 0,
  y: 0,
  width: 138,
  height: 114
})

export const fg = Sprite({
  filename: sheet,
  x: 138,
  y: 0,
  width: 111,
  height: 56
})

export const car0 = Sprite({
  filename: sheet,
  x : 156,
  y : 115,
  width : 17,
  height : 12
})


export const bg_h = bg.props['data-h']
export const bg_w = bg.props['data-w']
export const fg_h = fg.props['data-h']
export const fg_w = fg.props['data-w']
export const car_h = car0.props['data-h'] //all the bird maintain same height
export const car_w = car0.props['data-w'] //all the bird maintain same width