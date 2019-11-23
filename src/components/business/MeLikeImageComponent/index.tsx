import React, { ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';

import CommonWrapComponent from '@/components/business/CommonWrapComponent';
import ImageShowAndUploadComponent from '@/components/common/ImageShowAndUploadComponent';

import UserStore from '@/store/UserStore';

import { toJS } from 'mobx';

import { MAX_IMAGE_COUNT } from '@/utils/constant';
import { message } from 'antd';

export type IMeLikeImageComponentPropType = {
	userStore: UserStore;
};

@inject('userStore')
@observer
class MeLikeImageComponent extends React.Component<
	IMeLikeImageComponentPropType
> {
	handleRemove = (index: number, item: { url: string; show: boolean }) => {
		if (item.show) {
			message.warning('当前图片正在使用中！');
		} else {
			this.props.userStore.removeLikeImage(index);
		}
	};

	handleSetShow = (index: number) => {
		this.props.userStore.setShowLikeImage(index);
	};

	handleUploadImage = (url: string) => {
		this.props.userStore.addLikeImage(url);
	};

	get likeImage() {
		return toJS(this.props.userStore.userDetail.likeImage);
	}

	render() {
		const { likeImageLength } = this.props.userStore;
		return (
			<CommonWrapComponent
				title="爱好"
				needEdit={false}
				note={`最多上传${MAX_IMAGE_COUNT}张`}>
				<ImageShowAndUploadComponent
					disabled={likeImageLength === MAX_IMAGE_COUNT}
					onRemove={this.handleRemove}
					imageList={this.likeImage}
					onSetShow={this.handleSetShow}
					onUploadImage={this.handleUploadImage}
				/>
			</CommonWrapComponent>
		);
	}
}

export default (MeLikeImageComponent as unknown) as ComponentClass;
