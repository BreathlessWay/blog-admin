import React, { ChangeEvent, Component, ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';

import { Col, Input, Radio, Row, Select, Typography } from 'antd';
import Gap from '@/components/common/Gap';

import { RadioChangeEvent } from 'antd/lib/radio/interface';
import { StoreType } from '@/store/store';

import {
	EArticleDetailKey,
	EArticleEditError,
	EArticleRenderType,
	EArticleStatus,
} from '@/store/ArticleDetailStore/article.enum';

import { MAX_LENGTH_LG, MAX_LENGTH_MD } from '@/utils/constant';

import './style.scss';

const { Title, Text } = Typography;
const { TextArea } = Input;
const { Option } = Select;

export type ArticleDetailTopComponentPropType = Pick<
	StoreType,
	'userStore' | 'articleDetailStore' | 'tagStore' | 'homepageStore'
>;

@inject((allStore: StoreType) => ({
	userStore: allStore.userStore,
	articleDetailStore: allStore.articleDetailStore,
	tagStore: allStore.tagStore,
	homepageStore: allStore.homepageStore,
}))
@observer
class ArticleDetailTopComponent extends Component<
	ArticleDetailTopComponentPropType
> {
	handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		const { validError, changeDetail } = this.props.articleDetailStore;

		validError({
			key: EArticleEditError.titleError,
			value: !value.trim(),
		});
		changeDetail({
			key: EArticleDetailKey.title,
			value: value,
		});
	};

	handleChangeIntro = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const { value } = e.target;
		const { validError, changeDetail } = this.props.articleDetailStore;

		validError({
			key: EArticleEditError.introError,
			value: !value.trim(),
		});
		changeDetail({
			key: EArticleDetailKey.intro,
			value: value,
		});
	};

	handleChangeStatus = (e: RadioChangeEvent) => {
		this.props.articleDetailStore.changeDetail({
			key: EArticleDetailKey.status,
			value: e.target.value,
		});
	};

	handleChangeTag = (value: Array<string | undefined>) => {
		const { validError, changeDetail } = this.props.articleDetailStore;
		const { tags, hasTag } = this.props.tagStore;

		validError({
			key: EArticleEditError.tagError,
			value: !value.length,
		});
		if (value && hasTag) {
			const selectedTags = tags.filter(tag => value.includes(tag.objectId));
			changeDetail({
				key: EArticleDetailKey.tags,
				value: selectedTags,
			});
		}
	};

	handleChangeRenderType = (e: RadioChangeEvent) => {
		const { validError, changeDetail } = this.props.articleDetailStore;
		validError({
			key: EArticleEditError.contentError,
			value: false,
		});
		changeDetail({
			key: EArticleDetailKey.renderType,
			value: e.target.value,
		});
	};

	get selectTag() {
		const { detail } = this.props.articleDetailStore;
		return detail?.tags.map(tag => tag.objectId) ?? [];
	}

	render() {
		const {
			detail,
			error: { titleError, introError, tagError },
		} = this.props.articleDetailStore;
		const { tags } = this.props.tagStore;
		const { articleAlias } = this.props.homepageStore;

		return (
			<Row type="flex">
				<Col span={24}>
					<Title level={4} className="article-detail_label">
						<label htmlFor="title">{articleAlias}标题</label>
					</Title>
					<Text type="warning" className="article-detail_warning">
						{articleAlias}标题最多{MAX_LENGTH_MD}个字
					</Text>
					<Input
						id="title"
						placeholder={`请输入${articleAlias}标题`}
						maxLength={MAX_LENGTH_MD}
						size="large"
						allowClear={true}
						value={detail?.title ?? ''}
						onChange={this.handleChangeTitle}
					/>
					{titleError && (
						<Text type="danger" className="article-detail_warning">
							{articleAlias}标题不能为空
						</Text>
					)}
				</Col>
				<Gap size="lg" />
				<Col span={24}>
					<Title level={4} className="article-detail_label">
						<label htmlFor="intro">{articleAlias}描述</label>
					</Title>
					<Text type="warning" className="article-detail_warning">
						{articleAlias}描述最多{MAX_LENGTH_LG}个字
					</Text>
					<TextArea
						id="intro"
						placeholder={`请输入${articleAlias}描述`}
						allowClear={true}
						rows={3}
						maxLength={MAX_LENGTH_LG}
						value={detail?.intro ?? ''}
						onChange={this.handleChangeIntro}
						className="article-detail_intro"
					/>
					{introError && (
						<Text type="danger" className="article-detail_warning">
							{articleAlias}描述不能为空
						</Text>
					)}
				</Col>
				<Gap size="lg" />
				<Col span={24}>
					<Title level={4}>
						<label htmlFor="status">{articleAlias}状态</label>
					</Title>
					<Radio.Group
						id="status"
						value={detail?.status ?? EArticleStatus.show}
						onChange={this.handleChangeStatus}>
						<Radio.Button value={EArticleStatus.show}>显示</Radio.Button>
						<Radio.Button value={EArticleStatus.hide}>隐藏</Radio.Button>
					</Radio.Group>
				</Col>
				<Gap size="lg" />
				<Col span={24}>
					<Title level={4}>
						<label htmlFor="tag">{articleAlias}标签</label>
					</Title>
					<Select
						id="tag"
						size="large"
						style={{ width: '100%' }}
						mode="multiple"
						placeholder={`请选择${articleAlias}标签`}
						allowClear={true}
						value={this.selectTag}
						onChange={this.handleChangeTag}>
						{tags.map(tag => (
							<Option key={tag.objectId}>{tag.name}</Option>
						))}
					</Select>
					{tagError && (
						<Text type="danger" className="article-detail_warning">
							{articleAlias}标签不能为空
						</Text>
					)}
				</Col>
				<Gap size="lg" />
				<Col span={24}>
					<Title level={4}>
						<label htmlFor="renderType">{articleAlias}编辑方式</label>
					</Title>
					<Radio.Group
						id="renderType"
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
				<Gap size="lg" />
				<Col span={24}>
					<Row type="flex" align="middle" justify="space-between">
						<Title level={4}>
							<label htmlFor="content">{articleAlias}内容</label>
						</Title>
					</Row>
				</Col>
			</Row>
		);
	}
}

export default (ArticleDetailTopComponent as unknown) as ComponentClass;
