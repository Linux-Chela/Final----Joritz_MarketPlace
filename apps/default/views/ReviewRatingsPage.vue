<template>

<div class="q-pa-md q-gutter-sm">
    <q-breadcrumbs>
        <q-breadcrumbs-el label="Home" icon="home" />
        <q-breadcrumbs-el label="App" icon="widgets" />
        <q-breadcrumbs-el label="Reviews" />
    </q-breadcrumbs>
</div>
<h4>User Ratings and Reviews</h4>
<j-row>
    <!-- here rating -->
    <j-column size="large">
        <p>{{rating}} OUT OF 5</p>
        <q-rating
        v-model="ratingModel"
        size="3.5em"
        color="green-5"
        icon="star_border"
        icon-selected="star"
        icon-half="star_half"

      />
      <p>{{no_of_reviews}} reviews</p>
      <j-row v-for="star in stars">
        <j-column>
            <p>{{ star }} stars</p>
        </j-column>
        <j-column>
            <q-linear-progress :value="progress" class="q-mt-md" />
        </j-column>
        <j-column>
            {{progress*100}}%
        </j-column>
        </j-row>

</j-column>

<!-- <q-separator vertical /> -->
<!-- here reviews cards -->
<j-column size="large">
    <q-btn  color="white" text-color="black">
        <router-link :to="{name:'createreviewrating'}">Write a Review </router-link>
    </q-btn>
        <q-card class="my-card" v-for="review in Reviews">
      <q-card-section>
        <p>Name:{{ review.createdBy }}</p>
        <p>Created on: {{ review.createdDt }}</p>
        <p>Rating:{{ review.rating }}</p>
        <p>Review: {{ review.review }}</p>
      </q-card-section>
    </q-card>

   
    
</j-column>
    <br>
</j-row>


<q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Your Review</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="review" autofocus @keyup.enter="prompt = false" />
        </q-card-section>

        <q-card-section>
          <div class="text-h6">Your Rating out of 5</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="rating_user" autofocus @keyup.enter="prompt = false" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Add address" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
<!-- <div>{{ Reviews }}</div> -->

</template>


<script setup>

import { onMounted, ref, defineProps } from 'vue'
import axios from "axios";


// const Reviews=[{},{},{}]
const stars=[1,2,3,4,5]
const rating=4.6
const ratingModel= rating
const Reviews = ref({})
const no_of_reviews=Object.keys(Reviews).length
const progress = 0.6

const prompt= ref(false)

const review= ref('')
const rating_user = ref('')

const props=defineProps({
  
  createdBy: String,
    createdDt: String,
    modifiedBy: String,
    modifiedDt: String,
    rId: Number,
    rating: Number,
    review: String,
    userName: String,
    userMail: String,
    artifact: {
      createdBy: String,
      createdDt:String,
      modifiedBy: String,
      modifiedDt:String,
      artifactid: Number,
      artifactDescription: String,
      artifactName: String,
      documentation: String,
      status: String,
      artifactType: {
        createdBy:String,
        createdDt: String,
        modifiedBy: String,
        modifiedDt: String,
        artifactTypeId: Number,
        status:String,
        artifactName:String
      },
      metaData: String,
      public:String
    },
    userPublic:String
})



function fetchReviewRating(){
    axios.get(`http://localhost:8080/api/service/0/marketplace/reviewrating/getbyartifactid/1`).then(response=>{
        console.log(response.data);
            Reviews.value=response.data;
        console.log(response.data);

    }).catch(error=>{
        console.log(error)
    })
}

onMounted(()=>{
    fetchReviewRating();
})

</script>