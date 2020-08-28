<template>
  <div>
    <div class="border-solid border-b">
      <div class="custom-container">
        <div class="flex justify-end relative">
          <div class="absolute top-0 left-0 h-full w-auto flex">
            <div class="absolute flex top-0 left-0 bg-blue-500 h-10 w-10 px-3 text-white overflow-hidden">
              <span class="mx-auto">
                <i class="fa fa-tag" aria-hidden="true"></i>
              </span>
              <div class="arrow-up absolute bg-white left-0 bottom-0 h-10 w-10"></div>
            </div>
            <p class="text-xs my-auto pl-12">
              <a href="#">Gratis Ebook 9 cara cerdas menggunakan domain</a> <span class="hover:text-gray-900 cursor-pointer">[x]</span>
            </p>
          </div>
          <div class="h-full">
            <ul class="helper-list py-4 text-sm">
              <li class="mx-2">
                <a href="tel:0274-5305505" class="call-phone">
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
    <nav>

    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.helper-list > li {
  display: inline;
  @apply hover:text-gray-500;
}
.arrow-up{
  margin-bottom: -30px;
  transform: rotate(45deg);
}
</style>