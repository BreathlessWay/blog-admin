import React, { Component, ComponentClass, FormEvent } from 'react';

import { inject, observer } from 'mobx-react';

import { Input, DatePicker, Select, Form, Button } from 'antd';

import { FormComponentProps } from 'antd/lib/form/Form';
import { StoreType } from '@/store/store';

import moment from 'moment';

const { RangePicker } = DatePicker;
const { Option } = Select;

export type IArticleFilterComponentPropType = Pick<
	StoreType,
	'tagStore' | 'articleStore'
> &
	FormComponentProps;

export enum EArticleStatus {
	show = 'show',
	hide = 'hide',
}

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
	articleStore: allStore.articleStore,
}))
@observer
class ArticleFilterComponent extends Component<
	IArticleFilterComponentPropType
> {
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
				this.props.articleStore.setQuery({
					keyword,
					startTime,
					endTime,
					status: status === EArticleStatus.show,
					tags: tag,
				});
				console.log(this.props.articleStore.searchQuery);
			}
		});
	};

	handleDisableDate = (current: moment.Moment | undefined) => {
		return Boolean(current && current > moment().endOf('day'));
	};

	render() {
		const { tags } = this.props.tagStore;
		const {
			query: { status },
		} = this.props.articleStore;
		const { getFieldDecorator } = this.props.form;

		const initialStatusValue = status
			? EArticleStatus.show
			: EArticleStatus.hide;

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
						initialValue: initialStatusValue,
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