<template>
  <div class="custom-container">
    <h1 class="text-3xl font-light text-center mb-5">
      Powerful dengan Limit PHP yang Lebih Besar
    </h1>
    <div class="flex flex-wrap justify-center mb-10 font-light">
      <div class="lg:w-5/12 w-full lg:p-4 lg:mb-0 mb-5">
        <ul class="w-full border">
          <li class="relative flex items-center h-10 w-full justify-center border-b">
            <div class="absolute flex items-center justify-center px-4 left-0 h-full text-lg mr-2 text-green-500">
              <i class="fa fa-check-circle" aria-hidden="true"></i>
            </div>
            <p>max execution time 300s</p>
          </li>
          <li class="relative flex items-center h-10 w-full justify-center border-b bg-gray-100">
            <div class="absolute flex items-center justify-center px-4 left-0 h-full text-lg mr-2 text-green-500">
              <i class="fa fa-check-circle" aria-hidden="true"></i>
            </div>
            <p>max execution time 300s</p>
          </li>
          <li class="relative flex items-center h-10 w-full justify-center">
            <div class="absolute flex items-center justify-center px-4 left-0 h-full text-lg mr-2 text-green-500">
              <i class="fa fa-check-circle" aria-hidden="true"></i>
            </div>
            <p>php memory limit 1024mb</p>
          </li>
        </ul>
      </div>
      <div class="lg:w-5/12 w-full lg:p-4 ">
        <ul class="w-full border">
          <li class="relative flex items-center h-10 w-full justify-center border-b">
            <div class="absolute flex items-center justify-center px-4 left-0 h-full text-lg mr-2 text-green-500">
              <i class="fa fa-check-circle" aria-hidden="true"></i>
            </div>
            <p>post max size 128mb</p>
          </li>
          <li class="relative flex items-center h-10 w-full justify-center border-b bg-gray-100">
            <div class="absolute flex items-center justify-center px-4 left-0 h-full text-lg mr-2 text-green-500">
              <i class="fa fa-check-circle" aria-hidden="true"></i>
            </div>
            <p>upload max filesize 128mb</p>
          </li>
          <li class="relative flex items-center h-10 w-full justify-center">
            <div class="absolute flex items-center justify-center px-4 left-0 h-full text-lg mr-2 text-green-500">
              <i class="fa fa-check-circle" aria-hidden="true"></i>
            </div>
            <p>max input vars 2500</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="w-32 h-2 bg-gray-200" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Benefits'
}
</script>

<style>

</style>