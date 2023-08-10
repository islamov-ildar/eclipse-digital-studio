<template>
  <div class="pt-2 form-control searchWrapper">
    <label for="searchInput">
      Search
      <input id="searchInput"
             type="text"
             v-model="searchValue"
             @input="$emit('inputSearchValue', searchValue)">
    </label>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'TabBtn',
  emits: ['inputSearchValue'],
  setup() {
    const searchValue = ref('');

    return {
      searchValue,
    };
  },
};
</script>

<style scoped>
.searchWrapper {
  margin: 0 auto;
  width: 20%;
}
</style>
