import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "mobx-react";

import FullLoadingComponent from "@/components/FullLodaingComponent";

import store from "@/store";

const RouterPage = lazy(() => import(/* webpackChunkName: "RouterPage" */ "./RouterPage"));
const LoginPage = lazy(() => import(/* webpackChunkName: "LoginPage" */ "./LoginPage"));

const App: React.FC = () => {
	return (
		<Suspense fallback={<FullLoadingComponent/>}>
			<Provider {...store}>
				<BrowserRouter>
					<Switch>
						<Route exact={true} path="/login" component={LoginPage}/>
						<Route component={RouterPage}/>
					</Switch>
				</BrowserRouter>
			</Provider>
		</Suspense>
	);
};

export default App;

