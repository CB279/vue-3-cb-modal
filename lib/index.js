import { h } from "vue";
import modal from "../components/modal.vue";
import "../css/index.css";

const create = defaultOptions => {
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
                default: animatonMask
            },
            animationModal: {
                type: String,
                default: animationModal
            },
            autoClose: Boolean,
            close: {
                type: Boolean,
                default: true
            }
        },
        components: {
            modal
        },
        setup(props, { emit }) {
            const hide = () => {
                emit("update:modelValue", false);
            };

            return { hide };
        },
        render() {
            return h(
                <modal
                    toggle={this.modelValue}
                    onHide={this.hide}
                    animation-mask={this.animatonMask}
                    animation-modal={this.animationModal}
                    auto-close={this.autoClose}
                    close={this.close}
                >
                    {this.$slots.default()}
                </modal>
            );
        }
    };
};

export default {
    install(app, defaultOptions = {}) {
        const ins = create(defaultOptions);
        app.component("vModal", ins);
    }
};
