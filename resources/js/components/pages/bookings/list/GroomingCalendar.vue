<template>
  <div class="row mt-4">
      <div class="col-md-12">
          <div class="card">
              <div class="card-header">
                  <h4>Grooming - Calendar View</h4>
              </div>
              <div class="card-body">
                  <div class="row" v-if="is_loading">
                      <div class="col-md-6 mt-2">
                          <skeleton width="100%" height="20px"/>
                      </div>
                      <div class="col-md-8 mt-2">
                          <skeleton width="100%" height="20px"/>
                      </div>
                      <div class="col-md-12 mt-2">
                          <skeleton width="100%" height="600px"/>
                      </div>
                  </div>

                  <div class="row" v-if="!is_loading">
                      <div class="col-12">
                          <FullCalendar :options="calendarOption" />
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import interectionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

export default {
    components:{
        FullCalendar,
    },
    data(){
        return{
            is_loading: true,
            calendarOption:{
                plugins: [dayGridPlugin,interectionPlugin,listPlugin],
                initialView: 'dayGridMonth',
                themeSystem: "standard",
                droppable: false,
                events:[],
                eventTimeFormat:{
                    hour: 'numeric',
                    minute: '2-digit',
                    meridiem: 'short'
                },
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,listMonth'
                },
            }
        }
    },
    created(){
        this.getCalendarData();
    },
    methods:{
        getCalendarData(month = null){

            axios.get("/admin/api/grooming-list-calendar-data")
            .then(resp=>{
                return resp.data;
            }).then(data=>{
                this.calendarOption.events = data;
                this.is_loading = false;
            }).catch(err=>{
                console.error(err.response.data);
            })

            
        },
    }
}
</script>

<style>
.fc-list-table .fc-event{
    background-color: rgb(238, 238, 238);
    color: black !important;
}
.fc-list-event-title{
    text-align: left;
}
.fc-list-day-cushion{
    background-color: teal !important;
    font-size: 20px;
    color: white;
    font-weight: bold;
}
</style>