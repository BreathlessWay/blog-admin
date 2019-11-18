import React from "react";
import { Spin } from "antd";

import "./style.scss";

const FullLoadingComponent = () => {
	return <aside className='full-loading'>
		<Spin size="large"/>
	</aside>;
};

export default FullLoadingComponent;
