import React, { lazy } from "react";
import { Route, RouteComponentProps, Switch, Redirect } from "react-router-dom";
import { inject, observer } from "mobx-react";

import { Layout, Empty } from "antd";

import { StoreType } from "@/store/store";

import { login } from "@/service/login";

import "./style.scss";

const {Header, Content, Footer, Sider} = Layout;

const MenuComponent = lazy(() => import(/* webpackChunkName: "MenuComponent" */ "../../components/MenuComponent"));
const BreadcrumbComponent = lazy(() => import(/* webpackChunkName: "BreadcrumbComponent" */ "../../components/BreadcrumbComponent"));

export type IHomePagePropType = StoreType & RouteComponentProps

@inject((allStore: StoreType) => ({
	userStore: allStore.userStore,
	homepageStore: allStore.homepageStore
}))
@observer
class HomePage extends React.Component<IHomePagePropType> {
	componentDidMount(): void {
		const {userStore, history, homepageStore: {firstMenu}} = this.props;
		login({userStore, history, firstMenu});
	}

	render() {
		const {homepageStore: {firstMenu}} = this.props;
		return (
			<Layout>
				<Sider className="home-page_sider">
					<aside className="home-page_logo">
						博客管理后台
					</aside>
					<MenuComponent/>
				</Sider>
				<Layout className="home-page_layout">
					<Header className="home-page_header">
						<BreadcrumbComponent/>
					</Header>
					<Content className="home-page_content">
						<Switch>
							<Route path="/home" children={<Empty/>}/>
							<Route path="/me" children={<div>me</div>}/>
							<Route path="/article" children={<div>article</div>}/>
							<Route path="/cat" children={<div>cat</div>}/>
							<Route path="/photography" children={<div>photography</div>}/>
							<Redirect from='/' to={firstMenu.path}/>
						</Switch>
					</Content>
					<Footer className="home-page_footer">BreathlessWay 博客管理后台系统</Footer>
				</Layout>
			</Layout>
		);
	}
}

export default HomePage as any;

