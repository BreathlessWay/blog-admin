import React, { Component, ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';
import { StoreType } from '@/store/store';

export type IArticlePagePropType = {};

@inject((allStore: StoreType) => ({
	userStore: allStore.userStore,
	tagStore: allStore.tagStore,
	articleStore: allStore.articleStore,
}))
@observer
class ArticlePage extends Component<IArticlePagePropType & StoreType> {
	render() {
		console.log(this.props.articleStore.currentCount);
		return <div onClick={this.props.articleStore.nextPage}>a</div>;
	}
}

export default (ArticlePage as unknown) as ComponentClass;
