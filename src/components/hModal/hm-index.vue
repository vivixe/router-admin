<template>
    <a-modal ref="modalRef" wrapClassName="h-modal" :title="title" :visible="visible" :footer="null" :width="width"
        :height="height" @cancel="closeFormModal" :maskClosable="maskClosable" :destroyOnClose="true" :getContainer="getCon">
        <slot></slot>
    </a-modal>
</template>

<script>
export default {
	name:'hm-index',
    props: {
        title: {
            type: String,
            default: ''
        },
        width: {
            type: String,
            default: '90%'
        },
        height: {
            type: String,
            default: '90%'
        },
        show: {
            type: Boolean,
            default: false
        },
        index: {
            type: Number,
            default: 0
        },
        handleCancel: {
            type: Function,
        },
		maskClosable: {
			type:Boolean,
			default:false
		}
    },
    watch: {
        visible () {
            setTimeout(() => {
                // 获取最上层的弹窗，设置高度
                const nodeList = document.querySelectorAll('.ant-modal')
                // console.log('%c nodeList','color:#09f;font-size:20px;', nodeList, this.index);
                const node = nodeList[nodeList.length - 1]
                // console.log('%c visible watch', 'color:#09f;font-size:20px;', node)
                const height = this.height.substr(0, this.height.length - 1)
                const top = (100 - height) / 2
                node.style.top = top + '%'
            }, 20)
        }
    },
    data () {
        return {
            visible: this.show
        }
    },
    methods: {
        closeFormModal () {
            this.visible = false
            if (this.handleCancel) {
                this.handleCancel()
            }
        },
        getCon () {
            return document.querySelector('.tabs-view-content') || document.body
        }
    }
}
</script>

<style scoped lang="less">
/deep/ .h-modal {
    overflow: hidden;

    .ant-modal {
        top: 55px;
        padding-bottom: 0px;
    }

    .ant-modal-content {
        height: 100%;

        .ant-modal-body {
            height: calc(100% - 55px) !important;
            overflow: auto;
        }
    }
}
</style>
