import React, { ChangeEvent } from "react";

import { Button, Icon } from "antd";

import "./style.scss";

export type IUploadFileComponentPropType = {
  label: string;

  accept?: string;
  disabled?: boolean;

  onUploadFile: (params: { fileUrl: string; fileName: string }) => void;
};

export default class UploadFileComponent extends React.Component<
  IUploadFileComponentPropType
> {
  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    // 通用上传文件，返回文件url和文件名
    this.props.onUploadFile({ fileUrl: "", fileName: "" });
  };

  render() {
    const { disabled = false, accept = "" } = this.props;
    return (
      <section className="upload-file">
        <Button>
          <Icon type="upload" /> {this.props.label}
        </Button>
        <input
          accept={accept}
          type="file"
          onChange={this.handleChange}
          className="upload-file_input"
          disabled={disabled}
        />
      </section>
    );
  }
}
