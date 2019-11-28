import React, { ChangeEvent, Component, ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';

import { Col, Input, Radio, Row, Select, Typography } from 'antd';
import Gap from '@/components/common/Gap';

import { RadioChangeEvent } from 'antd/lib/radio/interface';
import { StoreType } from '@/store/store';

import {
	EArticleDetailType,
	EArticleRenderType,
	EArticleStatus,
} from '@/store/ArticleDetailStore/article.enum';
import { MAX_LENGTH_LG, MAX_LENGTH_MD } from '@/utils/constant';

import './style.scss';

const { Title } = Typography;
const { TextArea } = Input;
const { Option } = Select;

export type IArticleDetailTopComponentPropType = Pick<
	StoreType,
	'userStore' | 'articleDetailStore' | 'tagStore'
>;

@inject((allStore: StoreType) => ({
	userStore: allStore.userStore,
	articleDetailStore: allStore.articleDetailStore,
	tagStore: allStore.tagStore,
}))
@observer
class ArticleDetailTopComponent extends Component<
	IArticleDetailTopComponentPropType
> {
	handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
		this.props.articleDetailStore.changeDetail({
			key: EArticleDetailType.title,
			value: e.target.value,
		});
	};

	handleChangeIntro = (e: ChangeEvent<HTMLTextAreaElement>) => {
		this.props.articleDetailStore.changeDetail({
			key: EArticleDetailType.intro,
			value: e.target.value,
		});
	};

	handleChangeStatus = (e: RadioChangeEvent) => {
		this.props.articleDetailStore.changeDetail({
			key: EArticleDetailType.status,
			value: e.target.value,
		});
	};

	handleChangeTag = (value: Array<string | undefined>) => {
		const { tags, hasTag } = this.props.tagStore;
		if (value && value.length && hasTag) {
			const selectedTags = tags.filter(tag => value.includes(tag.objectId));
			this.props.articleDetailStore.changeDetail({
				key: EArticleDetailType.tags,
				value: selectedTags,
			});
		}
	};

	handleChangeRenderType = (e: RadioChangeEvent) => {
		this.props.articleDetailStore.changeDetail({
			key: EArticleDetailType.renderType,
			value: e.target.value,
		});
	};

	get selectTag() {
		const { detail } = this.props.articleDetailStore;
		return detail?.tags.map(tag => tag.objectId) ?? [];
	}

	render() {
		const { detail } = this.props.articleDetailStore;
		const { tags } = this.props.tagStore;
		return (
			<Row type="flex">
				<Col span={24}>
					<Title level={4}>文章标题</Title>
					<Input
						placeholder="请输入文章标题"
						maxLength={MAX_LENGTH_MD}
						size="large"
						allowClear={true}
						value={detail?.title ?? ''}
						onChange={this.handleChangeTitle}
					/>
				</Col>
				<Gap />
				<Col span={24}>
					<Title level={4}>文章描述</Title>
					<TextArea
						placeholder="请输入文章描述"
						allowClear={true}
						rows={3}
						maxLength={MAX_LENGTH_LG}
						value={detail?.intro ?? ''}
						onChange={this.handleChangeIntro}
					/>
				</Col>
				<Gap />
				<Col span={24}>
					<Title level={4}>文章状态</Title>
					<Radio.Group
						value={detail?.status ?? EArticleStatus.show}
						onChange={this.handleChangeStatus}>
						<Radio.Button value={EArticleStatus.show}>显示</Radio.Button>
						<Radio.Button value={EArticleStatus.hide}>隐藏</Radio.Button>
					</Radio.Group>
				</Col>
				<Gap />
				<Col span={24}>
					<Title level={4}>文章标签</Title>
					<Select
						size="large"
						style={{ width: '100%' }}
						mode="multiple"
						placeholder="请选择文章标签"
						allowClear={true}
						value={this.selectTag}
						onChange={this.handleChangeTag}>
						{tags.map(tag => (
							<Option key={tag.objectId}>{tag.name}</Option>
						))}
					</Select>
				</Col>
				<Gap />
				<Col span={24}>
					<Title level={4}>文章编辑方式</Title>
					<Radio.Group
						value={detail?.renderType ?? EArticleRenderType.richText}
						onChange={this.handleChangeRenderType}>
						<Radio.Button value={EArticleRenderType.richText}>
							富文本
						</Radio.Button>
						<Radio.Button value={EArticleRenderType.markdown}>
							Markdown
						</Radio.Button>
					</Radio.Group>
				</Col>
				<Gap />
			</Row>
		);
	}
}

export default (ArticleDetailTopComponent as unknown) as ComponentClass;
