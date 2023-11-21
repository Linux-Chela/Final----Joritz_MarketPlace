<template>

  <form >
    <p>
      Name:
      <input type="text" required placeholder="name" v-model="model.reviewRating.createdBy">
    </p>
    <p>
      modified By:
      <input type="text" required v-model="model.reviewRating.modifiedBy">
    </p>
    <p>
        review:
      <input type="text" required v-model="model.reviewRating.rating">
    </p>
    <p>
        rating:
      <input type="number" required v-model="model.reviewRating.review">
    </p>
    <p>
        User name:
      <input type="text" required v-model="model.reviewRating.userName">
    </p>
    <p>
        User mail:
      <input type="text" placeholder="email" required v-model="model.reviewRating.userMail">
    </p>
   
    <router-link :to="{name:'reviewratingspage'}">
        <button type="submit" v-on:click="formSubmit()">Submit</button><br><br>
    </router-link>

    
    

  </form>
  
</template>

<script setup>

import { ref,onMounted } from 'vue';
import {api} from "../../../boot/axios";

/*
create api json input
{
  "createdBy": "vikas",
  "modifiedBy": "pradhan",
  "rating": "hdia dasd",
  "review": 2,
  "userName": "vikas",
  "userMail": "hehe",
  "artifact": {
    
    "artifactid": 0,
    
    "public": true
  },
  "userPublic": true
}
*/
const model = ref({reviewRating:{
  createdBy: "",
  modifiedBy: "",
  rating: "",
  review: 5,
  userName: "",
  userMail: "",
  artifact: {
    
    artifactid: 0,
    
    public: true
  },
  userPublic: true
}})


const Reviews = ref({})
function fetchReviewRating(){
    axios.get(`http://localhost:8080/api/service/0/marketplace/reviewrating/getall`).then(response=>{
        console.log(response.data);
            Reviews.value=response.data;
    }).catch(error=>{
        console.log(error)
    })
}

function formSubmit(){

axios.post(`http://localhost:8080/api/service/0/marketplace/reviewrating/create`,model.value.reviewRating).then(
    function (response){
        fetchReviewRating();
    }).catch(function (error){
        console.log(error)
    });

}

onMounted(()=>{
    fetchReviewRating();
})

</script>