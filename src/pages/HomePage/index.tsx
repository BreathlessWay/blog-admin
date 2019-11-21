import React from "react";
import { inject, observer } from "mobx-react";

import { Row, Col } from "antd";
import MenuEditComponent from "@/components/business/MenuEditComponent";
import SocialEditComponent from "@/components/business/SocialEditComponent";

import { StoreType } from "@/store/store";

@inject((allStore: StoreType) => ({
	userStore: allStore.userStore,
	homepageStore: allStore.homepageStore
}))
@observer
export default class HomePage extends React.Component {
	render() {
		return <Row>
			<Col>
				<MenuEditComponent/>
				<SocialEditComponent/>
			</Col>
		</Row>;
	}
}


