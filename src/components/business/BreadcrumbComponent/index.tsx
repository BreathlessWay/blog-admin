import React, { FC } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import { Breadcrumb, Button } from 'antd';

import { StoreType } from '@/store/store';

import compose from '@/utils/compose';

import './style.scss';

const { Item } = Breadcrumb;

export type IBreadcrumbComponentPropType = RouteComponentProps & StoreType;

const BreadcrumbComponent = (props: IBreadcrumbComponentPropType) => {
	const {
		location,
		homepageStore: { breadcrumbNameMap },
		userStore,
		history,
	} = props;
	const pathSnippets = location.pathname.split('/').filter(i => i);
	const extraBreadcrumbItems = pathSnippets.map((_, index) => {
		const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
		return (
			<Item key={url}>
				<Link to={url}>{breadcrumbNameMap[url]}</Link>
			</Item>
		);
	});
	const breadcrumbItems = [
		<Item key="manager">
			<Link to="/">管理后台</Link>
		</Item>,
	].concat(extraBreadcrumbItems);
	return (
		<section className="bread-crumb">
			<Breadcrumb separator=">">{breadcrumbItems}</Breadcrumb>
			<Button
				type="link"
				onClick={() => {
					userStore.logout();
					history.push('/login');
				}}>
				退出
			</Button>
		</section>
	);
};

// withRouter 要在最外层，否则不会出发render
export default compose<FC>(
	withRouter,
	inject((store: StoreType) => ({
		homepageStore: store.homepageStore,
		userStore: store.userStore,
	})),
	observer,
)(BreadcrumbComponent);
