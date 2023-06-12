<template>
    <input
    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
        :id="id" :value="value" :type="type" :required="required"/>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class CheckBoxComponent extends Vue {
@Prop({ type: String, default: undefined }) readonly id?: string;
@Prop({ type: [String, Number], default: undefined }) readonly value?: string | number;
@Prop({ type: String, default: "text" }) readonly type!: string;
@Prop({ type: Boolean, default: false }) readonly invalid!: boolean;
@Prop({ type: Boolean, default: false}) readonly required!: boolean;
}

</script>