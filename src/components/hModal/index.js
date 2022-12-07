import modal from './hm-index.vue'

const HModal = {
    install: function (Vue) {
        Vue.component('HModal', modal)
    }
}

// 导出组件
export default HModal
