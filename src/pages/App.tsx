import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "mobx-react";

import FullLoadingComponent from "@/components/FullLodaingComponent";
import HomePage from "./HomePage";

import store from "@/store";

const App: React.FC = () => {
	return (
		<Suspense fallback={<FullLoadingComponent/>}>
			<Provider {...store}>
				<BrowserRouter>
					<Switch>
						<Route exact={true} path="/login" children={<div>login</div>}/>
						<Route component={HomePage}/>
					</Switch>
				</BrowserRouter>
			</Provider>
		</Suspense>
	);
};

export default App;

