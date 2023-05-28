<template>
  <div class="container">
    <div class="card">
      <img src="../../assets/82.jpg" alt="" style="height: 15rem" />
    </div>
    <div class="info">
      <a href="https://www.linkedin.com/in/yamilagascon/" target="_blank">
        <h3>PhD. Yamila Gascón</h3>
      </a>
      <a href="https://www.linkedin.com/in/yamilagascon/" target="_blank">
        <h3>👩🏻‍💻 Systems Engineer</h3>
      </a>
      <a href="">
        <h4>✉ yamilagascon@gmail.com</h4>
      </a>
    </div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
}
.card {
  width: 15rem;
  height: 15rem;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background: #15161b;
  overflow: hidden;

  align-items: start;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}
.info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem;
}

h3,
h4 {
  margin: 0.5rem;
  color: #15161b;
}
a {
  text-decoration: none;
  color: #15161b;
}
</style>
