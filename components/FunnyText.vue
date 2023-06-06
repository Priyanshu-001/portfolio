<template>
    <span class="color-text-bg">
        <span class="color-text">
            <slot></slot>
        </span>
    </span>
</template>

<style>
    .color-text-bg{
  display: inline-block;
  position: relative;
}
@keyframes background-pan {
  from {
    background-position: 0% center;
  }
  
  to {
    background-position: -200% center;
  }
}

.color-text{
    color: white;
    overflow-y: hidden;
  animation: background-pan 3s linear infinite;
  background: linear-gradient(
    to right,
    var(--start),
    var(--mid),
    var(--end),
    var(--start)
  );
  background-size: 200%;
  background-clip:text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
}


</style>