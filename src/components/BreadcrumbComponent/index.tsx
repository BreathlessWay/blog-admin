import React from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";

import { Breadcrumb, Button } from "antd";

import { StoreType } from "@/store/store";

import "./style.scss";

const {Item} = Breadcrumb;

export type IBreadcrumbComponentPropType = RouteComponentProps & StoreType

const BreadcrumbComponent = (props: IBreadcrumbComponentPropType) => {
	const {location, homepageStore: {menuList, breadcrumbNameMap}, userStore} = props;
	const pathSnippets = location.pathname.split("/").filter(i => i);
	const extraBreadcrumbItems = pathSnippets.map((_, index) => {
		const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
		return (
			<Item key={url}>
				<Link to={url}>{breadcrumbNameMap[url]}</Link>
			</Item>
		);
	});
	const first = menuList[0];
	const breadcrumbItems = [
		<Item key="home">
			<Link to={first.path}>{first.name}</Link>
		</Item>
	].concat(extraBreadcrumbItems);
	return (
		<section className="bread-crumb">
			<Breadcrumb separator=">">{breadcrumbItems}</Breadcrumb>
			<Button type="link" onClick={userStore.logout}>退出</Button>
		</section>
	);
};
// withRouter 要在最外层，否则不会出发render
export default withRouter(inject((store: StoreType) => ({
	homepageStore: store.homepageStore,
	userStore: store.userStore
}))(observer(BreadcrumbComponent))) as any;
