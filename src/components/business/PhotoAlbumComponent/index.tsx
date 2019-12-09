import React, { ChangeEvent, Component, ComponentClass } from 'react';

import { Button, Modal, Input, Switch, Row, Col } from 'antd';
import BasicWrapComponent from '@/components/business/BasicWrapComponent';
import Gap from '@/components/common/Gap';

import { StoreType } from '@/store/store';
import { AlbumItemType } from '@/types/album';

import { MAX_LENGTH_SM } from '@/utils/constant';

export type PhotoAlbumComponentPropType = Pick<StoreType, 'photoAlbumStore'>;

export type PhotoAlbumComponentStateType = Readonly<{
	visible: boolean;
	confirmLoading: boolean;
	editItem: Partial<AlbumItemType>;
}>;

class PhotoAlbumComponent extends Component<
	PhotoAlbumComponentPropType,
	PhotoAlbumComponentStateType
> {
	readonly state: PhotoAlbumComponentStateType = {
		visible: false,
		confirmLoading: false,
		editItem: {
			title: '',
			show: true,
		},
	};

	handleAddAlbum = () => {
		this.setState({
			visible: true,
			editItem: {
				title: '',
				show: true,
			},
		});
	};

	handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
		const { editItem } = this.state;
		editItem.title = e.target.value;
		this.setState({
			editItem,
		});
	};

	handleChangeShow = () => {
		const { editItem } = this.state;
		editItem.show = !editItem.show;
		this.setState({
			editItem,
		});
	};

	render() {
		const {
			visible,
			confirmLoading,
			editItem: { title, show },
		} = this.state;

		return (
			<BasicWrapComponent
				needEdit={false}
				title="相册管理"
				note={`相册标题最长${MAX_LENGTH_SM}个字`}
				operation={
					<Button type="link" onClick={this.handleAddAlbum}>
						新建相册
					</Button>
				}>
				pp
				<Modal
					maskClosable={false}
					confirmLoading={confirmLoading}
					keyboard={false}
					title="编辑相册"
					visible={visible}>
					<Row>
						<Col>
							<label htmlFor="show">显示相册：</label>
							<Switch checked={show} onChange={this.handleChangeShow} />
						</Col>
						<Gap size="lg" />
						<Col>
							<label htmlFor="title">相册标题：</label>
							<Input
								style={{ width: '60%' }}
								id="title"
								value={title}
								placeholder="请输入相册标题"
								allowClear={true}
								maxLength={MAX_LENGTH_SM}
								onChange={this.handleChangeTitle}
							/>
						</Col>
					</Row>
				</Modal>
			</BasicWrapComponent>
		);
	}
}

export default (PhotoAlbumComponent as unknown) as ComponentClass;
