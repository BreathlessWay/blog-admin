import React from 'react';
import ReactDOM from 'react-dom';

import App from '@/pages/App';

import * as serviceWorker from './serviceWorker';

import moment from 'moment';
import 'moment/locale/zh-cn';
import { configure } from 'mobx';
import '@/utils/axios.conf';

import './style.scss';
// 默认语言为 en-US，需要设置为中文
moment.locale('zh-cn');

// 严格模式，所有observe的数据只能通过action修改
configure({ enforceActions: 'observed' });

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
