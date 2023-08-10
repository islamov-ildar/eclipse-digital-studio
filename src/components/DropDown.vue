<template>
  <div class="pb-1">
    <div class="menu-item relative" @click="isOpen = !isOpen" @keyup.space="isOpen = !isOpen">
      <div class="pointer flex justify-center alight-center gap-5 valuteSelect">
        <div>
          {{ title }}
        </div>
        <div class="chevronContainer">
          <img v-if="!isOpen" src="../assets/chevron-down.svg" alt="expand"/>
          <img v-else src="../assets/chevron-up.svg" alt="collapse"/>
        </div>
      </div>
      <div class="sub-menu absolute" v-if="isOpen">
        <div v-for="(item, i) in items" :key="i" class="menu-item">
          <div @click="selectValute(item)"
               @keyup.space="selectValute(item)"
               class="item pointer">{{ item.valuteName }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, toRef } from 'vue';

export default {
  name: 'DropDown',
  props: ['items', 'valuteName'],
  emits: ['valute'],
  setup(props, { emit }) {
    const isOpen = ref(false);

    const title = toRef(props, 'valuteName');
    const selectValute = (valute) => {
      emit('valute', valute);
    };

    return {
      isOpen,
      title,
      selectValute,
    };
  },
};
</script>

<style>
.item {
  background-color: #FFFFFF;
  width: 270px;
  padding: 5px;
}

.item:hover {
  background-color: #42b983;
  color: #FFF;
}

nav .menu-item svg {
  width: 10px;
  margin-left: 10px;
}

.sub-menu {
  -webkit-box-shadow: 0 1px 15px 8px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0 1px 15px 8px rgba(34, 60, 80, 0.2);
  box-shadow: 0 1px 15px 8px rgba(34, 60, 80, 0.2);
  height: 300px;
  overflow-y: scroll;
  margin-top: 15px;
  z-index: 2;
  left: calc(50% - 135px);
}

.chevronContainer {
  width: 16px;
  padding-top: 5px;
}

.valuteSelect {
  padding: 3px 5px;
}

.valuteSelect:hover {
  background-color: #42b983;
  color: #FFF;
}
</style>
