<template>
    
    <button id="btn">
       <slot></slot>
    </button>
  

</template>

<style scoped>
button{
  padding: 1rem 2rem;
  
  border: none;
  outline: none;
  background: none;
  position: relative;
  /* border-radius: 5px; */
  /* border-width: 3px; */
  border: 10px solid;
  border-image-slice: 1;
  border-width: 2px;
  text-transform: uppercase;
  transition: all 0.4s;

  border-image-source: linear-gradient(to right, var(--start), var(--mid) ,var(--end));
  cursor: pointer;
  
}

button::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    inset: 0;
   
    z-index: -1;
    transition: all 0.4s;
}
button:hover{
  transform: scale(1.1);
}

button:hover::after{
  inset:-5px;
  filter: blur(10px);
  background: linear-gradient(to right,var(--start),var(--mid),var(--end));
}
</style>

<script setup>

</script>