import React, { ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';
import CommonWrapComponent from '@/components/common/CommonWrapComponent';

import UserStore from '@/store/UserStore';
import ImageShowAndUploadComponent from '@/components/common/ImageShowAndUploadComponent';
import { toJS } from 'mobx';

export type IMeLikeImageComponentPropType = {
	userStore: UserStore;
};

@inject('userStore')
@observer
class MeLikeImageComponent extends React.Component<
	IMeLikeImageComponentPropType
> {
	handleRemove = (index: number) => {};

	handleSetAsDefault = (index: number) => {};

	handleUploadImage = (url: string) => {};

	get likeImage() {
		return toJS(this.props.userStore.userDetail.likeImage);
	}

	render() {
		return (
			<CommonWrapComponent title="个人形象" needEdit={false}>
				<ImageShowAndUploadComponent
					onRemove={this.handleRemove}
					imageList={this.likeImage}
					onSetDefault={this.handleSetAsDefault}
					onUploadImage={this.handleUploadImage}
				/>
			</CommonWrapComponent>
		);
	}
}

export default (MeLikeImageComponent as unknown) as ComponentClass;
