<template>
     <div class="blank">
      <!-- <header> Yo gusy</header> -->
      <main>
         <NuxtPage/>
      </main>
     </div>
</template>

<style >
:root {  
  --start: rgb(123, 31, 162);
  --mid: rgb(103, 58, 183);
  --end: rgb(244, 143, 177);
  
}
   html,body{
      margin:0px;
      padding:0px;
      overflow-x: hidden;
   }
   h1{
      font-family: "Rubik", sans-serif;
      word-wrap: break-word;
      overflow-wrap: break-word;
      
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