<template>
     <div class="blank">
      <!-- <header> Yo gusy</header> -->
      <main>
         <NuxtPage/>
      </main>
     </div>
</template>

<style >
*{
   font-family:'Rubik', sans-serif;
}
:root {  
  --start: rgb(123, 31, 162);
  --mid: rgb(103, 58, 183);
  --end: rgb(244, 143, 177);
  
}
@keyframes background-pan {
  from {
    background-position: 0% center;
  }
  
  to {
    background-position: -200% center;
  }
}
   html,body{
      margin:0px;
      padding:0px;
      overflow-x: hidden;
   }
   h1{
      font-family: "Rubik", serif !important;
      word-wrap: break-word;
      overflow-wrap: break-word;
      font-size: 2.2em;
      
   }
   .full-scrn{
      width:100vw;
   }
  

</style>
<style scoped>
*{
   color:aliceblue;
}
.blank{
      min-width: 100vw;
      min-height: 100vh;
      width:100%;
      height:100%;
      /* background-color: orange; */
   }
   header{
      width: 100%;
      padding:2ch;

   }

   main{
      display:flex;
   }
</style>