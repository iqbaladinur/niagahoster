<template>
  <div class="custom-container">
    <h1 class="text-3xl font-bold text-center">
      Paket Hosting Singapura yang Tepat
    </h1>
    <h1 class="text-3xl font-light text-center mb-16">
      Diskon 40% + Domain dan SSL Gratis untuk Anda 
    </h1>
    <div class="flex flex-wrap">
      <div v-for="(data, k) in listPackages" :key="k" class="lg:w-1/4 w-full lg:mb-0 mb-10">
        <div class="border relative" :class="{ 'best-seller border-brand' : data.isBestSeller }">
          <div class="card-title" :class="{'border-brand bg-brand text-white' : data.isBestSeller }">
            <h1 class="capitalize" :class="{'border-brand bg-brand text-white' : data.isBestSeller }">
              {{ data.title }}
            </h1>
          </div>
          <div class="price" :class="{'border-brand bg-brand text-white' : data.isBestSeller }">
            <p class="line-through">
              Rp {{ toCurrency('id-ID', 'IDR', data.priceMonthly) }}
            </p>
            <p class="py-1 flex justify-center">
              <span class="text-base mr-2">Rp</span>
              <span class="text-5xl font-bold -mt-4">
                {{ getHead(data.discountPriceMonthly) }}
              </span>
              <span class="text-base">
                <span class="font-bold">
                  {{ getTail(data.discountPriceMonthly) }} 
                </span>
                <span>/ bln</span>
              </span>
            </p>
          </div>
          <div class="user" :class="{'border-brand bg-brand-deep text-white' : data.isBestSeller }">
            <p class="capitalize">
              <b>{{ data.registeredUser }}</b> pengguna terdaftar
            </p>
          </div>
          <div class="description secondary-font text-sm">
            <ul class="pt-3">
              <li v-for="(feature, i) in data.features" :key="i" v-html="feature" class="py-3"></li>
            </ul>
            <button class="capitalize focus:outline-none px-5 h-10 rounded-full border-2 border-black font-bold mt-16 mb-6" :class="{'border-brand-deep bg-brand-deep text-white' : data.isBestSeller }">
              {{ data.buttonText }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getPackagesData } from '../http/getPackages';
const toCurrency = (countryCode, currencyCode, nominal) => {
  return `${new Intl.NumberFormat(countryCode, { currency: currencyCode }).format(nominal)}`;
}
const splitCurrency = (number) => {
  const formated = toCurrency('id-ID', 'IDR', number);
  return {
    head: formated.substring(0, 2),
    tail: formated.substring(2)
  };
}
export default {
  name: 'Packages',
  data() {
    return {
      listPackages: []
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      getPackagesData()
        .then(res => {
          this.listPackages = res;
        })
        .catch(error => {
          console.log(error);
        });
    },
    toCurrency,
    getHead(number) {
      const { head } = splitCurrency(number);
      return head;
    },
    getTail(number) {
      const { tail } = splitCurrency(number);
      return tail;
    },
  }
}
</script>
<style scoped>
  .card-title{
    @apply font-bold;
    @apply py-2;
    @apply text-center;
    @apply lg:text-xl text-lg;
    @apply border-b;
  }
  .price{
    @apply py-2;
    @apply text-center;
    @apply border-b;
    @apply font-light;
  }
  .user{
    @apply py-2;
    @apply text-center;
    @apply border-b;
    @apply font-light;
  }
  .description{
    @apply py-2;
    @apply text-center;
    @apply font-light;
  }
  .best-seller::after{
    content: '';
    position: absolute;
    top: -8px;
    left: -10px;
    background-image: url('../../static/ribbon-best-seller.png');
    background-size: 100px 100px;
    width: 100px;
    height: 100px;
  }
</style>
