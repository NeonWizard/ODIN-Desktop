<template>
  <div id="app-outage-page">
    <img id="sad-cat" src="@/assets/sadcat.png">
    <h1>We'll be back soon!</h1>
    <p>The ODIN backend is currently unavailable, but should be back online shortly. Please check back soon!</p>
  </div>
</template>

<script>
export default {
  name: 'AppOutage'
}
</script>

<style lang="scss" scoped>
  #app-outage-page {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #sad-cat {
    width: 20%;
    margin-bottom: 10px;
  }

  h1 {
    font-size: 2em;
    margin-bottom: 0px;
  }

  p {
    font-size: 1.1em;
    width: 40%;
    text-align: center;
    margin-bottom: 50px;
  }
</style>
