<template>
  <div class="section mt-5">
    <div class="row" v-if="is_loading">
        <div class="col-md-12">
            <skeleton class="shadow" width="100%" height="400px"/>
        </div>
    </div>
    <!--  -->
    <div class="row" v-if="!is_loading">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h4>Boardings</h4>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <h6 class="text-muted"><strong>Dogs Arrived Today</strong></h6>
                            <table class="table mt-4">
                                <thead style="background-color: lightblue;">
                                    <tr>
                                        <th>#</th>
                                        <th>Pet Name</th>
                                        <th>Owner</th>
                                    </tr>
                                </thead>
                                <tbody v-if="boardingData.arrivalPets.length > 0">
                                    <tr v-for="(pet,i) in boardingData.arrivalPets" :key="i">
                                        <td>
                                            <img v-if="pet.photo" :src="`/uploads/customer/${pet.customer_id}/${pet.photo}`" alt="" class="pet-round-thumb">
                                            <img v-else :src="`/images/dog-placeholder-tall.svg`" alt="" class="pet-round-thumb">
                                        </td>
                                        <td><strong>{{ pet.name }}</strong></td>
                                        <td>{{ pet.customer.first_name + " " + pet.customer.last_name }}</td>
                                    </tr>
                                </tbody>
                                <tbody v-else>
                                    <tr>
                                        <td colspan="3" class="text-center text-danger">No records found</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="col-md-6">
                            <h6 class="text-warning"><strong>Dogs Leaving Today</strong></h6>
                            <table class="table mt-4">
                                <thead style="background-color: antiquewhite;">
                                    <tr>
                                        <th>#</th>
                                        <th>Pet Name</th>
                                        <th>Owner</th>
                                    </tr>
                                </thead>
                                <tbody v-if="boardingData.leavingPets.length > 0">
                                    <tr v-for="(pet,i) in boardingData.leavingPets" :key="i">
                                        <td>
                                            <img v-if="pet.photo" :src="`/uploads/customer/${pet.customer_id}/${pet.photo}`" alt="" class="pet-round-thumb">
                                            <img v-else :src="`/images/dog-placeholder-tall.svg`" alt="" class="pet-round-thumb">
                                        </td>
                                        <td><strong>{{ pet.name }}</strong></td>
                                        <td>{{ pet.customer.first_name + " " + pet.customer.last_name }}</td>
                                    </tr>
                                </tbody>
                                <tbody v-else>
                                    <tr>
                                        <td colspan="3" class="text-center text-danger">No records found</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            is_loading: true,
            boardingData: {},
        }
    },
    methods:{
        getBoardingData(){
            axios.get("/admin/api/get-utils-boarding")
            .then(resp=>{
                return resp.data;
            }).then(data=>{
                this.boardingData = data;
                this.is_loading = false;
            }).catch(err=>{
                console.error(err.response.data);
            })
        }
    },
    created(){
        this.getBoardingData();
    }
}
</script>

<style>

</style>