<script>
export default {
  name: 'Mermaid',
  props: {
    graph: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      rendered: false
    }
  },
  mounted() {
    this.renderMermaid()
  },
  updated() {
    this.renderMermaid()
  },
  watch: {
    graph() {
      this.rendered = false
      this.$nextTick(() => {
        this.renderMermaid()
      })
    }
  },
  methods: {
    async renderMermaid() {
      if (this.rendered) return

      try {
        // 动态导入mermaid
        const module = await import('mermaid')
        const mermaid = module.default

        // 初始化mermaid
        mermaid.initialize({
          startOnLoad: false,
          theme: 'default',
          securityLevel: 'loose'
        })

        // 清空容器
        this.$refs.mermaidContainer.innerHTML = ''

        // 渲染图表
        const id = `mermaid-${Date.now()}`
        this.$refs.mermaidContainer.id = id
        
        await mermaid.render(id, this.graph).then(result => {
          this.$refs.mermaidContainer.innerHTML = result.svg
          this.rendered = true
        })
      } catch (error) {
        console.error('Mermaid rendering error:', error)
        this.$refs.mermaidContainer.innerHTML = `<div class="mermaid-error">Mermaid渲染错误: ${error.message}</div>`
      }
    }
  }
}
</script>

<template>
  <div class="mermaid-wrapper">
    <div ref="mermaidContainer" class="mermaid-container"></div>
  </div>
</template>

<style>
.mermaid-wrapper {
  text-align: center;
  margin: 1rem 0;
}

.mermaid-container {
  overflow-x: auto;
  display: inline-block;
}

.mermaid-error {
  color: red;
  padding: 1rem;
  border: 1px solid #f88;
  background-color: #fee;
  border-radius: 4px;
  text-align: left;
}
</style> 