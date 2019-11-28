import React, { Component, ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';

import { Button, Empty } from 'antd';
import BasicWrapComponent from '@/components/business/BasicWrapComponent';
import DraggableComponent from '@/components/common/DraggableComponent';
import SkillComponentItem from './item';

import { StoreType } from '@/store/store';
import { PersonalSkillItemType } from '@/types/user';

import './style.scss';

export type ISkillComponentPropType = Pick<StoreType, 'userStore'>;

@inject('userStore')
@observer
class SkillComponent extends Component<ISkillComponentPropType> {
	get skills() {
		return this.props.userStore.userDetail.personalSkill.map((item, index) => {
			return { ...item, ...{ id: item.objectId || `${index}` } };
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

		const hasSkills = skills.length > 0;

		return (
			<BasicWrapComponent
				title="个人技能"
				handleEdit={this.handleEdit}
				render={isEditing =>
					hasSkills || isEditing ? (
						<>
							<DraggableComponent
								moveCard={(dragIndex, hoverIndex) =>
									this.handleMoveCard(dragIndex, hoverIndex, isEditing)
								}
								list={skills}
								render={(item: PersonalSkillItemType, index) => (
									<SkillComponentItem
										key={item.objectId || `${index}`}
										item={item}
										index={index}
										isEditing={isEditing}
									/>
								)}
							/>
							{isEditing && (
								<Button
									type="primary"
									icon="plus"
									onClick={this.handleAddSkill}>
									新增个人技能
								</Button>
							)}
						</>
					) : (
						<Empty description="尚未添加技能" />
					)
				}
			/>
		);
	}
}

export default (SkillComponent as unknown) as ComponentClass;
