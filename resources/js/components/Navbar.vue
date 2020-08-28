<template>
  <div class="fixed w-full secondary-font">
    <!-- start of notif -->
    <div class="border-bottom bg-white">
      <div class="custom-container">
        <div class="flex justify-end relative lg:h-auto h-12">
          <div class="absolute top-0 left-0 h-full w-auto flex">
            <div class="absolute flex top-0 left-0 bg-blue-500 h-10 w-8 text-white overflow-hidden">
              <span class="mx-auto">
                <i class="fa fa-tag" aria-hidden="true"></i>
              </span>
              <div class="arrow-up absolute bg-white left-0 bottom-0 h-8 w-8"></div>
            </div>
            <p class="text-xs my-auto pl-12">
              <a href="#">Gratis Ebook 9 cara cerdas menggunakan domain</a> <span class="hover:text-gray-900 cursor-pointer">[x]</span>
            </p>
          </div>
          <div class="h-full lg:block hidden">
            <ul class="helper-list py-4 text-sm">
              <li class="mx-2">
                <a href="tel:0274-5305505">
                  <span class="mr-2">
                    <i class="fa fa-phone"></i>
                  </span>
                  <span>
                    0274-5305505
                  </span>
                </a>
              </li>
              <li class="mx-2">
                <a href="#">
                  <span class="mr-2">
                    <i class="fa fa-comments"></i>
                  </span>
                  <span>
                    Live Chat
                  </span>
                </a>
              </li>
              <li class="ml-2">
                <a href="#">
                  <span class="mr-2">
                    <i class="fa fa-user-circle"></i>
                  </span>
                  <span>
                    Member Area
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- end of notif -->
    <!-- start of navbar -->
    <div class="border-bottom">
      <nav class="container mx-auto">
        <div class="flex items-center justify-between flex-wrap">
          <div class="flex items-center justify-between py-6 lg:px-0 px-5 lg:w-auto w-full">
            <div class="flex items-start flex-shrink-0 mr-6">
              <a href="/">
                <img src="/assets/images/logo.png" alt="niagahoster" class="lg:w-48 w-40">
              </a>
            </div>
            <div class="flex items-center lg:hidden">
              <a href="#" class="text-2xl mr-5">
                <i class="fa fa-user-circle"></i>
              </a>
              <button
                @click="isHidden = !isHidden"
                class="flex items-center px-2 py-2 border rounded text-gray-700 border-gray-700 hover:text-white hover:border-white focus:bg-gray-700 focus:outline-none"
              >
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
              </button>
            </div>
          </div>
          <div
            :class="{'hidden': isHidden}"
            class="w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:bg-white lg:text-main-font bg-gray-700 text-white lg:p-0 px-5 pt-0 pb-2"
          >  
            <div class="text-base lg:flex-grow lg:flex lg:justify-end">
              <div class="lg:hidden flex py-3 lg:border-none border-b">
                <div class="w-1/2 flex items-center">
                  <a href="tel:0274-5305505">
                    <span class="mr-2">
                      <i class="fa fa-phone"></i>
                    </span>
                    <span>
                      0274-5305505
                    </span>
                  </a>
                </div>
                <div class="w-1/2 flex items-center justify-center">
                  <a href="#">
                    <span class="mr-2">
                      <i class="fa fa-comments"></i>
                    </span>
                    <span>
                      Live Chat
                    </span>
                  </a>
                </div>
              </div>
              <a href="#" class="block py-3 lg:inline-block lg:border-none border-b lg:p-0 lg:mr-10">
                Hosting
              </a>
              <a href="#" class="block py-3 lg:inline-block lg:border-none border-b lg:p-0 lg:mr-10">
                Domain
              </a>
              <a href="#" class="block py-3 lg:inline-block lg:border-none border-b lg:p-0 lg:mr-10">
                Server
              </a>
              <a href="#" class="block py-3 lg:inline-block lg:border-none border-b lg:p-0 lg:mr-10">
                Website
              </a>
              <a href="#" class="block py-3 lg:inline-block lg:border-none border-b lg:p-0 lg:mr-10">
                Afiliasi
              </a>
              <a href="#" class="block py-3 lg:inline-block lg:border-none border-b lg:p-0 lg:mr-10">
                Promo
              </a>
              <a href="#" class="block py-3 lg:inline-block lg:border-none border-b lg:p-0 lg:mr-10">
                Pembayaran
              </a>
              <a href="#" class="block py-3 lg:inline-block lg:border-none border-b lg:p-0 lg:mr-10">
                Review
              </a>
              <a href="#" class="block py-3 lg:inline-block lg:border-none border-b lg:p-0 lg:mr-10">
                Kontak
              </a>
              <a href="#" class="block py-3 lg:inline-block lg:p-0">
                Blog
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <!-- end of navbar -->
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isHidden: true
    }
  }
}
</script>

<style scoped>
.helper-list > li {
  display: inline;
  @apply hover:text-gray-500;
}
.arrow-up{
  margin-bottom: -23px;
  transform: rotate(45deg);
}
.border-bottom{
  @apply border-solid;
  @apply border-b;
}
</style>