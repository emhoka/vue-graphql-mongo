<template>
   <div class="flex bg-indigo-500 flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0 bg-white">
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">
        Reset Password
        </h6>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form>
        <div class="flex flex-wrap">
            <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
                <FormInput  name="email" id="email" type="email" title="Enter Your Email" placeholder="Enter Your Email"
                        required="true" /> 
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
                        <FormInput placeholder="••••••••" name="password" id="password" type="password" title="Password"
                        required="true" />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
                    <FormInput placeholder="••••••••" name="confirm-password" id="confirm-password" type="password"
                        title="Confirm Password" required="true" />
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <ButtonComponent type="submit" buttonText="Cancel" />
        <ButtonComponent type="submit" buttonText="save" />
      </div>
    </div>
  </div></div></div>
     
    </template>
    
    <script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import FormInput from '@/components/FormInput.vue';
    import ButtonComponent from '@/components/ButtonComponent.vue';
    import TextaAreaComponent from '@/components/TextaAreaComponent.vue';
    
    @Component({
        components:{
            FormInput,
            ButtonComponent,
            TextaAreaComponent
        }
    })
    export default class ResetPassword extends Vue {
      @Prop() private msg!: string;
    }
    </script>
    
    