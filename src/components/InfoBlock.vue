<template>
    <div class="border border-1 border-wlgreen/30 cursor-pointer group my-3 rounded-md select-none"
        @click="toggleOpen()"
    >
        <dt
            class="bg-white p-4 flex justify-between sticky top-0 z-10"
            :class="[open ? 'border-b rounded-t-md' : 'rounded-md']"
        >
            <div class="text-wlgreenlight font-semibold">
                {{ heading }}
            </div>
            <div>
                <component
                    :is="open ? ChevronUpIcon : ChevronDownIcon"
                    class="m-0 w-5 h-5"
                />
            </div>
        </dt>
        <dd
            class="p-4 leading-snug text-base"
            :class="[open ? '' : 'hidden']"
        >
            <slot></slot>
        </dd>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import {
    ChevronDownIcon,
    ChevronUpIcon,
} from '@heroicons/vue/24/outline';
defineProps({
    heading: {
        type: String,
        required: true
    }
})

const open = ref(false)

const toggleOpen = () => {
    open.value = !open.value
}
</script>