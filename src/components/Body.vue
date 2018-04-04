<template>
  <div class="body">
    Hey this is the body
    <ul>
      <li v-for="name in sillyNames">
        <span>{{name.name}}</span>
        <span>{{name.age}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'body',
  computed: {
    names () {
      return this.$store.state
    },
    sillyNames () {
      return this.$store.getters.sillyNames
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
