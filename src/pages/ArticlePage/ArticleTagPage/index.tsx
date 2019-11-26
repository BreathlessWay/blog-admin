import React, { Component, ComponentClass, Fragment } from 'react';

import { inject, observer } from 'mobx-react';

import { Empty, Row, Col, Icon, Input, Switch, Typography, Button } from 'antd';
import BasicWrapComponent from '@/components/business/BasicWrapComponent';
import Gap from '@/components/common/Gap';

import { RouteComponentProps } from 'react-router';
import { StoreType } from '@/store/store';
import { TagType } from '@/store/TagStore/tag';

import './style.scss';

const { Text } = Typography;

export type IArticleTagPagePropType = Pick<
	StoreType,
	'userStore' | 'tagStore'
> &
	RouteComponentProps;

@inject((allStore: StoreType) => ({
	userStore: allStore.userStore,
	tagStore: allStore.tagStore,
}))
@observer
class ArticleTagPage extends Component<IArticleTagPagePropType> {
	handleEdit = () => {
		return new Promise((resolve, reject) => {
			this.props.tagStore.filterEmptyTag();
			resolve();
		});
	};

	handleChangeSwitch = (index: number) => () => {
		this.props.tagStore.changeTagShow(index);
	};

	handleDelete = (index: number) => () => {
		this.props.tagStore.removeTag(index);
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
		tag: TagType;
		index: number;
		isEditing: boolean;
	}) => {
		return (
			<Row type="flex" align="middle">
				{isEditing && (
					<Col className="article-tag_item">
						<Icon type="delete" onClick={this.handleDelete(index)} />
					</Col>
				)}
				<Col className="article-tag_item">
					<Input
						disabled={!isEditing}
						placeholder="标签名"
						maxLength={6}
						value={tag.name}
						allowClear={true}
						onChange={e =>
							this.handleChangeInput({ value: e.target.value, index })
						}
					/>
				</Col>
				<Col className="article-tag_item">
					<Switch
						disabled={!isEditing}
						checked={tag.show}
						onChange={this.handleChangeSwitch(index)}
					/>
				</Col>
				<Col className="article-tag_item">
					<Text>是否显示</Text>
				</Col>
			</Row>
		);
	};

	renderList = (isEditing: boolean) => {
		const { tags } = this.props.tagStore;
		return (
			<Row type="flex">
				{tags.map((tag, index) => (
					<Fragment key={index}>
						<Col>{this.renderItem({ tag, index, isEditing })}</Col>
						<Gap size="lg" />
					</Fragment>
				))}
				{isEditing && (
					<Col>
						<Button type="primary" icon="plus" onClick={this.handleAddTag}>
							新增个人技能
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
				title="文章标签管理"
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
