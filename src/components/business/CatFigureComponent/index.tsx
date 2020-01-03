import React, { Component, ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';

import FigureEditComponent from '@/components/common/FigureEditComponent';

import { StoreType } from '@/store/store';

import {
	changeCatFigure,
	createCatFigure,
	deleteCatFigure,
	getCatFigure,
} from '@/apis/cat';

import { toJS } from 'mobx';
import { message, notification } from 'antd';
import { ImageItemType } from '@/types/image';

export type CatFigureComponentPropType = Pick<
	StoreType,
	'catStore' | 'homepageStore'
>;

@inject((allStore: StoreType) => ({
	catStore: allStore.catStore,
	homepageStore: allStore.homepageStore,
}))
@observer
class CatFigureComponent extends Component<CatFigureComponentPropType> {
	componentDidMount(): void {
		this.getFigureList();
	}

	getFigureList = async () => {
		const hide = message.loading('加载中...', 0);
		try {
			const { catFigure } = this.props.catStore;
			const res = await getCatFigure();

			if (res.data?.success) {
				catFigure.setImageList(res.data?.data?.list ?? []);
			}
		} catch (e) {
		} finally {
			hide();
		}
	};

	handleRemoveFigure = async (item: ImageItemType) => {
		try {
			const { catAlias } = this.props.homepageStore;
			const res = await deleteCatFigure(item._id);
			if (res.data?.success) {
				const { removeImage } = this.props.catStore.catFigure;
				removeImage(item);
			} else {
				notification['error']({
					message: `删除${catAlias}卡通图失败！`,
					description: res.data?.msg,
				});
			}
		} catch (e) {}
	};

	handleSetShowFigure = async (item: ImageItemType) => {
		if (item.show) {
			return;
		}
		try {
			const { catAlias } = this.props.homepageStore;
			const res = await changeCatFigure({ ...item, ...{ show: true } });
			if (res.data?.success) {
				const { setShowImage } = this.props.catStore.catFigure;
				setShowImage(item);
			} else {
				notification['error']({
					message: `修改${catAlias}卡通图失败！`,
					description: res.data?.msg,
				});
			}
		} catch (e) {}
	};

	handleAddFigure = async (item: ImageItemType) => {
		try {
			const { catAlias } = this.props.homepageStore;
			const res = await createCatFigure(item);
			if (res.data?.success) {
				await this.getFigureList();
			} else {
				notification['error']({
					message: `添加${catAlias}卡通图失败！`,
					description: res.data?.msg,
				});
			}
		} catch (e) {}
	};

	render() {
		const { imageList = [] } = this.props.catStore.catFigure;

		const { catAlias } = this.props.homepageStore;

		return (
			<FigureEditComponent
				title={`${catAlias}卡通图`}
				imageList={toJS(imageList)}
				onRemoveFigure={this.handleRemoveFigure}
				onSetShowFigure={this.handleSetShowFigure}
				onAddFigure={this.handleAddFigure}
			/>
		);
	}
}

export default (CatFigureComponent as unknown) as ComponentClass;
