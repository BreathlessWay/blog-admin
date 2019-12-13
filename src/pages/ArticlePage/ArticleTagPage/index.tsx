import React, { Component, ComponentClass, Fragment } from 'react';

import { inject, observer } from 'mobx-react';

import {
	Empty,
	Row,
	Col,
	Icon,
	Input,
	Switch,
	Typography,
	Button,
	message,
	Modal,
} from 'antd';
import BasicWrapComponent from '@/components/business/BasicWrapComponent';
import Gap from '@/components/common/Gap';

import { RouteComponentProps } from 'react-router';
import { StoreType } from '@/store/store';
import { TagItemType } from '@/types/tag';

import { MAX_LENGTH_SM } from '@/utils/constant';

import './style.scss';

const { Text } = Typography;
const { confirm } = Modal;

export type ArticleTagPagePropType = Pick<
	StoreType,
	'userStore' | 'tagStore' | 'homepageStore'
> &
	RouteComponentProps;

@inject((allStore: StoreType) => ({
	userStore: allStore.userStore,
	tagStore: allStore.tagStore,
	homepageStore: allStore.homepageStore,
}))
@observer
class ArticleTagPage extends Component<ArticleTagPagePropType> {
	handleEdit = () => {
		return new Promise((resolve, reject) => {
			const { hasSameNameTag, filterEmptyTag } = this.props.tagStore;
			filterEmptyTag();
			if (hasSameNameTag) {
				message.error('存在相同名称的标签，请确认后重试');
				reject();
			}
			resolve();
		});
	};

	handleChangeSwitch = (index: number) => () => {
		this.props.tagStore.changeTagShow(index);
	};

	handleDelete = ({
		tag,
		index,
	}: {
		tag: TagItemType;
		index: number;
	}) => () => {
		const _this = this;
		const { articleAlias } = _this.props.homepageStore;

		if (tag.count) {
			message.error(`当前标签下存在${articleAlias}，不可删除`);
			return;
		}
		confirm({
			title: '是否确认删除该标签',
			okType: 'danger',
			onOk() {
				_this.props.tagStore.removeTag(index);
			},
			onCancel() {
				console.log('Cancel');
			},
		});
	};

	handleChangeInput = ({ value, index }: { value: string; index: number }) => {
		this.props.tagStore.changeTagName({ name: value, index });
	};

	handleAddTag = () => {
		this.props.tagStore.addTag();
	};

	renderItem = ({
		tag,
		index,
		isEditing,
	}: {
		tag: TagItemType;
		index: number;
		isEditing: boolean;
	}) => {
		const { articleAlias } = this.props.homepageStore;

		return (
			<Row type="flex" align="middle">
				{isEditing && (
					<Col className="article-tag_item">
						<Icon type="delete" onClick={this.handleDelete({ tag, index })} />
					</Col>
				)}
				<Col className="article-tag_item">
					<Input
						disabled={!isEditing}
						placeholder="标签名"
						maxLength={MAX_LENGTH_SM}
						value={tag.name}
						allowClear={true}
						onChange={e =>
							this.handleChangeInput({ value: e.target.value, index })
						}
					/>
				</Col>
				<Col className="article-tag_item">
					<Text>是否显示</Text>
				</Col>
				<Col className="article-tag_item">
					<Switch
						disabled={!isEditing}
						checked={tag.show}
						onChange={this.handleChangeSwitch(index)}
					/>
				</Col>
				<Col className="article-tag_item">
					<Text type="warning">
						当前标签下有{tag.count}篇{articleAlias}
					</Text>
				</Col>
			</Row>
		);
	};

	renderList = (isEditing: boolean) => {
		const { tags } = this.props.tagStore;
		return (
			<Row type="flex">
				{tags.map((tag, index) => (
					<Fragment key={tag.objectId || `${index}`}>
						<Col>{this.renderItem({ tag, index, isEditing })}</Col>
						<Gap size="lg" />
					</Fragment>
				))}
				{isEditing && (
					<Col>
						<Button type="primary" icon="plus" onClick={this.handleAddTag}>
							新增标签
						</Button>
					</Col>
				)}
			</Row>
		);
	};

	render() {
		const { hasTag } = this.props.tagStore;

		return (
			<BasicWrapComponent
				title={`标签管理`}
				note={`标签名最长${MAX_LENGTH_SM}个字`}
				handleEdit={this.handleEdit}
				render={isEditing =>
					hasTag || isEditing ? (
						this.renderList(isEditing)
					) : (
						<Empty description="暂无标签" />
					)
				}
			/>
		);
	}
}

export default (ArticleTagPage as unknown) as ComponentClass;
