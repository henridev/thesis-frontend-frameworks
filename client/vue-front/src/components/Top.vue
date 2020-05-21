<template>
  <div class="header">
    <div class="clear">
      <i class="fa fa-refresh"></i>
    </div>
    <div id="date"></div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "top"
};
</script>
<style>
.header {
  width: 380px;
  height: 200px;
  background-image: url("https://mdbootstrap.com/img/Photos/Horizontal/Nature/full%20page/img(20).jpg");
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 15px 15px 0 0;
  position: relative;
}
.clear {
  width: 30px;
  height: 30px;
  position: absolute;
  right: 20px;
  top: 20px;
}
.clear i {
  font-size: 30px;
  color: #fff;
}
.clear i:hover {
  cursor: pointer;
  text-shadow: 1px 3px 5px #000;
  transform: rotate(45deg);
}
</style>


