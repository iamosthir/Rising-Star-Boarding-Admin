<template>
  <div class="row">
      <div class="col-md-12">
          <div class="card">
              <div class="card-header">
                  <h4>On Progress Boarding - Calendar view</h4>
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
                      <div class="col-md-12">
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

export default {
    components:{
        FullCalendar
    },
    data(){
        return {
            is_loading: true,
            calendarOption:{
                plugins: [dayGridPlugin,interectionPlugin],
                initialView: 'dayGridMonth',
                themeSystem: "standard",
                droppable: false,
                events:[
                ],
                eventTimeFormat:{
                    hour: 'numeric',
                    minute: '2-digit',
                    meridiem: 'short'
                },
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth'
                },
                eventClick: (info)=>{
                    swal.fire({
                        title: "Booking Info",
                        icon: "info",
                        showCancelButton: true,
                        confirmButtonText: `View Info`,
                        cancelButtonText: 'Close',
                        html:`
                        <div class="color-code-box" style="background-color: ${info.event.backgroundColor}"></div>
                        <p class="text-left">Date : ${info.event.extendedProps.dateRange}</p>
                        <div class="table-responsive mt-1">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Pet Name</th>
                                        <th>Kennel ID</th>
                                    </tr>
                                </thead>
                                <tbody>
                                ${info.event.extendedProps.html}
                                </tbody>
                            </table>
                        </div>
                        `,
                    }).then(res=>{
                        if(res.isConfirmed){
                            this.$router.push({
                                name: "boarding.edit",
                                params:{
                                    id: info.event.id,
                                }
                            });
                        }
                    });
                }
            }
        }
    },
    created(){
        this.getBoardingEvents();
    },
    methods:{
        getBoardingEvents(){
            axios.get("/admin/api/get-boarding-events").then(resp=>{
                return resp.data;
            }).then(data=>{
                this.calendarOption.events = data;
                this.is_loading= false;
            }).catch(err=>{
                console.error(err.response.data);
            })
        }
    }
}
</script>

<style>

</style>