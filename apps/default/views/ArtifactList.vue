<script setup>
import { ref } from 'vue';
import { onMounted} from "vue";
import {api} from "../../../boot/axios";



const isGridView = ref(true);
const toggleView = () => {
 isGridView.value = !isGridView.value;
};



const artifacts = ref({});
function fetchArtifact() {
  api
    .get(`/service/0/marketplace/artifact/getall`)
    .then((response) => {
      console.log(response.data)
      artifacts.value = response.data;
    })
    
    .catch((error) => {
      console.log(error);
    });
}


function ispublic(ispublic){
    if (ispublic==true){
      return 'Public'
    }
    else{
      return 'Private'
    }
}
 
 
onMounted(() => {
  fetchArtifact();
});

</script>

<template>
  
  <q-card><q-card-section>
    <div class="row items-center">
    <div class="col" style="font-size: x-large;text-align: left;">Search Results 1-10</div>
        <div class="col" style="text-align: end;">
  <q-btn  @click="toggleView" class="q-ml-right" outline round icon="list" :align="right">
   
    <i v-if="isGridView" class="fas fa-th"></i>
    <i v-else class="fas fa-list"></i>
  
  </q-btn>
        </div>
    </div>
</q-card-section>

</q-card><br />
    <div v-if="isGridView" class="product-grid" >
      <div
      v-for="artifact in artifacts"
        v-bind:key="artifact.artifactid"
        class="product-card"
      >
      
      <h4>{{ artifact.artifactName }}</h4>
      <p><strong>{{ ispublic(artifact.public) }}</strong></p>
      <p>Downloads: {{ artifact.downloaded }}</p>
      <p>Category: {{ artifact.artifactType.artifactName }}</p>
      
        <p>Description: {{ artifact.artifactDescription }}</p>
        <router-link :to="{name:'artifactdetailspage', params:{id:artifact.artifactid}}">
        <q-btn class="view-detail-button" text-center @click="viewArtifactDetails(artifact.artifactid)"
           color="grey" position: absolute auto-fill>View Details</q-btn
        >
      </router-link>
      </div>
    </div>
    <div v-else class="product-list">
      <j-card>
      <div
      
        v-for="artifact in artifacts"
        v-bind:key="artifact.artifactid"
        class="product-item">
        <div class="product-item-header">
          <h3>{{ artifact.artifactName }}</h3>
          <h6><strong>{{ ispublic(artifact.public) }}</strong></h6>
          <p><q-btn class="view-detail-button" text-center @click="viewArtifactDetails(artifact.artifactid)"
          v-bind:text-color="white" color="grey" position: absolute auto-fill>View Details</q-btn
        ></p>
        </div>
        <div class="product-item-downloads">
          <p>Downloads: {{ artifact.downloaded }}</p>
        </div>
        <div class="product-item-ratings">
          <p>Ratings: {{ artifact.ratings }}</p>
        </div>
        <div class="product-item-description">
          <p>Description: {{ artifact.artifactDescription }}</p>
        </div>
        
      </div>
    
    </j-card>
    </div>
 
</template>

<style>


.view-detail-button{
  align-items: center;
  
}

.h6 {
  color:rgb(210, 95, 1);
}
.product-grid {
  display: grid;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  grid-template-columns: repeat(auto-fill,minmax(250px, 1fr));
  gap: 20px;
  color: rgb(220, 218, 218);
  
}
.product-card {
  border: 2px solid rgb(1, 1, 1);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  background-color: rgb(16, 16, 16);
}
.product-card:hover {
  transform: scale(1.05);
  border: 2px solid rgb(210, 95, 1);
}
.product-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
.product-details {
  padding: 16px;
}
.product-name {
  font-size: 1.2em;
  margin-bottom: 8px;
}
.product-description {
  color: #040404;
  margin-bottom: 12px;
}
.product-meta {
  display: flex;
  justify-content: space-between;
  color: #480000;
}
.product-list {
  display: list-item;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #e9e9e9;
  
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  

}

.product-item {
  border: 2px solid #161616;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
  background-color: rgb(53, 53, 53);
  transition: transform 0.3s ease-in-out;
}
.product-item:hover {
  transform: scale(1.03);
  border: 2px solid rgb(210, 95, 1);
}
.product-item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background-color: rgb(17, 17, 17);
}
.product-downloads {
  color: rgb(0, 18, 78);
}
.my-card {
  
}
</style>
