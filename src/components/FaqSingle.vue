<template>
    <div
        class="border border-1 border-wlgreen/30 cursor-pointer group my-3 p-4 rounded-md select-none text-base"
        @click="toggleOpen()"
    >
        <dt class="question flex justify-between">
            <div class="text-wlgreenlight font-semibold">
                {{ question }}
            </div>
            <div>
                <img
                    :src="[open ? '/img/close.svg' : '/img/open.svg']"
                    class="m-0 w-5 h-5"
                >
            </div>
        </dt>
        <dd
            class="answer leading-snug mt-2 text-wlgold"
            :class="[open ? '' : 'hidden']"
        >
            <slot></slot>
        </dd>
    </div>
</template>

<script setup>
import { ref } from 'vue';
defineProps({
    question: {
        type: String,
        required: true
    }
})

const open = ref(false)

const toggleOpen = () => {
    open.value = !open.value
}
</script>