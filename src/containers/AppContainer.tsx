import * as React from 'react';
import {GoodsenseLogoComponent} from 'src/components/GoodsenseLogoComponent';
import {GoodsenseDescriptionComponent} from 'src/components/GoodsenseDescriptionComponent';

export class AppContainer extends React.Component<any, any> {

	render() {
		return (
			<div>
				<GoodsenseLogoComponent></GoodsenseLogoComponent>
				<GoodsenseDescriptionComponent></GoodsenseDescriptionComponent>
			</div>
		);
	}

}