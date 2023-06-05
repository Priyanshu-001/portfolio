<template>
     <div class="blank">
      <!-- <header> Yo gusy</header> -->
      <main>
         <NuxtPage/>
      </main>
     </div>
</template>

<style >
   html,body{
      margin:0px;
      padding:0px;
   }
   h1{
      font-family: "Rubik", sans-serif;
      
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