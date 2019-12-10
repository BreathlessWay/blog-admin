import React, { Component, ComponentClass, FormEvent } from 'react';

import { inject, observer } from 'mobx-react';

import { Input, DatePicker, Select, Form, Button } from 'antd';

import { FormComponentProps } from 'antd/lib/form/Form';
import { StoreType } from '@/store/store';

import { EArticleStatus } from '@/store/ArticleDetailStore/article.enum';

import moment from 'moment';
import { MAX_LENGTH_MD } from '@/utils/constant';

const { RangePicker } = DatePicker;
const { Option } = Select;

export type ArticleFilterComponentPropType = Pick<
	StoreType,
	'tagStore' | 'articleListStore'
> &
	FormComponentProps;

export enum EFormKey {
	keyword = 'keyword',
	date = 'date',
	status = 'status',
	tag = 'tag',
}

export type FormValueType = {
	[EFormKey.keyword]: string;
	[EFormKey.date]: Array<moment.Moment>;
	[EFormKey.status]: EArticleStatus;
	[EFormKey.tag]: Array<string>;
};

@inject((allStore: StoreType) => ({
	tagStore: allStore.tagStore,
	articleListStore: allStore.articleListStore,
}))
@observer
class ArticleFilterComponent extends Component<ArticleFilterComponentPropType> {
	handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		this.props.form.validateFields((err, values: FormValueType) => {
			if (!err) {
				const { keyword, date, status, tag } = values;
				let startTime, endTime;
				if (date && date.length) {
					startTime = date[0].startOf('day').valueOf();
					endTime = date[1].endOf('day').valueOf();
				}
				this.props.articleListStore.setQuery({
					keyword,
					startTime,
					endTime,
					status,
					tags: tag,
				});
				console.log(this.props.articleListStore.searchQuery);
			}
		});
	};

	handleDisableDate = (current: moment.Moment | null) => {
		return Boolean(current && current > moment().endOf('day'));
	};

	render() {
		const { tags } = this.props.tagStore;
		const {
			query: { status },
		} = this.props.articleListStore;
		const { getFieldDecorator } = this.props.form;
		return (
			<Form layout="inline" onSubmit={this.handleSubmit}>
				<Form.Item label="关键字" htmlFor={EFormKey.keyword}>
					{getFieldDecorator(
						EFormKey.keyword,
						{},
					)(
						<Input
							id={EFormKey.keyword}
							placeholder="关键字"
							allowClear={true}
							maxLength={MAX_LENGTH_MD}
						/>,
					)}
				</Form.Item>
				<Form.Item label="发布时间" htmlFor={EFormKey.date}>
					{getFieldDecorator(
						EFormKey.date,
						{},
					)(
						<RangePicker
							id={EFormKey.date}
							disabledDate={this.handleDisableDate}
						/>,
					)}
				</Form.Item>
				<Form.Item label="文章状态" htmlFor={EFormKey.status}>
					{getFieldDecorator(EFormKey.status, {
						initialValue: status,
					})(
						<Select style={{ width: '70px' }} id={EFormKey.status}>
							<Option value={EArticleStatus.show}>显示</Option>
							<Option value={EArticleStatus.hide}>隐藏</Option>
						</Select>,
					)}
				</Form.Item>
				<Form.Item label="文章标签" htmlFor={EFormKey.tag}>
					{getFieldDecorator(
						EFormKey.tag,
						{},
					)(
						<Select
							id={EFormKey.tag}
							style={{ width: '200px' }}
							mode="multiple">
							{tags.map(tag => (
								<Option key={tag.objectId}>{tag.name}</Option>
							))}
						</Select>,
					)}
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit">
						搜索
					</Button>
				</Form.Item>
			</Form>
		);
	}
}

const WrappedArticleFilterComponent = Form.create({ name: 'horizontal_login' })(
	ArticleFilterComponent,
);

export default (WrappedArticleFilterComponent as unknown) as ComponentClass;
