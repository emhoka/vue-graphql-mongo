<template>
    <button
        class="w-full text-white bg-indigo-500   focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        :id="id" :name="name" :type="type"  :disabled="disabled" @click="$emit('click')">
        {{ buttonText }}
</button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class ButtonComponent extends Vue {
@Prop({ type: String, default: undefined }) readonly buttonText?: string;
@Prop({ type: String, default: undefined }) readonly id?: string;
@Prop({ type: String, default: undefined }) readonly name?: string;
@Prop({ type: String, default: "text" }) readonly type!: string;
@Prop({ type: Boolean, default: false }) readonly disabled!: boolean;
}

</script>