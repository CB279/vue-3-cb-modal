import { h } from "vue";
import modal from "../components/modal.vue";
import "../css/index.css";

const create = (defaultOptions) => {
    let animatonMask = "modal-ease",
        animationModal = "modal-toggle";

    if (typeof defaultOptions === "object") {
        if (typeof defaultOptions.animation === "object") {
            animatonMask = defaultOptions.animation.mask;
            animationModal = defaultOptions.animation.modal;
        }
    }

    return {
        inheritAttrs: false,
        props: {
            modelValue: Boolean,
            animatonMask: {
                type: String,
                default: animatonMask,
            },
            animationModal: {
                type: String,
                default: animationModal,
            },
            autoClose: Boolean,
            close: {
                type: Boolean,
                default: true,
            },
        },
        setup(props, { emit }) {
            const hide = () => {
                emit("update:modelValue", false);
            };

            return { hide };
        },
        render() {
            return h(
                modal,
                {
                    animationMask: this.animatonMask,
                    animationModal: this.animationModal,
                    toggle: this.modelValue,
                    onHide: this.hide,
                    autoClose: this.autoClose,
                    close: this.close,
                },
                this.$slots.default
            );
        },
    };
};

export default {
    install(app, defaultOptions = {}) {
        const ins = create(defaultOptions);
        app.component("vModal", ins);
    },
};
