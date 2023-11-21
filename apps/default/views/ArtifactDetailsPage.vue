<script setup>
import { onMounted, ref } from "vue";
import {api} from "../../../boot/axios";
 


// export const artifactIdGlobal=props.id

const props=defineProps({
  
  createdBy: String,
        createdDt: String,
        modifiedBy: String,
        modifiedDt: String,
        id: Number,
        artifactDescription: String,
        artifactName: String,
        documentation: String,
        status: String,
        downloaded: String,
        artifactType: {
            createdBy: String,
            createdDt: String,
            modifiedBy: String,
            modifiedDt: String,
            artifactTypeId: String,
            artifactName: String,
            status: String
        },
        public: String
})


const artifacts = ref({});
let tab= ref('one')
function fetchArtifact() {
  api
    .get(`/service/0/marketplace/artifact/getbyid/${props.id}`)
    .then((response) => {
      artifacts.value = response.data;
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
 
onMounted(() => {
  fetchArtifact();
});



</script>

<template>
  <!-- Breadcrumbs here -->
<div class="q-pa-md q-gutter-sm">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Home" icon="home" />
      <q-breadcrumbs-el label="Apps" icon="widgets"/>
    </q-breadcrumbs>
</div>

<div class="flex-container">
    <!-- <q-responsive :ratio="4/3" class="col" style="max-height: 500px"> -->
    <!-- <q-card class="my-card"> -->
{{ props.id }}
<!-- <j-row> -->
  <!-- IMAGE of artifact -->
  <div style="flex-grow: 2">
          <!-- <j-column size="x-small"> -->
                  <!-- <q-card-section> -->
                  <img
                    src="..\..\..\assets\Android_robot.svg.png"
                    :ratio="1/1"
                    style="border-radius: 50%; width: 70px;"
                  />
              <!-- </q-card-section> -->
          <!-- </j-column> -->
        </div>

<!--  Artifact details starting from here -->
<div style="flex-grow: 8">
          <!-- <j-column size="x-small"> -->

                <!-- <q-card-section> -->
                  <p>
                     <span style="font-size: 30px;"> {{ artifacts.artifactName }}</span> |  <q-badge outline align="middle" color="teal">
        v2.0.0
      </q-badge>
                  </p>
                <!-- </q-card-section> -->
                <!-- <q-card-section> -->
                  <p style="font-size: 15px;">Artifact Type | <router-link :to="{name:'reviewratingspage',params:{id:artifacts.artifactid}}"> Reviews </router-link> | downloads | Free</p>
              <!-- </q-card-section> -->
              <q-btn unelevated rounded color="primary" label="Download" />

              <q-tabs v-model="tab" class="text-teal">
                  <q-tab label="Overview" name="one" />
                  <q-tab label="Version History" name="two" />
                  <q-tab label="Author" name="three" />
                  <q-tab label="Metadata" name="four" />
                </q-tabs>

                <q-separator />

                <q-tab-panels v-model="tab" animated>
                  <q-tab-panel name="one">
                    The QCard component is a great way to display important pieces of grouped content.
                  </q-tab-panel>

                  <q-tab-panel name="two">
                    With so much content to display at once, and often so little screen real-estate,
                    Cards have fast become the design pattern of choice for many companies, including
                    the likes of Google and Twitter.
                  </q-tab-panel>
                  <q-tab-panel name="three">
                    <p>Name: John Doe</p>
                    <p>Company: LTIMINDTREE</p>
                    <p>Role: Software Engineer</p>
                  </q-tab-panel>
                  <q-tab-panel name="four">
                    METADATA
                  </q-tab-panel>
                </q-tab-panels>

              <!-- </j-column> -->
  </div>
<!-- </j-row> -->
<!-- </q-card> -->
<!-- </q-responsive> -->
</div>  

</template>

<style scoped>
.flex-container {
  display: flex;
  align-items: stretch;
  background-color: #f1f1f1;
  padding: 50px;
}

.flex-container > div {
  /* background-color: DodgerBlue; */
  /* color: white; */
  margin: 30px;
  /* text-align: ce nter; */
  line-height: 5px;
  font-size: 10px;
}
</style>
 