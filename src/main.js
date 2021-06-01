/*
 * @Author: 肖锦
 * @Date: 2021-05-31 14:19:23
 * @LastEditTime: 2021-05-31 14:35:26
 * @Description: file content
 * @LastEditors: 肖锦
 */
import Vue from 'vue';
import App from './App';
import uView from 'uview-ui';
import http from '@/utils/http';

Vue.use(uView);
Vue.use(http);

Vue.config.productionTip = false;

App.mpType = 'app';

const app = new Vue({
    ...App,
});
app.$mount();

export default app;
