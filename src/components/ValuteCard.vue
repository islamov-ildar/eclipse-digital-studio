<template>
  <div class="oneValuteCard">
    <div v-if="oneValute.showBaseRub" class="oneValuteCardItem">
      <div class="oneValuteName">
        {{ oneValute.baseRub.firstPart }}
      </div>
      <Btn
          @action="oneValute.showBaseRub = !oneValute.showBaseRub"
          >⇅
      </Btn>
      <div>
        {{ oneValute.baseRub.secondPart }}
        ({{ oneValute.baseRub.rateChange }}
        <span v-if="oneValute.baseRub.rateChange > 0" class="primary fs-2">⬆</span>
        <span v-else class="danger fs-2">⬇</span>)
      </div>
    </div>
    <div v-else class="oneValuteCardItem">
      {{ oneValute.baseValute.firstPart }}
      <Btn
          @action="oneValute.showBaseRub = !oneValute.showBaseRub"
          color="primary">⇅
      </Btn>
      <div>
        {{ oneValute.baseValute.secondPart }}
        ({{ oneValute.baseValute.rateChange }}
        <span v-if="oneValute.baseValute.rateChange > 0" class="primary fs-2">⬆</span>
        <span v-else class="danger fs-2">⬇</span>)
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import Btn from '@/components/Btn.vue';

export default {
  name: 'ValuteCard',
  components: {
    Btn,
  },
  props: ['valute'],
  setup(props) {
    const oneValute = ref(props.valute);

    return {
      oneValute,
    };
  },
};
</script>

<style scoped>
.oneValuteCard {
  width: 100%;
  text-align: left;
  padding: 6px 12px;
  border: 1px solid gray;
  border-radius: 12px;
}

.oneValuteCardItem {
  display: grid;
  grid-gap: 10px;
  justify-items: center;
  padding: 10px 0;
}
</style>
