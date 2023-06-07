<template>
    
    <button id="btn" @click="navigateTo('https://www.linkedin.com/in/priyanshuahuja/',{ external: true })">
       <slot></slot>
       
    </button>
  

</template>

<style scoped>
button{
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  padding: 1rem 2rem;
  border:none;
  outline: none;
  background: inherit;
  position: relative;
  /* border-width: 3px; */
  /* border: 10px solid; */
  border-image-slice: 1;
  /* border-width: 2px; */
  text-transform: uppercase;
  transition: all 0.4s;

  background: linear-gradient(#121212, #121212) padding-box,
              linear-gradient(to right, var(--start), var(--mid),var(--end)) border-box;
  border-radius: 10px;
  border: 3px solid transparent;
  cursor: pointer;
  
}


button:hover::after{
  /* background: linear-gradient(to right,var(--start),var(--end)); */
  /* transform:scale(1.1); */
  filter:blur(17px);
}

button::after{
  content: '';
  position: absolute;
  z-index: -1;
  transition: all 0.3s;
  inset:0px;
  filter: blur(13px);
  background: linear-gradient(to right,var(--mid),var(--end));
}
</style>

<script setup>

</script>