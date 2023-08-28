<template>
    <div class="prose prose-p:mt-0 prose-p:mb-4 mx-auto mb-16 text-wlgreen text-lg">
        <ElemH1
            v-if="heading"
        >
            {{ heading }}
        </ElemH1>
        <slot name="intro"></slot>
        <dl>
            <slot></slot>
        </dl>
    </div>
</template>

<script setup>
import ElemH1 from '@/components/ElemH1.vue'

defineProps({
    heading: {
        type: String,
        required: false,
        default: ''
    }
})
</script>