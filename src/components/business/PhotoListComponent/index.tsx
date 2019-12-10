import React, { Component, ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';

import { Empty, Button, Icon } from 'antd';
import BasicWrapComponent from '@/components/business/BasicWrapComponent';
import ImageLoadComponent from '@/components/common/ImageLoadComponent';
import ImageUploadComponent from '@/components/common/ImageUploadComponent';
import ImageLazyLoadComponent from '@/components/common/ImageLazyLoadComponent';

import { StoreType } from '@/store/store';
import { ImageListType } from '@/types/image';
import { PhotoListType } from '@/types/photo';

import { MAX_IMAGE_COUNT, UPLOAD_IMAGE_TYPE } from '@/utils/constant';

import './style.scss';

const elementId = 'list-view';

const imageWidth = 300;

export type PhotoListComponentPropType = Pick<StoreType, 'photoListStore'>;

@inject('photoListStore')
@observer
class PhotoListComponent extends Component<PhotoListComponentPropType> {
	componentDidMount(): void {
		this.waterFall();
	}

	componentDidUpdate(): void {
		this.waterFall();
	}

	waterFall = () => {
		const oWarp = document.getElementById(elementId);
		const { column, setColumn } = this.props.photoListStore;
		if (oWarp) {
			const column = Math.floor(
				oWarp.getBoundingClientRect().width / (imageWidth + 20),
			);
			// 要算上scroll bar的宽度6px
			const _width = column * (imageWidth + 26);
			oWarp.style.width = _width + 'px';
			setColumn(column);
		}
	};

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
					<ImageLazyLoadComponent
						id={elementId}
						listClassName="picture-list"
						itemClassName="picture-list_item"
						imageList={list}
						render={({ item, observer }) => (
							<section className="picture-list_image">
								<ImageLoadComponent
									observer={observer}
									url={item.url}
									title={item.title}
									width={imageWidth}
								/>
							</section>
						)}
					/>
				)}
			</BasicWrapComponent>
		);
	}
}

export default (PhotoListComponent as unknown) as ComponentClass;
