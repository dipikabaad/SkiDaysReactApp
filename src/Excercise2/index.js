//const {createElement } = React
//const { render } = ReactDOM
import React from 'react'
import {render} from 'react-dom'
import {hello, goodbye} from './lib'

/*const style = {
	backgroundColor: 'orange',
	color: 'white',
	fontFamily: 'verdana'	
}*/

/*const title = createElement(
'h1',
{id: 'title', className: 'header', style: style},
'Hello World'
)*/

render( <div>{hello}{goodbye}</div>,
	document.getElementById('react-container')
)