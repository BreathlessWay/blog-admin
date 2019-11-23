import React, { ChangeEvent, Component, ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';

import { Col, Icon, Input, Row, Slider } from 'antd';
import Gap from '@/components/common/Gap';

import UserStore from '@/store/UserStore';
import { SliderValue } from 'antd/lib/slider';

import { SKILL_PERCENT_MID } from '@/utils/constant';

import './style.scss';

export type ISkillComponentItemPropType = {
	item: {
		name: string;
		percent: number;
	};
	isEditing: boolean;
	index: number;
};

@inject('userStore')
@observer
class SkillComponentItem extends Component<
	ISkillComponentItemPropType & { userStore: UserStore }
> {
	handelChangeSkillName = (
		event: ChangeEvent<HTMLInputElement>,
		index: number,
	) => {
		this.props.userStore.changeSkillName(event.target.value, index);
	};

	handleChangeSkillPercent = (value: SliderValue, index: number) => {
		this.props.userStore.changeSkillPercent(value as number, index);
	};

	render() {
		const {
			item: { name, percent },
			isEditing,
			index,
		} = this.props;

		const preColor = percent >= SKILL_PERCENT_MID ? 'rgba(0, 0, 0, .45)' : '';
		const nextColor = percent >= SKILL_PERCENT_MID ? '' : 'rgba(0, 0, 0, .45)';

		return (
			<>
				<Col>技能名称：</Col>
				<Col>
					<Gap />
				</Col>
				<Col>
					<Input
						allowClear={true}
						value={name}
						maxLength={13}
						disabled={!isEditing}
						onChange={event => {
							this.handelChangeSkillName(event, index);
						}}
					/>
				</Col>
				<Col>
					<Gap />
				</Col>
				<Col>技能熟练度：</Col>
				<Col>
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
			</>
		);
	}
}

export default (SkillComponentItem as unknown) as ComponentClass<
	ISkillComponentItemPropType
>;
