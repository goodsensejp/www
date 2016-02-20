import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {AppContainer} from 'src/containers/AppContainer/AppContainer';
import './main.css';

var _:any = require('lodash');
console.log(_.last([1,2,4]));

ReactDOM.render(
	<AppContainer></AppContainer>,
	document.getElementById('goodsense')
);