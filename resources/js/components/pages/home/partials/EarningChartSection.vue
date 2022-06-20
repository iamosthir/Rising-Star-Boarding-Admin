<template>
  <div class="section mt-5">
      <div class="row" v-if="is_loading">
          <div class="col-md-12">
              <skeleton class="shadow" width="100%" height="600px"/>
          </div>
      </div>
      <!--  -->
      <div class="row" v-if="!is_loading">
          <div class="col-md-12">
              <div class="card">
                  <div class="card-header">
                      <h4>Earing Statistics (Including Grooming & Boardings) - {{ selectedYear }}</h4>
                  </div>
                  <div class="card-body">
                      <div class="row">
                          <div class="col-md-3">
                              <label for="">Filter Chart By Year</label>
                              <select class="form-control" v-model="selectedYear" @change="updateChart">
                                  <option :value="selectAbleYears">{{ selectAbleYears }}</option>
                                  <option v-for="(year,i) in 4" :key="i" :value="selectAbleYears-year">{{ selectAbleYears-year }}</option>
                              </select>
                          </div>
                      </div>
                      <apexchart type="bar" :options="chartOptions" :series="series" height="600px" />
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import VueApexChart from "vue-apexcharts";
export default {
    components:{
        "apexchart" : VueApexChart
    },
    data(){
        return{
            is_loading: true,
            chartOptions:{
                chart:{
                    id: "chart"
                },
                xaxis:{
                    categories:["Jan","Feb","Mar","Apr","May","Jun", "Jul", "Aug","Sept","Oct" ,"Nov","Dec"]
                },
            },
            series:[],
            selectedYear: new Date().getFullYear(),
            selectAbleYears : new Date().getFullYear(),
        }
    },
    methods:{
        getEaringChartData(){
            axios.get("/admin/api/get-earning-chart-info",{
                params:{
                    year: this.selectedYear
                }
            }).then(resp=>{
                return resp.data;
            }).then(data=>{
                this.series.push(data);
                this.is_loading = false;
            }).catch(err=>{
                console.error(err.response.data);
            });
        },
        updateChart(){
            this.series.splice(0,1);
            this.getEaringChartData();
        }
    },
    created(){
        this.getEaringChartData();
    }
}
</script>

<style>

</style>