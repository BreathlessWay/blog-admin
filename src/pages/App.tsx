import React, { lazy, Suspense } from 'react';

import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';

import { ConfigProvider } from 'antd';
import FullLoadingComponent from '@/components/common/FullLodaingComponent';
import ErrorBoundaryComponent from '@/components/common/ErrorBoundaryComponent';

import zhCN from 'antd/es/locale/zh_CN';

import { routeMapPath } from '@/route';

import store from '@/store';

const RouterPage = lazy(() =>
	import(/* webpackChunkName: "RouterPage" */ './RouterPage'),
);
const LoginPage = lazy(() =>
	import(/* webpackChunkName: "LoginPage" */ './LoginPage'),
);

const App: React.FC = () => {
	return (
		<ErrorBoundaryComponent>
			<Suspense fallback={<FullLoadingComponent />}>
				<ConfigProvider locale={zhCN}>
					<Provider {...store}>
						<HashRouter>
							<Switch>
								<Route
									exact={true}
									path={routeMapPath.login}
									component={LoginPage}
								/>
								<Route component={RouterPage} />
							</Switch>
						</HashRouter>
					</Provider>
				</ConfigProvider>
			</Suspense>
		</ErrorBoundaryComponent>
	);
};

export default App;
