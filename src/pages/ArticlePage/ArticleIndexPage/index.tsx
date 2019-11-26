import React, { Component, ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';
import { StoreType } from '@/store/store';

export type IArticlePagePropType = {} & Pick<
	StoreType,
	'userStore' | 'tagStore' | 'articleStore'
>;

@inject((allStore: StoreType) => ({
	userStore: allStore.userStore,
	tagStore: allStore.tagStore,
	articleStore: allStore.articleStore,
}))
@observer
class ArticlePage extends Component<IArticlePagePropType> {
	render() {
		console.log(this.props.articleStore.currentCount);
		return <div onClick={this.props.articleStore.nextPage}>a</div>;
	}
}

export default (ArticlePage as unknown) as ComponentClass;
