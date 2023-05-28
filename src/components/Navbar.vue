<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav>
    <a href="/">Home</a>
    <a href="/">About</a>
    <div class="image">
      <a href="/">
        <img src="../assets/nyg.svg" alt="" />
      </a>
    </div>

    <a href="/blog">Blog</a>
    <a href="/books">Books</a>
  </nav>
  <!-- eslint-disable-next-line vue/no-multiple-template-root -->
  <hr />
</template>
<script></script>
<style scoped>
nav {
  background-color: #242c41;
  display: flex;
  justify-content: center;
  align-items: center;
}
a {
  color: #fff;
  /* padding: 0.3rem; */
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 0;
  font-size: 1.5rem;

  text-decoration: none;
}
:hover {
  color: rgb(167, 110, 51);
}
hr {
  /* background-color: #d09d4c; */
  background: rgb(167, 110, 51);
  background: linear-gradient(
    90deg,
    rgba(167, 110, 51, 1) 0%,
    rgba(239, 228, 191, 1) 25%,
    rgba(208, 157, 76, 1) 50%,
    rgba(239, 228, 191, 1) 75%,
    rgba(167, 110, 51, 1) 100%
  );
  height: 0.3rem;
  width: 100%;
  border: 0;
  padding: 0;
  margin: 0;
}
.image {
  /* background-color: #fff; */
  height: 100%;
  padding: 0;

  width: 20rem;
  height: 0px;
  border-right: 5rem solid transparent;
  border-left: 5rem solid transparent;
  border-bottom: 4rem solid #fff;

  /* transform: skewX(-15deg);
  transform-origin: 0; */
}
/* .image::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ccc; /* Color del triángulo */
/* clip-path: polygon(0 0, 100% 0, 50% 100%); */
/* z-index: -1; */
/* } */
/* img {
  z-index: 1;
} */
img {
  height: 4rem;
}
img:hover {
  height: 5rem;
}
</style>
