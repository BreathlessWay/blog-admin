import React, { ComponentClass } from 'react';
import { inject, observer } from 'mobx-react';

import CommonWrapComponent from '@/components/common/CommonWrapComponent';
import ImageShowAndUploadComponent from '@/components/common/ImageShowAndUploadComponent';

import UserStore from '@/store/UserStore';

import { toJS } from 'mobx';

import { MAX_IMAGE_COUNT } from '@/utils/constant';

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

	handleSetShow = (index: number) => {
		this.props.userStore.setShowPersonalImage(index);
	};

	handleUploadImage = (url: string) => {
		this.props.userStore.addPersonalImage(url);
	};

	get fileList() {
		return toJS(this.props.userStore.userDetail.personalImage);
	}

	render() {
		const { personalImageLength } = this.props.userStore;

		return (
			<CommonWrapComponent
				title="个人形象"
				needEdit={false}
				note={`最多上传${MAX_IMAGE_COUNT}张`}>
				<ImageShowAndUploadComponent
					disabled={personalImageLength === MAX_IMAGE_COUNT}
					onRemove={this.handleRemove}
					imageList={this.fileList}
					onSetShow={this.handleSetShow}
					onUploadImage={this.handleUploadImage}
				/>
			</CommonWrapComponent>
		);
	}
}

export default (PersonalImageComponent as unknown) as ComponentClass;
