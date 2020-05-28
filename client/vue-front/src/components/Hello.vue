<template>
  <div class="container">
    <h1>{{message}}</h1>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "top",
  data: function() {
    return {
      message: "hello world"
    };
  }
};
</script>
<style>
.container {
  color: black;
}
</style>


