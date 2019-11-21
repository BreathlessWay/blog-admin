import React, { ComponentClass } from 'react';
import { inject, observer } from 'mobx-react';

import CommonWrapComponent from '@/components/common/CommonWrapComponent';
import ImageShowAndUploadComponent from '@/components/common/ImageShowAndUploadComponent';

import UserStore from '@/store/UserStore';

import { toJS } from 'mobx';

import './style.scss';

export type IPersonalImageComponentPropType = {
	userStore: UserStore;
};

@inject('userStore')
@observer
class PersonalImageComponent extends React.Component<
	IPersonalImageComponentPropType
> {
	handleRemove = (index: number) => {
		this.props.userStore.removePersonalImage(index);
	};

	handleSetAsDefault = (index: number) => {
		this.props.userStore.setAsDefaultPersonalImage(index);
	};

	handleUploadImage = (url: string) => {
		this.props.userStore.addPersonalImage(url);
	};

	get fileList() {
		return toJS(this.props.userStore.userDetail.personalImage);
	}

	render() {
		return (
			<CommonWrapComponent title="个人形象" needEdit={false}>
				<ImageShowAndUploadComponent
					onRemove={this.handleRemove}
					imageList={this.fileList}
					onSetDefault={this.handleSetAsDefault}
					onUploadImage={this.handleUploadImage}
				/>
			</CommonWrapComponent>
		);
	}
}

export default (PersonalImageComponent as unknown) as ComponentClass;
