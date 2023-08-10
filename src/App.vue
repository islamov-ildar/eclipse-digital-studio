<template>
  <div>
    <h2>Currency Converter</h2>
    <loading-indicator v-if="loading.isLoading"/>
    <div v-else>
      <Btn @action="active = 'one'" :color="oneColor()">List of currencies</Btn>
      <Btn @action="active = 'two'" :color="twoColor()">Converter</Btn>
    </div>
    <keep-alive>
      <div>
        <SearchField v-if="active==='one'" @inputSearchValue="runSearch"/>
        <div class="pt-2 wrapper">
          <div v-if="active==='one'">
            <div v-for="(oneValute, idx) in valutesList" :key="idx" class="listWrapper">
              <ValuteCard :valute="oneValute"/>
            </div>
          </div>
          <div v-else>
            <ConverterCmp />
          </div>
        </div>
      </div>
    </keep-alive>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { ref, computed } from 'vue';
import LoadingIndicator from '@/components/LoadingIndicator.vue';
import Btn from '@/components/Btn.vue';
import { loading } from '@/feature-api';
import ValuteCard from '@/components/ValuteCard.vue';
import SearchField from '@/components/SearchField.vue';
import ConverterCmp from '@/components/Converter.vue';

export default {
  name: 'App',
  components: {
    ConverterCmp,
    SearchField,
    ValuteCard,
    Btn,
    LoadingIndicator,
  },
  setup() {
    const store = useStore();
    const valutesList = computed(() => store.state.valute);

    const active = ref('one');

    function oneColor() {
      return active.value === 'one' ? 'primary' : '';
    }

    function twoColor() {
      return active.value === 'two' ? 'primary' : '';
    }

    const runSearch = (searchValue) => {
      const cards = document.querySelectorAll('.listWrapper');

      setTimeout(() => {
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < cards.length; i++) {
          if (!cards[i].textContent.toLowerCase()
            .includes(searchValue.toLowerCase())) {
            cards[i].classList.add('is-hidden');
          } else {
            cards[i].classList.remove('is-hidden');
          }
        }
      }, 300);
    };

    return {
      runSearch,
      valutesList,
      loading,
      active,
      oneColor,
      twoColor,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.listWrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 5px;
  width: 600px;
}

.wrapper {
  display: flex;
  justify-content: center;
}

.is-hidden {
  display: none;
}
</style>
