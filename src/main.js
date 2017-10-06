import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource);

Vue.http.options.root = 'https://vuehttptestserver.firebaseio.com'

Vue.http.interceptors.push((request, next) => { // intercepta todos los request hechos por VUE 
	console.log(request);
	if(request.method =='POST'){
		request.method = 'PUT';
	}
	next(response => {
		response.json = () => {return {messages: response.body}}
	});
})
new Vue({
  el: '#app',
  render: h => h(App)
})
