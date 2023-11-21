<template>
  <div>
    <q-drawer
      show-if-above
      bordered
      :model-value="showFilter"
      @update:model-value="updateShowFilter"
      content-style="padding: 10px"
    >
      <div>
        <h4><strong>FILTERS</strong></h4>
        <!-- Filter by Type -->
        <q-select
          v-model="selectedType"
          label="Filter by Type"
          outlined color="orange"
          :options="typeOptions"
        />
        <div><br /></div>
        <!-- Filter by Rating -->
        <q-select
          v-model="selectedartifactType"
          label="Filter by Category"
          outlined color="orange"
          :options="artifactTypeOptions"
        />
        <div><br /></div>
        <q-btn color="orange" label="Apply Filters" @click="applyFilters" />
      </div>

      <!-- <div><br /></div>
      <q-btn color="orange" label="Reset All" @click="resetFilter" /> -->
    </q-drawer>
  </div>
  
</template>

<script>
import ArtifactList from './ArtifactList.vue';
import artifacts from './ArtifactList.vue'
import {ref} from 'vue'
export default {
  data(){
    return{
    selectedType: null,
    selectedCategory: null,
    
    artifactsData:[],
    filteredData:[],
    };
  },

computed: {
  typeOptions() {
    // Extract unique types from jsonData for the filter dropdown
    // const types = Array.from(new Set(this.artifactsData.map((artifact) => artifact.public)));
    // return types.map((public) => ({ label: public, value: type }));
  },
  categoryOptions() {
    // Extract unique categories from jsonData for the filter dropdown
    const categories = Array.from(
      new Set(this.artifactsData.map((artifact) => this.artifact.artifactName))
    );
    return categories.map((artifactName) => ({ label: artifactName, value: artifactName }));
  },

},
  mounted(){
    this.artifactsData=artifacts;
    this.filteredData= this.artifacts;
  },


  methods: {

  filterData() {

    let filtered= ref([]);

    for (let i=0; i<this.jsonData.length; i++)
    {
      const item = this.jsonData[i];
     console.log(this.selectedType.label);


    if( item.type == this.selectedType.label) //( !this.selectedType || item.type === this.selectedType))

      {
        console.log("");
        filtered.value.push(item);
        // filtered.value.push(item);
      }
    }

    console.log('Filtered Data:',filtered)

    this.filteredData=filtered;

    return filteredData;
  }
}
}


 

</script>
<style scoped>
.filter-sidebar {
  padding: 16px;
  background-color: #969696;
  min-width: 300px;
}
.filter-section {
  margin-bottom: 100px;
}
h3 {
  font-size: 18px;
  margin-bottom: 8px;
}

.q-select {
  border: orange;
  align-items: center;
  width: 250px;
  height: 50px;
 
}
</style>