<template>
  <div class="container">
    <InfoCard class="info-card" />
    <div class="content">
      <PresentationCard />
      <BooksCard />
    </div>
  </div>
</template>
<script>
import InfoCard from "../components/home/InfoCard.vue";
import PresentationCard from "../components/home/PresentationCard.vue";
import BooksCard from "../components/books/BooksCard.vue";

export default {
  components: {
    InfoCard,
    PresentationCard,
    BooksCard,
  },
};
</script>
<style scoped>
.container {
  display: flex;
  height: 80vh;
}
.info-card {
  flex: 0 0 auto;
  flex-basis: 30%;
  flex-grow: 1;
}
.content {
  flex: 1 1 auto;
  overflow-y: auto;
  flex-basis: 60%;
}
</style>
