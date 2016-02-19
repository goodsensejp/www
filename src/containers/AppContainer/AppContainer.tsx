import * as React from 'react';
import {GoodsenseLogo} from 'src/components/GoodsenseLogo/GoodsenseLogo';
import {GoodsenseDescription} from 'src/components/GoodsenseDescription/GoodsenseDescription';
import './app-container.scss';

export class AppContainer extends React.Component<any, any> {

	render() {
		return (
			<div className="app-container">
				<div className="app-container__item1">
					<GoodsenseLogo width="600px"></GoodsenseLogo>
				</div>
			</div>
		);
	}
}