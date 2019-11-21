import React from "react";
import { render } from "react-dom";

import PreviewImageComponent from "./PreviewImageComponent";

import { close } from "@/components/common/PreviewImageComponent/close";

const preview = {
  show(url: string, maskClose = true) {
    if (url.trim()) {
      const el = document.createElement("div");
      el.id = "preview";
      document.body.append(el);
      render(
        <PreviewImageComponent imageUrl={url} maskClose={maskClose} />,
        el
      );
    }
  },
  hide() {
    close();
  }
};

export default preview;
