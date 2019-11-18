import React from "react";
import { inject, observer } from "mobx-react";

import { StoreType } from "@/store/store";
import { RouteComponentProps } from "react-router-dom";

export type ILoginPagePropType = StoreType & RouteComponentProps

@inject("userStore")
@observer
export default class LoginPage extends React.Component<ILoginPagePropType> {

}
