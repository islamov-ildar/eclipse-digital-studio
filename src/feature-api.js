import store from './store';

const calcValutePreviousRateChangeValute = (oneValute) => {
  const current = ((oneValute.Nominal / oneValute.Value) * oneValute.Nominal).toFixed(4);
  const previous = ((oneValute.Nominal / oneValute.Previous) * oneValute.Nominal).toFixed(4);

  return (current - previous).toFixed(4);
};
// eslint-disable-next-line max-len
const calcValutePreviousRateChangeRub = (oneValute) => (oneValute.Value - oneValute.Previous).toFixed(4);
const handleValute = (valutes) => {
  console.log(valutes);
  const resultArr = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const value of Object.entries(valutes)) {
    const oneValute = value[1];
    resultArr.push({
      showBaseRub: true,
      valuteName: `${oneValute.Name} ${oneValute.CharCode}`,
      nominal: oneValute.Nominal,
      rubForNominal: oneValute.Value,
      code: oneValute.CharCode,
      baseRub: {
        firstPart: `${oneValute.Nominal} ${oneValute.Name} ${oneValute.CharCode}`,
        secondPart: `${oneValute.Value} ₽ (RUB)`,
        rateChange: calcValutePreviousRateChangeRub(oneValute),
      },
      baseValute: {
        firstPart: `${oneValute.Nominal} ₽ (RUB)`,
        secondPart: `${((oneValute.Nominal / oneValute.Value) * oneValute.Nominal).toFixed(4)} ${oneValute.Name} ${oneValute.CharCode}`,
        rateChange: calcValutePreviousRateChangeValute(oneValute),
      },
    });
  }
  return resultArr;
};
// eslint-disable-next-line import/prefer-default-export,import/no-mutable-exports
export const loading = { isLoading: true };
const getData = async () => {
  // eslint-disable-next-line no-return-await
  const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
  if (response.ok) {
    const json = await response.json();
    store.commit('addActualValute', handleValute(json.Valute));
    loading.isLoading = false;
    return;
  }
  console.error(`Error: ${response.status}`);
};

getData();
