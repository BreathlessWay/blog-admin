import React, { lazy } from 'react';

import { Route, RouteComponentProps, Switch, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import { Layout, Row, Spin, BackTop, Icon, message } from 'antd';

import { StoreType } from '@/store/store';

import { loginService } from '@/service/loginService';
import { getUserDetailService } from '@/service/userService';

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

const GitHubComponent = lazy(() =>
	import(
		/* webpackChunkName: "GitHubComponent" */ '@/components/common/GitHubComponent'
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

const PhotographyIndexPage = lazy(() =>
	import(
		/* webpackChunkName: "PhotographyIndexPage" */ '@/pages/PhotographyPage/PhotographyIndexPage'
	),
);

const PhotographyEditPage = lazy(() =>
	import(
		/* webpackChunkName: "PhotographyEditPage" */ '@/pages/PhotographyPage/PhotographyEditPage'
	),
);

export type RouterPagePropType = Pick<
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
class RouterPage extends React.Component<RouterPagePropType> {
	async componentDidMount() {
		const { history } = this.props;
		const hide = message.loading('加载中...', 0);
		await loginService({ history });
		await getUserDetailService();
		hide();
	}

	render() {
		const {
			homepageStore: { firstMenu, hasMenu },
			globalStore: { loading },
		} = this.props;
		return (
			<Layout>
				<Sider className="home-page_sider">
					<aside className="home-page_logo">博客管理后台</aside>
					{hasMenu && <MenuComponent />}
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
									path={routeMapPath.photography.index}
									render={() => (
										<Switch>
											<Route
												exact={true}
												path={routeMapPath.photography.home}
												component={PhotographyIndexPage}
											/>
											<Route
												exact={true}
												path={routeMapPath.photography.edit}
												component={PhotographyEditPage}
											/>
											<Route
												path="*"
												render={() => {
													return (
														<Redirect to={routeMapPath.photography.home} />
													);
												}}
											/>
										</Switch>
									)}
								/>
								<Route
									path={routeMapPath.statistics}
									exact={true}
									children={<div>网站统计，等有数据和访问量之后再做</div>}
								/>
								<Route
									path="*"
									render={() => <Redirect to={firstMenu.path} />}
								/>
							</Switch>
							<BackTop>
								<aside className="back-top">
									<Icon type="up" />
								</aside>
							</BackTop>
						</Spin>
					</Content>
					<Footer className="home-page_footer">
						<Row type="flex" align="middle" justify="center">
							<GitHubComponent />
							&nbsp; BreathlessWay 博客管理后台系统
						</Row>
					</Footer>
				</Layout>
			</Layout>
		);
	}
}

export default RouterPage as any;
