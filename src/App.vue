<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                	<label>Username</label>
                	<input type="text" class="form-control" v-model="user.username">
                </div>
                <div class="form-group">
                	<label>mail</label>
                	<input type="text" class="form-control" v-model="user.email">
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>
                <hr>
                <button class="btn btn-primary" @click="fetchData">Get data</button>
                <br><br>
                <ul class="list-group">
                	<li class="list-group-item" v-for="user in users">{{user.username}} - {{user.email}} </li>
                </ul>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
    	data(){
    		return{
    			user:{
    					username: '',
		    			email: ''
    				},
    				users:[]
    		}
    	},
    	methods: {
    		submit(){
    			//https://vuehttptestserver.firebaseio.com/
    			this.$http.post('https://vuehttptestserver.firebaseio.com/packData.json', this.user)
    				.then(response => {
    					console.log(response)
    				}, error =>{
    					console.log(error)
    				}); // una vez que termina 

    		},
    		fetchData(){
    			this.$http.get('https://vuehttptestserver.firebaseio.com/packData.json')
    				.then(response =>{
    					return response.json();
    					console.log(data);
    				}, error=>{
    					console.log('error')
    				})
    				.then(data => {
    					/*const resultArray = [];
    					for (let key in data){
    						resultArray.push(data[key]);
    					}
    					this.users = resultArray;*/
    					this.users = data;
    				})
    		}
    	}
    }
</script>

<style>
</style>
