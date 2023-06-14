<template>
    <div>
        <label>
            <slot name="title">
                <p class="font-semibold">{{ title }}</p>
            </slot>
        </label>
      
            <textarea class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border " 
            :id="id" :value="value" :name="name" :rows="rows" :placeholder="placeholder" :disabled="disabled" :required="required"></textarea>
    </div>
</template>
   
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class TextaAreaComponent extends Vue {
    @Prop({ type: String, default: undefined }) readonly title?: string;
    @Prop({ type: String, default: undefined }) readonly id?: string;
    @Prop({ type: [String, Number], default: undefined }) readonly value?: string | number;
    @Prop({ type: String, default: undefined }) readonly name?: string;
    @Prop({ type: String, default: undefined }) readonly placeholder?: string;
    @Prop({ type: Boolean, default: false }) readonly invalid!: boolean;
    @Prop({ type: Boolean, default: false }) readonly disabled!: boolean;
    @Prop({ type: Boolean, default: false}) readonly required!: boolean;
    @Prop({ type: Number, default: 4}) readonly rows!: number;
}

</script>