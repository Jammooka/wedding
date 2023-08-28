<template>
    <CopyBlock>
        <ElemH1
            v-if="heading"
        >
            {{ heading }}
        </ElemH1>
        <slot name="intro"></slot>
    </CopyBlock>

    <div class="prose prose-strong:text-wlgreen mx-auto mb-20 text-wlgreen text-lg">
        <dl>
            <slot></slot>
        </dl>
    </div>
</template>

<script setup>
import ElemH1 from '@/components/ElemH1.vue'
import CopyBlock from '@/components/CopyBlock.vue'

defineProps({
    heading: {
        type: String,
        required: false,
        default: ''
    }
})
</script>