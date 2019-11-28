import React, { ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';

import { message } from 'antd';
import BasicWrapComponent from '@/components/business/BasicWrapComponent';
import ImageShowAndUploadComponent from '@/components/common/ImageShowAndUploadComponent';

import { StoreType } from '@/store/store';
import { LikeImageItemType } from '@/types/user';

import { toJS } from 'mobx';

import { MAX_IMAGE_COUNT } from '@/utils/constant';

export type IMeLikeImageComponentPropType = Pick<StoreType, 'userStore'>;

@inject('userStore')
@observer
class MeLikeImageComponent extends React.Component<
	IMeLikeImageComponentPropType
> {
	handleRemove = (index: number, item: LikeImageItemType) => {
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
			<BasicWrapComponent
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
			</BasicWrapComponent>
		);
	}
}

export default (MeLikeImageComponent as unknown) as ComponentClass;
