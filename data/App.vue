<template>
  <div class="p-8">
    <h1>Тертиплийски местенца by МиРоСи™</h1>

    <ul class="flex flex-col gap-4 mt-4">
      <li v-for="link in links" :key="link.url">
        <a
          class="relative block shadow-md border-2 border-black rounded-md bg-cover bg-center bg-no-repeat hover:bg-right transition-all duration-200 ease-in-out"
          :style="{ height: '275px', backgroundImage: `url(${link.image})` }"
          :href="link.url"
        >
          <div
            class="absolute right-0 bottom-0 left-0 bg-black/50 text-white p-2"
          >
            {{ link.text }}
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
};
</script>
