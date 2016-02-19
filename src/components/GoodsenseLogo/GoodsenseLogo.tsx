import * as React from 'react';
import './goodsense-logo.scss';

interface IProps {
	width: string;
}

export class GoodsenseLogo extends React.Component<IProps, any> {
	render() {
		const img = require<string>('src/assets/Goodsense_Option1.svg');
		return <img src={img} height="600px" alt="Goodsense Logo" />;
	}
}