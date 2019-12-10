import React, { Component, ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';

import { Empty, Button, Icon } from 'antd';
import BasicWrapComponent from '@/components/business/BasicWrapComponent';
import ImageLazyLoadComponent from '@/components/common/ImageLazyLoadComponent';
import ImageUploadComponent from '@/components/common/ImageUploadComponent';

import { StoreType } from '@/store/store';
import { ImageListType } from '@/types/image';
import { PhotoListType } from '@/types/photo';

import { MAX_IMAGE_COUNT, UPLOAD_IMAGE_TYPE } from '@/utils/constant';

export type PhotoListComponentPropType = Pick<StoreType, 'photoListStore'>;

@inject('photoListStore')
@observer
class PhotoListComponent extends Component<PhotoListComponentPropType> {
	handleUploadImage = (item: ImageListType) => {
		const { addList, hasNext } = this.props.photoListStore;
		if (hasNext) {
		} else {
			addList(item as PhotoListType);
		}
	};

	render() {
		const { isEmpty, list } = this.props.photoListStore;

		return (
			<BasicWrapComponent
				title={'相册名'}
				note={`一次最多上传${MAX_IMAGE_COUNT}张图片，图片需小于500k`}
				operation={
					<ImageUploadComponent
						onUploadImage={this.handleUploadImage}
						multiple={true}
						disabled={false}
						accept={UPLOAD_IMAGE_TYPE}
						showUploadList={false}>
						<Button type="link">
							<Icon type="upload" />
							上传图片
						</Button>
					</ImageUploadComponent>
				}>
				{isEmpty ? (
					<Empty description="暂无图片" />
				) : (
					<ul>
						<li>
							{list.map(item => (
								<ImageLazyLoadComponent
									url={item.url}
									title={item.title}
									key={item.objectId}
								/>
							))}
						</li>
					</ul>
				)}
			</BasicWrapComponent>
		);
	}
}

export default (PhotoListComponent as unknown) as ComponentClass;
