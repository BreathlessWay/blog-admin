import React, { Component, ComponentClass, FormEvent } from 'react';

import { inject, observer } from 'mobx-react';

import { Input, DatePicker, Select, Form, Button } from 'antd';

import { FormComponentProps } from 'antd/lib/form/Form';
import { StoreType } from '@/store/store';

import { EArticleStatus } from '@/store/ArticleDetailStore/article.enum';

import { getArticleListService } from '@/service/articleService';

import moment from 'moment';
import { MAX_LENGTH_MD } from '@/utils/constant';

const { RangePicker } = DatePicker;
const { Option } = Select;

export type ArticleFilterComponentPropType = Pick<
	StoreType,
	'tagStore' | 'articleListStore' | 'homepageStore'
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
	homepageStore: allStore.homepageStore,
}))
@observer
class ArticleFilterComponent extends Component<ArticleFilterComponentPropType> {
	handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		this.props.form.validateFields(async (err, values: FormValueType) => {
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
				try {
					await getArticleListService();
				} catch (e) {}
			}
		});
	};

	handleDisableDate = (current: moment.Moment | null) => {
		return Boolean(current && current > moment().endOf('day'));
	};

	render() {
		const { usefulTag } = this.props.tagStore;
		const {
			query: { status, keyword, startTime, endTime, tags },
		} = this.props.articleListStore;
		const { getFieldDecorator } = this.props.form;
		const { articleAlias } = this.props.homepageStore;

		const initialDataRange: Record<string, any> = {
			initialValue: null,
		};

		if (startTime && endTime) {
			initialDataRange.initialValue = [moment(startTime), moment(endTime)];
		}

		return (
			<Form layout="inline" onSubmit={this.handleSubmit}>
				<Form.Item label="关键字" htmlFor={EFormKey.keyword}>
					{getFieldDecorator(EFormKey.keyword, {
						initialValue: keyword,
					})(
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
						initialDataRange,
					)(
						<RangePicker
							id={EFormKey.date}
							disabledDate={this.handleDisableDate}
						/>,
					)}
				</Form.Item>
				<Form.Item label={`${articleAlias}状态`} htmlFor={EFormKey.status}>
					{getFieldDecorator(EFormKey.status, {
						initialValue: status,
					})(
						<Select style={{ width: '70px' }} id={EFormKey.status}>
							<Option value={EArticleStatus.all}>全部</Option>
							<Option value={EArticleStatus.show}>显示</Option>
							<Option value={EArticleStatus.hide}>隐藏</Option>
						</Select>,
					)}
				</Form.Item>
				<Form.Item label={`${articleAlias}标签`} htmlFor={EFormKey.tag}>
					{getFieldDecorator(EFormKey.tag, {
						initialValue: tags,
					})(
						<Select
							id={EFormKey.tag}
							style={{ width: '200px' }}
							mode="multiple">
							{usefulTag.map(tag => (
								<Option key={tag._id}>{tag.name}</Option>
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
