import React, { lazy } from 'react';

import { Route, RouteComponentProps, Switch, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import { Layout, Spin } from 'antd';

import { StoreType } from '@/store/store';

import { login } from '@/service/login';

import './style.scss';

const { Header, Content, Footer, Sider } = Layout;

const MenuComponent = lazy(() =>
	import(
		/* webpackChunkName: "MenuComponent" */ '@/components/business/MenuComponent'
	),
);

const BreadcrumbComponent = lazy(() =>
	import(
		/* webpackChunkName: "BreadcrumbComponent" */ '@/components/business/BreadcrumbComponent'
	),
);

const HomePage = lazy(() =>
	import(/* webpackChunkName: "HomePage" */ '../HomePage'),
);

const MePage = lazy(() => import(/* webpackChunkName: "MePage" */ '../MePage'));

const ArticlePage = lazy(() =>
	import(/* webpackChunkName: "ArticlePage" */ '../ArticlePage'),
);

export type IRouterPagePropType = StoreType & RouteComponentProps;

@inject((allStore: StoreType) => ({
	userStore: allStore.userStore,
	homepageStore: allStore.homepageStore,
	globalStore: allStore.globalStore,
}))
@observer
class RouterPage extends React.Component<IRouterPagePropType> {
	componentDidMount(): void {
		const {
			userStore,
			history,
			homepageStore: { firstMenu },
		} = this.props;
		login({ userStore, history, firstMenu });
	}

	render() {
		const {
			homepageStore: { firstMenu },
			globalStore: { loading },
		} = this.props;
		return (
			<Layout>
				<Sider className="home-page_sider">
					<aside className="home-page_logo">博客管理后台</aside>
					<MenuComponent />
				</Sider>
				<Layout className="home-page_layout">
					<Header className="home-page_header">
						<BreadcrumbComponent />
					</Header>
					<Content className="home-page_content">
						<Spin spinning={loading}>
							<Switch>
								<Route path="/home" exact={true} component={HomePage} />
								<Route path="/me" exact={true} component={MePage} />
								<Route
									path="/article"
									render={() => (
										<Switch>
											<Route
												exact={true}
												path="/article"
												component={ArticlePage}
											/>
											<Route
												exact={true}
												path="/article/tag"
												children={<div>tag</div>}
											/>
											<Route
												exact={true}
												path="/article/create"
												children={<div>create</div>}
											/>
											<Route
												exact={true}
												path="/article/edit"
												children={<div>edit</div>}
											/>
											<Route
												path="*"
												render={() => <Redirect to={firstMenu.path} />}
											/>
										</Switch>
									)}
								/>
								<Route path="/cat" exact={true} children={<div>cat</div>} />
								<Route
									path="/photography"
									exact={true}
									children={<div>photography</div>}
								/>
								<Redirect from="/" to={firstMenu.path} />
								<Route
									path="*"
									render={() => <Redirect to={firstMenu.path} />}
								/>
							</Switch>
						</Spin>
					</Content>
					<Footer className="home-page_footer">
						BreathlessWay 博客管理后台系统
					</Footer>
				</Layout>
			</Layout>
		);
	}
}

export default RouterPage as any;
