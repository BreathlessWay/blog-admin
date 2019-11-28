import React, { ChangeEvent, ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';

import { Button, Row } from 'antd';
import BasicWrapComponent from '@/components/business/BasicWrapComponent';
import SocialEditItem from './item';

import { StoreType } from '@/store/store';
import { EResumeChangeType } from '@/store/UserStore/user.enum';
import { UPLOAD_IMAGE_TYPE, UPLOAD_RESUME_TYPE } from '@/utils/constant';

import './style.scss';

export type ISocialEditComponentPropType = Pick<StoreType, 'userStore'>;

export type ISocialEditComponentStateType = {
	resumeError: boolean;
};

@inject((allStore: StoreType) => ({
	userStore: allStore.userStore,
}))
@observer
class SocialEditComponent extends React.Component<
	ISocialEditComponentPropType,
	ISocialEditComponentStateType
> {
	handleEdit = () => {
		this.props.userStore.filterSocial();
		return new Promise((resolve, reject) => {
			const {
				resumeAlias,
				resumeUrl,
				resumeName,
				resumeImageUrl,
				social,
			} = this.props.userStore.userDetail;
			const params = {
				resumeAlias,
				resumeUrl,
				resumeName,
				resumeImageUrl,
				social,
			};
			console.log(params);
			// 提交更新
			resolve();
		});
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
			type: EResumeChangeType.resumeName,
			value: fileName,
		});
		this.props.userStore.setPersonalInfo({
			type: EResumeChangeType.resumeUrl,
			value: fileUrl,
		});
	};

	handleDeleteResume = () => {
		this.props.userStore.setPersonalInfo({
			type: EResumeChangeType.resumeName,
			value: '',
		});
		this.props.userStore.setPersonalInfo({
			type: EResumeChangeType.resumeUrl,
			value: '',
		});
	};

	handleChangeResumeInput = (e: ChangeEvent<HTMLInputElement>) => {
		this.props.userStore.setPersonalInfo({
			type: EResumeChangeType.resumeAlias,
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
		this.props.userStore.deleteSocial(index);
	};

	handleChangeSocialInput = (
		index: number,
		e: ChangeEvent<HTMLInputElement>,
	) => {
		this.props.userStore.changeSocialValue({ value: e.target.value, index });
	};

	get social() {
		return this.props.userStore.userDetail.social;
	}

	render() {
		const { userDetail } = this.props.userStore;
		const { social } = this;
		return (
			<BasicWrapComponent
				title="社交"
				handleEdit={this.handleEdit}
				render={isEditing => (
					<Row type="flex" align="middle">
						<SocialEditItem
							accept={UPLOAD_RESUME_TYPE}
							type="file"
							title={'简历'}
							value={userDetail.resumeAlias}
							label={'上传简历'}
							file={userDetail.resumeName}
							isEditing={isEditing}
							onUploadFile={this.handleUploadResume}
							onDeleteFile={this.handleDeleteResume}
							onChangeInput={this.handleChangeResumeInput}
						/>
						{social.map((item, index) => (
							<SocialEditItem
								accept={UPLOAD_IMAGE_TYPE}
								key={item.icon + index}
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
