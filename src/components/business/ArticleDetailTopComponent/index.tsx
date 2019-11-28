import React, { Component, ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';

import { Row, Col, Input, Typography, Radio, Select } from 'antd';
import Gap from '@/components/common/Gap';

import { StoreType } from '@/store/store';

import { MAX_LENGTH_MD } from '@/utils/constant';

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
	render() {
		const { detail } = this.props.articleDetailStore;

		return (
			<Row type="flex">
				<Col>
					<Title level={4}>文章标题</Title>
					<Input
						placeholder="请输入文章标题"
						maxLength={MAX_LENGTH_MD}
						size="large"
						allowClear={true}
						value={detail?.title ?? ''}
					/>
				</Col>
				<Gap />
				<Col>
					<Title level={4}>文章描述</Title>
					<TextArea
						placeholder="请输入文章描述"
						allowClear={true}
						autoSize={true}
					/>
				</Col>
				<Gap />
				<Col>
					<Title level={4}>文章状态</Title>
					<Radio.Group>
						<Radio value={1}>显示</Radio>
						<Radio value={2}>隐藏</Radio>
					</Radio.Group>
				</Col>
				<Gap />
				<Col>
					<Title level={4}>文章标签</Title>
					<Select mode="multiple" placeholder="请选择文章标签">
						<Option key={1}>1</Option>
					</Select>
				</Col>
			</Row>
		);
	}
}

export default (ArticleDetailTopComponent as unknown) as ComponentClass;
