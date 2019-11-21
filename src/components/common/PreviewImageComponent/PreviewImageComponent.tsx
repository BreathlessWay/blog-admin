import React, { FC } from "react";

import { close } from "@/components/common/PreviewImageComponent/close";

import "./style.scss";

export type IPreviewImageComponentPropType = {
	imageUrl: string
	maskClose: boolean
}

const PreviewImageComponent: FC<IPreviewImageComponentPropType> = (props) => {
	const {imageUrl, maskClose} = props;
	return <article
		className="preview-image"
		onClick={
			maskClose ? close : () => {
			}}
	>
		<section className="preview-image_wrap">
			<img src={imageUrl} alt="" onClick={e => e.stopPropagation()}/>
		</section>
	</article>;
};

export default PreviewImageComponent;
