import React, { ChangeEvent, Component, ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';

import { Col, Icon, Input, Row, Slider } from 'antd';
import Gap from '@/components/common/Gap';
import ColorPickerComponent from '@/components/common/ColorPickerComponent';

import UserStore from '@/store/UserStore';
import { SliderValue } from 'antd/lib/slider';

import { SKILL_PERCENT_MID } from '@/utils/constant';

import './style.scss';

export type ISkillComponentItemPropType = {
	item: {
		name: string;
		percent: number;
		color: string;
	};
	isEditing: boolean;
	index: number;
};

@inject('userStore')
@observer
class SkillComponentItem extends Component<
	ISkillComponentItemPropType & { userStore: UserStore }
> {
	handleChangeSkillName = (
		event: ChangeEvent<HTMLInputElement>,
		index: number,
	) => {
		this.props.userStore.changeSkillName(event.target.value, index);
	};

	handleChangeSkillPercent = (value: SliderValue, index: number) => {
		this.props.userStore.changeSkillPercent(value as number, index);
	};

	handleConfirmColor = (color: string, index: number) => {
		this.props.userStore.changeSkillColor(color, index);
	};

	render() {
		const {
			item: { name, percent, color },
			isEditing,
			index,
		} = this.props;

		const preColor = percent >= SKILL_PERCENT_MID ? 'rgba(0, 0, 0, .45)' : '';
		const nextColor = percent >= SKILL_PERCENT_MID ? '' : 'rgba(0, 0, 0, .45)';

		return (
			<Row type="flex" align="middle">
				<Col>技能名称：</Col>
				<Col span={24}>
					<Gap />
				</Col>
				<Col span={24}>
					<Input
						allowClear={true}
						value={name}
						maxLength={13}
						disabled={!isEditing}
						onChange={event => {
							this.handleChangeSkillName(event, index);
						}}
					/>
				</Col>
				<Col span={24}>
					<Gap />
				</Col>
				<Col>技能颜色：</Col>
				<Col>
					<ColorPickerComponent
						color={color}
						onConfirm={color => this.handleConfirmColor(color, index)}
						disabled={!isEditing}
					/>
				</Col>
				<Col span={24}>
					<Gap />
				</Col>
				<Col>技能熟练度：</Col>
				<Col span={24}>
					<Row type="flex" align="middle" justify="space-between">
						<Col span={1} className="skill-list_percent">
							<Icon type="frown-o" style={{ color: preColor }} />
						</Col>
						<Col span={22} className="skill-list_percent">
							<Slider
								value={percent}
								disabled={!isEditing}
								onChange={value => this.handleChangeSkillPercent(value, index)}
							/>
						</Col>
						<Col span={1} className="skill-list_percent">
							<Icon type="smile-o" style={{ color: nextColor }} />
						</Col>
					</Row>
				</Col>
			</Row>
		);
	}
}

export default (SkillComponentItem as unknown) as ComponentClass<
	ISkillComponentItemPropType
>;
