import React, { ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';

import { message } from 'antd';
import BasicWrapComponent from '@/components/business/BasicWrapComponent';
import ImageShowAndUploadComponent from '@/components/common/ImageShowAndUploadComponent';

import { StoreType } from '@/store/store';
import { PersonalImageItemType } from '@/types/user';

import { toJS } from 'mobx';

import { MAX_IMAGE_COUNT } from '@/utils/constant';

import './style.scss';

export type IPersonalImageComponentPropType = Pick<StoreType, 'userStore'>;

@inject('userStore')
@observer
class PersonalImageComponent extends React.Component<
	IPersonalImageComponentPropType
> {
	handleRemove = (index: number, item: PersonalImageItemType) => {
		if (item.show) {
			message.warning('当前图片正在使用中！');
		} else {
			this.props.userStore.removePersonalImage(index);
		}
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
			<BasicWrapComponent
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
			</BasicWrapComponent>
		);
	}
}

export default (PersonalImageComponent as unknown) as ComponentClass;
