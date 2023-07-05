<template>
    <div>
        <label>
            <slot name="title">
                <p class="font-semibold text-md">{{ title }}</p>
            </slot>
        </label>
        <input
            class="placeholder-italic form-input w-full h-10 border mt-1 rounded px-4 bg-gray-50"
            :id="id" :value="value" :name="name" :type="type" :placeholder="placeholder" :disabled="disabled" :required="required"/>
    </div>
</template>
   
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class FormInput extends Vue {
    @Prop({ type: String, default: undefined }) readonly title?: string;
    @Prop({ type: String, default: undefined }) readonly id?: string;
    @Prop({ type: [String, Number], default: undefined }) readonly value?: string | number;
    @Prop({ type: String, default: undefined }) readonly name?: string;
    @Prop({ type: String, default: undefined }) readonly placeholder?: string;
    @Prop({ type: String, default: "text" }) readonly type!: string;
    @Prop({ type: Boolean, default: false }) readonly invalid!: boolean;
    @Prop({ type: Boolean, default: false }) readonly disabled!: boolean;
    @Prop({ type: Boolean, default: false}) readonly required!: boolean;
}

</script>