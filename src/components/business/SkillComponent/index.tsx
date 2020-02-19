import React, { Component, ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';

import { Button, Empty } from 'antd';
import BasicWrapComponent from '@/components/business/BasicWrapComponent';
import DraggableComponent from '@/components/common/DraggableComponent';
import SkillComponentItem from './item';

import { StoreType } from '@/store/store';
import { PersonalSkillItemType, UserDetailType } from '@/types/user';

import { MAX_LENGTH_LG } from '@/utils/constant';

import { updateUserService } from '@/service/userService';

import './style.scss';

export type SkillComponentPropType = Pick<StoreType, 'userStore'>;

@inject('userStore')
@observer
class SkillComponent extends Component<SkillComponentPropType> {
	get skills() {
		const { userDetail } = this.props.userStore;
		if (userDetail) {
			return userDetail.personalSkill.map((item, index) => {
				return { ...item, ...{ id: item._id || `${index}` } };
			});
		}
		return [];
	}

	handleEdit = async () => {
		try {
			this.props.userStore.filterSkill();
			const { personalSkill } = this.props.userStore
				.userDetail as UserDetailType;
			return updateUserService({ personalSkill });
		} catch (e) {
			throw new Error();
		}
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
				note={`个人技能名称最长${MAX_LENGTH_LG}个字, 可以拖拽排序`}
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
										key={item._id || `${index}`}
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
