import React, { lazy } from 'react';

import { Route, RouteComponentProps, Switch, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import { Layout, Row, Spin } from 'antd';

import { StoreType } from '@/store/store';

import { login } from '@/service/login';

import { routeMapPath } from '@/route';

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
	import(/* webpackChunkName: "HomePage" */ '@/pages/HomePage'),
);

const MePage = lazy(() =>
	import(/* webpackChunkName: "MePage" */ '@/pages/MePage'),
);

const ArticleIndexPage = lazy(() =>
	import(
		/* webpackChunkName: "ArticleIndexPage" */ '@/pages/ArticlePage/ArticleIndexPage'
	),
);

const ArticleTagPage = lazy(() =>
	import(
		/* webpackChunkName: "ArticleTagPage" */ '@/pages/ArticlePage/ArticleTagPage'
	),
);

const ArticleEditPage = lazy(() =>
	import(
		/* webpackChunkName: "ArticleEditPage" */ '@/pages/ArticlePage/ArticleEditPage'
	),
);

const CatPage = lazy(() =>
	import(/* webpackChunkName: "CatPage" */ '@/pages/CatPage'),
);

export type IRouterPagePropType = Pick<
	StoreType,
	'userStore' | 'homepageStore' | 'globalStore'
> &
	RouteComponentProps;

@inject((allStore: StoreType) => ({
	userStore: allStore.userStore,
	homepageStore: allStore.homepageStore,
	globalStore: allStore.globalStore,
}))
@observer
class RouterPage extends React.Component<IRouterPagePropType> {
	componentDidMount(): void {
		const { userStore, history, homepageStore } = this.props;
		login({ userStore, history, homepageStore });
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
								<Route
									path={routeMapPath.home}
									exact={true}
									component={HomePage}
								/>
								<Route path={routeMapPath.me} exact={true} component={MePage} />
								<Route
									path={routeMapPath.article.index}
									render={() => (
										<Switch>
											<Route
												exact={true}
												path={routeMapPath.article.home}
												component={ArticleIndexPage}
											/>
											<Route
												exact={true}
												path={routeMapPath.article.tag}
												component={ArticleTagPage}
											/>
											<Route
												exact={true}
												path={routeMapPath.article.create}
												component={ArticleEditPage}
											/>
											<Route
												exact={true}
												path={routeMapPath.article.edit}
												component={ArticleEditPage}
											/>
											<Route
												path="*"
												render={() => {
													return <Redirect to={routeMapPath.article.home} />;
												}}
											/>
										</Switch>
									)}
								/>
								<Route
									path={routeMapPath.cat}
									exact={true}
									component={CatPage}
								/>
								<Route
									path={routeMapPath.photography}
									exact={true}
									children={<div>photography</div>}
								/>
								<Route
									path="*"
									render={() => <Redirect to={firstMenu.path} />}
								/>
							</Switch>
						</Spin>
					</Content>
					<Footer className="home-page_footer">
						<Row type="flex" align="middle" justify="center">
							<a
								href="https://github.com/BreathlessWay/blog-admin"
								target="_blank"
								rel="noopener noreferrer">
								<svg
									height="32"
									viewBox="0 0 16 16"
									version="1.1"
									width="32"
									aria-hidden="true">
									<path
										fillRule="evenodd"
										d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
								</svg>
							</a>
							&nbsp; BreathlessWay 博客管理后台系统
						</Row>
					</Footer>
				</Layout>
			</Layout>
		);
	}
}

export default RouterPage as any;
