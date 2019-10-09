<template>
	<div class="pt-3 pb-2 mt-5">
		<h1>{{title}}</h1>
		<p>{{msg1}}<br>{{msg2}}</p>
	</div>
</template>

<script>
export default {
  name: "ImAufbau",
  props: {
	title: String,
	msg1: String,
	msg2: String
  }
};
</script>

<style scoped>
	/* Stern = match Everything */
	*{
		background-color: coral
	}
</style>