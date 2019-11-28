import React, { lazy, Suspense } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';

import { ConfigProvider } from 'antd';

import FullLoadingComponent from '@/components/common/FullLodaingComponent';

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
		<Suspense fallback={<FullLoadingComponent />}>
			<ConfigProvider locale={zhCN}>
				<Provider {...store}>
					<BrowserRouter>
						<Switch>
							<Route
								exact={true}
								path={routeMapPath.login}
								component={LoginPage}
							/>
							<Route component={RouterPage} />
						</Switch>
					</BrowserRouter>
				</Provider>
			</ConfigProvider>
		</Suspense>
	);
};

export default App;
