import React, { Component, ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';

import BasicWrapComponent from '@/components/business/BasicWrapComponent';

import UserStore from '@/store/UserStore';

import './style.scss';

export type IRewardComponentPropType = {
	userStore: UserStore;
};

@inject('userStore')
@observer
class RewardComponent extends Component<IRewardComponentPropType> {
	handleEdit = () => {
		return new Promise((resolve, reject) => resolve());
	};
	render() {
		return (
			<BasicWrapComponent title="打赏" needEdit={false}>
				<div>1</div>
			</BasicWrapComponent>
		);
	}
}

export default (RewardComponent as unknown) as ComponentClass;
