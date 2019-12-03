import React, { Component, ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';

import { Icon } from 'antd';
import BasicWrapComponent from '@/components/business/BasicWrapComponent';
import ImageCardComponent from '@/components/common/ImageCardComponent';
import ImageShowAndUploadComponent from '@/components/common/ImageShowAndUploadComponent';

import { StoreType } from '@/store/store';

import { MAX_IMAGE_COUNT } from '@/utils/constant';
import { FigureItemType } from '../../../types/figure';

const iconStyle = {
	fontSize: '24px',
};

export type ICatPictureListComponentPropType = Pick<
	StoreType,
	'catStore' | 'homepageStore'
>;

@inject((allStore: StoreType) => ({
	catStore: allStore.catStore,
	homepageStore: allStore.homepageStore,
}))
@observer
class CatPictureListComponent extends Component<
	ICatPictureListComponentPropType
> {
	onAddCatPicture = () => {};

	handlePreview = (index: number) => () => {};

	handleRemove = (index: number, item: FigureItemType) => () => {};

	handleSetShowFigure = (index: number) => () => {};

	render() {
		const { list } = this.props.catStore;

		const { catAlias } = this.props.homepageStore;

		return (
			<BasicWrapComponent
				needEdit={false}
				title={`${catAlias}图片`}
				note={`一次最多上传${MAX_IMAGE_COUNT}张照片`}>
				<ImageShowAndUploadComponent
					multiple={true}
					imageList={list}
					onUploadImage={this.onAddCatPicture}
					render={({ item, index }) => (
						<ImageCardComponent
							width={360}
							height={300}
							title={item.title}
							intro={item.intro}
							url={item.url}
							actions={[
								<Icon
									type="eye"
									style={iconStyle}
									onClick={this.handlePreview(index)}
								/>,
								<Icon
									type="delete"
									style={iconStyle}
									onClick={this.handleRemove(index, item)}
								/>,
								<Icon
									type="check-circle"
									style={{
										...iconStyle,
										...{ color: item.show ? '#1890ff' : '' },
									}}
									onClick={this.handleSetShowFigure(index)}
								/>,
							]}
						/>
					)}
				/>
			</BasicWrapComponent>
		);
	}
}

export default (CatPictureListComponent as unknown) as ComponentClass;
