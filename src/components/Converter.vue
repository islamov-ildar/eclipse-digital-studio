<template>
  <div class="form-control searchWrapper flex alight-center flex-column">
    <DropDown :items="valutesList" :valuteName="firstValuteName" @valute="getValuteFirst"/>
    <div v-if="codeFirst" class="flex alight-center gap-10 flex-column">
      <div class="flex alight-center gap-5">
        <label for="converter" class="inputValue">
          <input id="converter"
                 type="number"
                 v-model="convertValue"
                 @input="calculate">
        </label>
        <span>{{ codeFirst }}</span>
      </div>
      <Btn v-if="codeFirst && codeSecond"
          @action="switchValute()"
      >⇅
      </Btn>
      <DropDown :items="valutesList" :valuteName="secondValuteName" @valute="getValuteSecond"/>
      <div v-if="codeSecond">{{ resultSecond }}
        <span>{{ codeSecond }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import DropDown from '@/components/DropDown.vue';
import Btn from '@/components/Btn.vue';

export default {
  name: 'ConverterCmp',
  components: {
    DropDown,
    Btn,
  },
  setup() {
    const convertValue = ref(1);
    const store = useStore();
    const valutesList = computed(() => store.state.valute);
    const resultSecond = ref();
    const codeFirst = ref();
    const codeSecond = ref();
    const showBaseRub = ref(true);
    const firstValuteName = ref('Выберите валюту');
    const oneFirstValuteUnitInRub = ref(0);
    const secondValuteName = ref('Выберите валюту');
    const oneSecondValuteUnitInRub = ref(0);

    const rounding = (value) => Math.round(value * 1000) / 1000;
    function calculate() {
      console.log('calculate');
      if (oneFirstValuteUnitInRub.value && oneSecondValuteUnitInRub.value) {
        // eslint-disable-next-line max-len
        const calcConvertCoefficient = oneFirstValuteUnitInRub.value / oneSecondValuteUnitInRub.value;
        resultSecond.value = rounding(convertValue.value * calcConvertCoefficient);
      }
    }
    const getValuteFirst = (valute) => {
      codeFirst.value = valute.code;
      oneFirstValuteUnitInRub.value = valute.rubForNominal / valute.nominal;
      firstValuteName.value = valute.valuteName;
      calculate();
    };
    const getValuteSecond = (valute) => {
      codeSecond.value = valute.code;
      oneSecondValuteUnitInRub.value = valute.rubForNominal / valute.nominal;
      // eslint-disable-next-line max-len
      resultSecond.value = rounding((oneFirstValuteUnitInRub.value / oneSecondValuteUnitInRub.value) * convertValue.value);
      secondValuteName.value = valute.valuteName;
      calculate();
    };

    const switchValute = () => {
      showBaseRub.value = !showBaseRub.value;
      convertValue.value = resultSecond.value;
      // eslint-disable-next-line
      [oneFirstValuteUnitInRub.value, oneSecondValuteUnitInRub.value] = [oneSecondValuteUnitInRub.value, oneFirstValuteUnitInRub.value];
      // eslint-disable-next-line
      [firstValuteName.value, secondValuteName.value] = [secondValuteName.value, firstValuteName.value];
      [codeFirst.value, codeSecond.value] = [codeSecond.value, codeFirst.value];
      calculate();
    };

    return {
      switchValute,
      getValuteFirst,
      getValuteSecond,
      calculate,
      convertValue,
      valutesList,
      resultSecond,
      showBaseRub,
      codeFirst,
      codeSecond,
      firstValuteName,
      secondValuteName,
    };
  },
};
</script>

<style scoped>
.searchWrapper {
  margin: 0 auto;
}
.inputValue {
  width: 150px;
}
</style>
