<template>
  <button class="ribbon button is-small is-primary" @click="$emit('clear')">
    <span class="icon">
      <VIcon icon="x-circle" :width=15 :height=15 />
    </span>
    <span>Clear</span>
  </button>
</template>