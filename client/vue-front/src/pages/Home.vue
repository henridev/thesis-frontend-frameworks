 <template>
  <div class="about">
    <div class="inner-about">
      <h1>Vue todo app</h1>
      <br>
      <p>Welcome to the vue version of your favourite todo app</p>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "home"
};
</script>
<style scoped>
.about {
  background-color: #54a041;
  padding: 20px;
  color: white;
  border-radius: 0.25rem;
}
.inner-about {
  width: 100%;
  max-width: 600pt;
  padding: 10pt;
}
.inner-about h1 {
  margin: 0;
  font-size: 35pt;
  margin-bottom: -10pt;
}
.inner-about p {
  margin: 0;
  margin-bottom: 8pt;
  font-size: 15pt;
}
</style>
