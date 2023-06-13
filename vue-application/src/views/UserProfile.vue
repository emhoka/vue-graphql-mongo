<template>
    <div class="min-h-screen p-6 bg-indigo-500 flex items-center justify-center">
      <div class="container max-w-screen-lg mx-auto">
        <div>
          <div class="bg-gray-50 rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            
          <h2 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-3">User Profile</h2>

          <hr class="mb-6 border-b-1 border-blueGray-300">
          <h2 class="font-semibold text-xl text-gray-600 mt-3">Eunice Mhoka</h2>
          <p class="text-gray-500 mb-6">Last Modified on </p>

          <hr class="mb-10 border-b-1 border-blueGray-300">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div class="text-gray-600">
                <p class="font-medium text-lg">Personal Details</p>
              </div>

              <div class="lg:col-span-2">
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">

                  <div class="md:col-span-5">
                    <FormInput name="email" id="email" type="email" title="Email Address" required="true" />
                  </div>

                  <div class="md:col-span-5">
                    <FormInput name="firstname" id="firstname" type="text" title="First Name" required="true" />
                  </div>

                  <div class="md:col-span-3">
                    <FormInput name="lastname" id="lastname" type="text" title="Last Name" required="true" />
                  </div>

                  <div class="md:col-span-2">
                    <FormInput name="job" id="job" type="text" title="Job title" required="true" />
                  </div>
                </div>
              </div>
            </div>
            <hr class="mt-8 mb-8 border-b-1 border-blueGray-300">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div class="text-gray-600">
                <p class="font-medium text-lg">Contact Information</p>
              </div>

              <div class="lg:col-span-2">
                <div class="flex flex-wrap">
              <div class="w-full lg:w-12/12 ">
                <div class="relative w-full mb-3">
                  <FormInput name="phone" id="phone" type="text" title="Phone" required="true" />
                </div>
              </div>
              <div class="w-full lg:w-4/12">
                <div class="relative w-full mb-3">
                  <FormInput name="city" id="city" type="text" title="City" required="true" />
                </div>
              </div>
              <div class="w-full lg:w-4/12 px-4">
                <div class="relative w-full mb-3">
                  <FormInput name="country" id="country" type="text" title="Country" required="true" />
                </div>
              </div>
              <div class="w-full lg:w-4/12">
                <div class="relative w-full mb-3">
                  <FormInput name="zipcode" id="zipcode" type="text" title="Zip Code" required="true" />
                </div>
              </div>
            </div>
              </div>
            </div>


            <hr class="mt-8 mb-8 border-b-1 border-blueGray-300">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div class="text-gray-600">
                <p class="font-medium text-lg">About Me</p>
              </div>
            <div class="lg:col-span-2">
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">

                  <div class="md:col-span-5">
                  <TextaAreaComponent name="aboutme" id="aboutme" placeholder="About me" title="About Me" />
                  </div>

                  <div class="md:col-span-5 text-right">
                    <div class="inline-flex items-end">
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
</template>
    
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import FormInput from '@/components/FormInput.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import TextaAreaComponent from '@/components/TextaAreaComponent.vue';

@Component({
  components: {
    FormInput,
    ButtonComponent,
    TextaAreaComponent
  }
})
export default class UserProfile extends Vue {
  @Prop() private msg!: string;
}
</script>
    
    