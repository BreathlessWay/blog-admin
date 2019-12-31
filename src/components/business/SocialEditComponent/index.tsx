import React, { ChangeEvent, ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';

import { Button, Row, Modal } from 'antd';
import BasicWrapComponent from '@/components/business/BasicWrapComponent';
import SocialEditItem from './item';

import { StoreType } from '@/store/store';
import { UserDetailType } from '@/types/user';

import { EResumeChangeKey } from '@/store/UserStore/user.enum';

import { updateUserService } from '@/service/userService';

import {
	MAX_RESUME_SIZE,
	MAX_SOCIAL_SIZE,
	UPLOAD_IMAGE_TYPE,
	UPLOAD_RESUME_TYPE,
} from '@/utils/constant';

import './style.scss';

const { confirm } = Modal;

export type SocialEditComponentPropType = Pick<StoreType, 'userStore'>;

export type SocialEditComponentStateType = {
	resumeError: boolean;
};

@inject((allStore: StoreType) => ({
	userStore: allStore.userStore,
}))
@observer
class SocialEditComponent extends React.Component<
	SocialEditComponentPropType,
	SocialEditComponentStateType
> {
	handleEdit = async () => {
		try {
			this.props.userStore.filterSocial();
			const {
				resumeAlias,
				resumeUrl,
				resumeName,
				resumeImageUrl,
				social,
			} = this.props.userStore.userDetail as UserDetailType;
			const params = {
				resumeAlias,
				resumeUrl,
				resumeName,
				resumeImageUrl,
				social,
			};
			return await updateUserService(params);
		} catch (e) {
			throw new Error();
		}
	};

	handleAddSocial = () => {
		this.props.userStore.addSocial();
	};

	handleUploadResume = ({
		fileUrl,
		fileName,
	}: {
		fileUrl: string;
		fileName: string;
	}) => {
		this.props.userStore.setPersonalInfo({
			key: EResumeChangeKey.resumeName,
			value: fileName,
		});
		this.props.userStore.setPersonalInfo({
			key: EResumeChangeKey.resumeUrl,
			value: fileUrl,
		});
	};

	handleDeleteResume = () => {
		const _this = this;
		confirm({
			title: '是否确认删除简历？',
			okType: 'danger',
			onOk() {
				_this.props.userStore.setPersonalInfo({
					key: EResumeChangeKey.resumeName,
					value: '',
				});
				_this.props.userStore.setPersonalInfo({
					key: EResumeChangeKey.resumeUrl,
					value: '',
				});
			},
			onCancel() {
				console.log('Cancel');
			},
		});
	};

	handleChangeResumeInput = (e: ChangeEvent<HTMLInputElement>) => {
		this.props.userStore.setPersonalInfo({
			key: EResumeChangeKey.resumeAlias,
			value: e.target.value,
		});
	};

	handleUploadIcon = ({
		fileUrl,
		index,
	}: {
		fileUrl: string;
		fileName: string;
		index: number;
	}) => {
		this.props.userStore.changeSocialIcon({ fileUrl, index });
	};

	handleDeleteSocialIcon = (index: number) => () => {
		this.props.userStore.changeSocialIcon({ fileUrl: '', index });
	};

	handleDeleteItem = (index: number) => () => {
		const _this = this;
		confirm({
			title: '是否确认删除该条社交信息？',
			okType: 'danger',
			onOk() {
				_this.props.userStore.deleteSocial(index);
			},
			onCancel() {
				console.log('Cancel');
			},
		});
	};

	handleChangeSocialInput = (
		index: number,
		e: ChangeEvent<HTMLInputElement>,
	) => {
		this.props.userStore.changeSocialValue({ value: e.target.value, index });
	};

	get social() {
		return this.props.userStore.userDetail?.social || [];
	}

	render() {
		const { userDetail } = this.props.userStore;
		const { social } = this;
		return (
			<BasicWrapComponent
				title="社交"
				note={`简历附件需小于${MAX_RESUME_SIZE}k，社交信息图标需小于${MAX_SOCIAL_SIZE}k`}
				handleEdit={this.handleEdit}
				render={isEditing => (
					<Row type="flex" align="middle">
						<SocialEditItem
							size={MAX_RESUME_SIZE}
							accept={UPLOAD_RESUME_TYPE}
							type="file"
							title={'简历'}
							value={userDetail?.resumeAlias ?? ''}
							label={'上传简历'}
							file={userDetail?.resumeName ?? ''}
							isEditing={isEditing}
							onUploadFile={this.handleUploadResume}
							onDeleteFile={this.handleDeleteResume}
							onChangeInput={this.handleChangeResumeInput}
						/>
						{social.map((item, index) => (
							<SocialEditItem
								size={MAX_SOCIAL_SIZE}
								accept={UPLOAD_IMAGE_TYPE}
								key={item._id || `${index}`}
								type="image"
								value={item.value}
								file={item.icon}
								label={'上传图标'}
								isEditing={isEditing}
								onUploadFile={({ fileUrl, fileName }) =>
									this.handleUploadIcon({ fileUrl, fileName, index })
								}
								onDeleteFile={this.handleDeleteSocialIcon(index)}
								onDeleteItem={this.handleDeleteItem(index)}
								onChangeInput={e => this.handleChangeSocialInput(index, e)}
							/>
						))}
						{isEditing && (
							<Button type="primary" icon="plus" onClick={this.handleAddSocial}>
								新增社交信息
							</Button>
						)}
					</Row>
				)}
			/>
		);
	}
}

export default (SocialEditComponent as unknown) as ComponentClass;
