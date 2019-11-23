import React, { Component, ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';

import { Button } from 'antd';
import CommonWrapComponent from '@/components/business/CommonWrapComponent';
import DraggableComponent from '@/components/common/DraggableComponent';
import SkillComponentItem from './item';

import UserStore from '@/store/UserStore';

import './style.scss';

export type ISkillComponentPropType = {
	userStore: UserStore;
};

@inject('userStore')
@observer
class SkillComponent extends Component<ISkillComponentPropType> {
	get skills() {
		return this.props.userStore.userDetail.personalSkill.map((item, index) => {
			return { ...item, ...{ id: `${index}` } };
		});
	}

	handleEdit = () => {
		this.props.userStore.filterSkill();
		return new Promise((resolve, reject) => {
			const { personalSkill } = this.props.userStore.userDetail;
			console.log(personalSkill);
			resolve();
		});
	};

	handleAddSkill = () => {
		this.props.userStore.addSkill();
	};

	handleMoveCard = (
		dragIndex: number,
		hoverIndex: number,
		isEditing: boolean,
	) => {
		if (isEditing) {
			this.props.userStore.sortSkill(dragIndex, hoverIndex);
		}
	};

	render() {
		const { skills } = this;

		return (
			<CommonWrapComponent
				title="个人技能"
				handleEdit={this.handleEdit}
				render={isEditing => (
					<>
						<DraggableComponent
							moveCard={(dragIndex, hoverIndex) =>
								this.handleMoveCard(dragIndex, hoverIndex, isEditing)
							}
							list={skills}
							render={(item: { name: string; percent: number }, index) => (
								<SkillComponentItem
									key={index}
									item={item}
									index={index}
									isEditing={isEditing}
								/>
							)}
						/>
						{isEditing && (
							<Button type="primary" icon="plus" onClick={this.handleAddSkill}>
								新增个人技能
							</Button>
						)}
					</>
				)}
			/>
		);
	}
}

export default (SkillComponent as unknown) as ComponentClass;