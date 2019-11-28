import React, { FC } from 'react';

import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import { Breadcrumb, Button } from 'antd';

import { StoreType } from '@/store/store';

import { routeMapPath } from '@/route';

import compose from '@/utils/compose';

import './style.scss';

const { Item } = Breadcrumb;

export type IBreadcrumbComponentPropType = RouteComponentProps &
	Pick<StoreType, 'homepageStore' | 'userStore'>;

const BreadcrumbComponent = (props: IBreadcrumbComponentPropType) => {
	const {
		location,
		homepageStore: { breadcrumbNameMap, setKeys, firstMenu, menuList },
		userStore,
		history,
	} = props;

	const handleClick = (url: string) => {
		const matchMenu = menuList.find(menu => menu.path === url);
		if (matchMenu && matchMenu.children && matchMenu.children.length) {
			const indexChild = matchMenu.children[0];
			setKeys(indexChild.path);
			return;
		}
		setKeys(url);
	};

	const pathSnippets = location.pathname.split('/').filter(i => i);
	const extraBreadcrumbItems = pathSnippets.map((_, index) => {
		const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
		return (
			<Item key={url}>
				<Link to={url} onClick={() => handleClick(url)}>
					{breadcrumbNameMap[url]}
				</Link>
			</Item>
		);
	});
	const breadcrumbItems = [
		<Item key="manager">
			<Link to="/" onClick={() => handleClick(firstMenu.path)}>
				管理后台
			</Link>
		</Item>,
	].concat(extraBreadcrumbItems);
	return (
		<section className="bread-crumb">
			<Breadcrumb separator=">">{breadcrumbItems}</Breadcrumb>
			<Button
				type="link"
				onClick={() => {
					userStore.logout();
					history.push(routeMapPath.login);
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
