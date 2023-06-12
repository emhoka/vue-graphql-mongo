<template>
    <section class=" py-1 bg-indigo-500">
<div class="w-full lg:w-8/12 px-4 mx-auto mt-6">
  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0 bg-white">
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">
          My account
        </h6>
        <button class="bg-indigo-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
          Settings
        </button>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form>
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          User Information
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
                <FormInput  name="email" id="email" type="email" title="Email Address"
                        required="true" /> 
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
                <FormInput  name="firstname" id="firstname" type="text" title="First Name"
                        required="true" /> 
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
                <FormInput  name="lastname" id="lastname" type="text" title="Last Name"
                        required="true" /> 
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
                <FormInput  name="job" id="job" type="text" title="Job title"
                        required="true" /> 
            </div>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300">

        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Contact Information
        </h6>
        <div class="flex flex-wrap">
            <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
                <FormInput  name="phone" id="phone" type="text" title="Phone"
                        required="true" />   </div>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
                <FormInput  name="city" id="city" type="text" title="City"
                        required="true" /> 
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
                <FormInput  name="country" id="country" type="text" title="Country"
                        required="true" /> 
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
                <FormInput  name="zipcode" id="zipcode" type="text" title="Zip Code"
                        required="true" /> 
            </div>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300">

        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          About Me
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
             <TextaAreaComponent 
             name="aboutme" id="aboutme" placeholder="About me" title="About Me"/>   </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</section>
     
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
    export default class UserProfile extends Vue {
      @Prop() private msg!: string;
    }
    </script>
    
    