<template>
  <div id="app">
    <SignUpPage />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SignUpPage from './views/SignUpPage.vue';

@Component({
  components: {
    SignUpPage
  },
})
export default class App extends Vue {}
</script>

