<template>
    <div class="flow-root">
        <div class="relative pb-8" v-for="(event, eventIdx) in timeline" :key="eventIdx">
            <span
                v-if="eventIdx !== timeline.length - 1"
                class="absolute left-8 top-4 -ml-px h-full w-0.5 bg-gray-200"
                aria-hidden="true"
            />
            <div class="relative flex space-x-3">
                <div>
                    <span
                        class="bg-gray-100 h-8 w-16 rounded-full flex items-center justify-center ring-8 ring-white"
                    >
                        {{ event.time }}
                    </span>
                </div>
                <div class="flex-1 pt-1.5">
                    {{ event.content }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    timeline: {
        type: Object,
        required: true
    }
})
</script>