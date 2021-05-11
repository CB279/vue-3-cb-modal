<template>
    <transition :name="animationMask">
        <div class="--modal--mask--" v-if="toggle"></div>
    </transition>
    <transition :name="animationModal">
        <div class="--modal--" ref="box" v-if="toggle" @click="hide">
            <div class="modal-box">
                <div
                    class="modal-close"
                    v-if="close && !autoClose"
                    @click="hide()"
                >
                    <div></div>
                </div>
                <slot />
            </div>
        </div>
    </transition>
</template>

<script>
import { ref } from "vue";

export default {
    inheritAttrs: false,
    props: {
        toggle: Boolean,
        animationMask: String,
        animationModal: String,
        autoClose: Boolean,
        close: Boolean
    },
    emits: ["hide"],
    setup(props, { emit }) {
        const box = ref(null);
        const hide = e => {
            if (e && (!props.autoClose || e.target !== box.value)) return;
            emit("hide", false);
        };

        return { hide, box };
    }
};
</script>
