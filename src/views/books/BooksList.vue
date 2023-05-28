<template>
  <div class="container">
    <BooksCard />
  </div>
</template>
<script>
import BooksCard from "../../components/books/BooksCard.vue";
export default {
  components: {
    BooksCard,
  },
};
</script>
<style scoped>
.container {
  /* height: 80vh; */
  display: flex;
  flex-direction: column;
}
</style>
