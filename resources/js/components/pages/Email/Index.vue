<template>
  <div class="row">
      <div class="col-12">

          <div class="card" v-if="createMode==true">
            <div class="card-header d-flex justify-content-end">
                <button type="button" @click="createMode=false;" class="btn btn-danger">Cancel</button>
            </div>
            <div class="card-body">
                <h3 class="text-muted text-center">Email Setup</h3>
                <form @submit.prevent="submitForm">
                    <div class="row justify-content-center mt-5">
                        <div class="col-md-7 mt-4">
                            <p class="mb-4 text-muted"><strong>HOST INFO</strong></p>
                            <label for="">HOST NAME</label>
                            <input type="text" class="form-control" placeholder="example.com" v-model="form.host">
                        </div>
                        <div class="col-md-7 mt-4">
                            <label for="">PORT NUMBER</label>
                            <input type="number" class="form-control" placeholder="e.g: 465" v-model="form.port">
                        </div>
            
                        <div class="col-md-7 mt-4">
                            <label for="">MAIL DRIVER (SMTP Recommended)</label>
                            <select class="form-control" v-model="form.driver">
                                <option value="smtp">SMTP</option>
                                <option value="mailgun">MAIL GUN</option>
                                <option value="sendmail">SEND MAIL</option>
                                <option value="postmark">POST MARK</option>
                            </select>
                        </div>

                        <div class="col-md-7 mt-4">
                            <label for="">ENCRYPTION TYPE (SSL Recommended | Use 'TLS' for GMAIL)</label>
                            <select class="form-control" v-model="form.encryption">
                                <option value="ssl">SSL</option>
                                <option value="tls">TLS</option>
                            </select>
                        </div>

                        <div class="col-md-7 mt-4">
                            <p class="mb-4 text-muted"><strong>USER CREDENTIALS</strong></p>
                            <label for="">USER EMAIL</label>
                            <input type="email" class="form-control" placeholder="youruser@name.com" v-model="form.user" autocomplete="off">
                        </div>
                        <div class="col-md-7 mt-4">
                            <label for="">USER PASSWORD</label>
                            <input type="password" class="form-control" placeholder="Type your password" v-model="form.pass" autocomplete="off">
                        </div>
                        <div class="col-md-7 mt-4">
                            <label for="">SENDER EMAIL (Optional)</label>
                            <input type="email" class="form-control" placeholder="youruser@name.com" v-model="form.sender_email">
                        </div>
                        <div class="col-md-7 mt-4">
                            <label for="">SENDER NAME (Optional)</label>
                            <input type="text" class="form-control" placeholder="youruser@name.com" v-model="form.sender_name">
                        </div>

                        <div class="col-md-7 mt-4">
                            <input type="checkbox" id="defaultMail" v-model="form.defaultMail">
                            <label for="defaultMail" class="ml-2">Set as default email</label>
                        </div>
                        <div class="col-md-7 mt-4 mb-4 text-center">
                            <Button :form="form" class="btn btn-primary w-100">SAVE</Button>
                        </div>
                        <div class="col-md-7 mt-4 mb-4">
                            <AlertErrors :form="form" message="Something went wrong" />
                        </div>
                    </div>
                </form>
            </div>
          </div>

          <div class="card" v-if="createMode==false">
              <div class="card-header d-flex justify-content-between">
                  <h4>Email Accounts</h4>
                  <button type="button" @click="createMode=true;" class="btn btn-primary">Add new <i class="fas fa-plus"></i></button>
              </div>
              <div class="card-body">
                  <div class="table-responsive">
                      <table class="table table-stripped">
                          <thead>
                              <tr>
                                  <th></th>
                                  <th>USER NAME</th>
                                  <th>HOST</th>
                                  <th>PORT</th>
                                  <th>ENCRYPTION TYPE</th>
                                  <th>SENDER NAME</th>
                                  <th>SENDER EMAIL</th>
                                  <th>DEFAULT</th>
                                  <th>ACTION</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr v-if="is_loading">
                                 <td colspan="8">
                                     <skeleton v-for="n in 10" :key="n" class="mt-2" width="100%" height="40px" />
                                 </td>
                              </tr>

                              <template v-else>
                                  <tr v-for="(email,i) in emails" :key="i">
                                      <td>{{ i+1 }}</td>
                                      <td class="text-muted"><strong>{{ email.user_name }}</strong></td>
                                      <td>{{ email.host }}</td>
                                      <td>{{ email.port }}</td>
                                      <td>{{ email.encryption }}</td>
                                      <td>{{ email.sender_name }}</td>
                                      <td>{{ email.sender_email }}</td>
                                      <td>
                                        <span v-if="email.default_email" class="text-success"><i class="fas fa-check"></i> Default</span>
                                        <button @click="setDefault(email.id,i)" v-else class="btn btn-sm btn-primary">Set Default</button>
                                      </td>
                                      <td>
                                          <router-link :to="{name: 'admin-email.edit',params:{id: email.id}}" class="btn btn-sm btn-warning"><i class="fas fa-edit"></i></router-link>
                                          <button class="btn btn-sm btn-danger" @click="deleteEmail(email.id,i)"><i class="fas fa-trash"></i></button>
                                      </td>
                                  </tr>
                              </template>
                              
                          </tbody>
                      </table>
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
            emails: [],
            is_loading: true,
            createMode: false,
            form: new Form({
                host: '',
                port: '',
                driver: 'smtp',
                encryption: 'ssl',
                user: '',
                pass: '',
                sender_name: '',
                sender_email: '',
                defaultMail: false,
            }),
        }
    },
    methods: {
        getMails(){
            axios.get("/admin/api/get-emails").then(resp=>{
                return resp.data;
            }).then(data=>{
                this.emails = data;
                this.is_loading = false;
            }).catch(err=>{
                console.error(err.response.data);
            })
        },
        submitForm(){
            this.form.post("/admin/api/create-email-setup").then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "ok"){
                    swal.fire("Email Account Added",data.msg,"success").then(()=>{
                        this.emails.unshift(data.data);
                        this.form.reset();
                        this.createMode = false;
                    });
                }
            }).catch(err=>{
                console.error(err.response.data);
            })
        },
        deleteEmail(id,index){
            axios.post("/admin/api/delete-email",{
                id: id
            }).then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "ok"){
                    swal.fire("Item deleted",data.msg,"success");
                    this.emails.splice(index,1);
                }
            }).catch(err=>{
                console.error(err.response.data);
            })
        },
        setDefault(id,index){
            axios.post("/admin/api/set-default-email",{
                id: id
            }).then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "ok"){
                    this.emails.forEach((item,i)=>{
                        item.default_email = 0;
                    });
                    this.emails[index].default_email = 1;
                }
            }).catch(err=>{
                console.error(err.response.data);
            })
        }
    },
    created() {
        this.getMails();
    },
}
</script>

<style>

</style>