<template>
  <div id="model-list-navbar">
    <h2>Models</h2>
    <div id="model-list">
      <!-- TODO: make these individual cards -->
      <div
        v-for="model in models"
        :key="model.name"
        :class="{ 'model-selected': model.name === activeModel }"
        @click="clicked(model)"
      >
        {{ model.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModelListNavbar',
  props: {
    activeModel: {
      type: String,
      required: true,
    },
    models: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
    }
  },
  methods: {
    clicked(model) {
      this.$emit('update:activeModel', model.name)
    }
  }
}
</script>

<style lang="scss" scoped>
#model-list-navbar {
  display: flex;
  flex-direction: column;

  h2 {
    color: $primary-color;
  }
}

#model-list {
  color: $secondary-color;

  div {
    text-overflow: ellipsis;
    overflow-x: hidden;
    white-space: nowrap;

    padding: 16px 10px;
    margin: 0 -10px;
    cursor: pointer;
    transition: 0.2s color, 0.2s background-color;

    border-top: 1px solid #222;

    &:last-child {
      border-bottom: 1px solid #222;
    }

    &:hover {
      background-color: $primary-background + #020304;
    }
  }

  .model-selected {
    color: $primary-color;
    background-color: $primary-background + #030405;
  }
}
</style>
