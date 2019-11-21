import React, { ChangeEvent, ComponentClass } from "react";
import { inject, observer } from "mobx-react";

import { Row, Col, Input, Typography } from "antd";
import CommonWrapComponent from "@/components/common/CommonWrapComponent";
import CommonGap from "@/components/common/CommonGap";

import UserStore from "@/store/UserStore";

import "./style.scss";

const { TextArea } = Input;

const { Text } = Typography;

export type IMottoComponentPropType = {
  userStore: UserStore;
};

export type IMottoComponentStateType = Readonly<{
  enError: boolean;
  zhError: boolean;
  introError: boolean;
}>;

@inject("userStore")
@observer
class MottoComponent extends React.Component<
  IMottoComponentPropType,
  IMottoComponentStateType
> {
  readonly state = {
    enError: false,
    zhError: false,
    introError: false
  };

  handleEdit = () => {
    const { en, zh, intro } = this.props.userStore.userDetail;
    if (en.trim() && zh.trim() && intro.trim()) {
      this.setState({
        enError: false,
        zhError: false,
        introError: false
      });
      // 提交更新
      return true;
    }
    this.setState({
      enError: !en.trim(),
      zhError: !zh.trim(),
      introError: !intro.trim()
    });
    return false;
  };

  handleChangeEn = (e: ChangeEvent<HTMLInputElement>) => {
    this.props.userStore.setMotto({
      key: "en",
      value: e.target.value
    });
  };

  handleChangeZh = (e: ChangeEvent<HTMLInputElement>) => {
    this.props.userStore.setMotto({
      key: "zh",
      value: e.target.value
    });
  };

  handleChangeIntro = (e: ChangeEvent<HTMLTextAreaElement>) => {
    this.props.userStore.setMotto({
      key: "intro",
      value: e.target.value
    });
  };

  render() {
    const { en, zh, intro } = this.props.userStore.userDetail;
    const { enError, zhError, introError } = this.state;
    return (
      <CommonWrapComponent
        title="菜单栏"
        handleEdit={this.handleEdit}
        render={isEditing => (
          <Row>
            <Col>
              <Text>短句：</Text>
              <CommonGap size="sm" />
              <Input
                placeholder="请输入短句"
                allowClear={true}
                onChange={this.handleChangeEn}
                value={en}
                disabled={!isEditing}
                maxLength={20}
              />
            </Col>
            <Col>{enError && <Text type="danger">短句不能为空</Text>}</Col>
            <Col>
              <CommonGap size="sm" />
              <Text>座右铭：</Text>
              <CommonGap size="sm" />
              <Input
                placeholder="请输入座右铭"
                allowClear={true}
                onChange={this.handleChangeZh}
                value={zh}
                maxLength={20}
                disabled={!isEditing}
              />
            </Col>
            <Col>{zhError && <Text type="danger">座右铭不能为空</Text>}</Col>
            <Col>
              <CommonGap size="sm" />
              <Text>简介：</Text>
              <CommonGap size="sm" />
              <TextArea
                placeholder="请输入简介"
                onChange={this.handleChangeIntro}
                value={intro}
                disabled={!isEditing}
                maxLength={200}
                autoSize={true}
              />
            </Col>
            <Col>{introError && <Text type="danger">简介不能为空</Text>}</Col>
          </Row>
        )}
      />
    );
  }
}

export default (MottoComponent as unknown) as ComponentClass;
