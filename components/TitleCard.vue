<template>
    <div class="title-content">
       <h1 ><span class="iron-text"> Hi, I am Priyanshu Ahuja </span> <br>
        <span class="iron-text">I am a </span> <funny-text>Software Developer</funny-text></h1>
        <br>
        <div class="good-container">
        <funny-btn> Get in Touch</funny-btn>
        <a href="#about">More About me</a>
        </div>
    </div>
</template>

<style scoped>
@keyframes background-pan {
  from {
    background-position: 0% center;
  }
  
  to {
    background-position: -200% center;
  }
}
.iron-text{
    background: linear-gradient(180deg,#fff,hsla(0,0%,100%,.75));
    background-clip: text;
    -webkit-background-clip: text;
    color:transparent;
}
    .title-content{
        text-align: center;
        width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    font-size: 1.3em;
    /* width: 100%; */
  height: 100%;
  background-size: cover;
  background-position: center center;
  background-repeat: repeat;
  background-image: url('/hexa_lock.svg');
}
.good-container{
    /* justify-content: baseline; */
    align-items: baseline;
    display: flex;
    gap:3rem;
}
a{  
    text-decoration-style: dotted;
    text-underline-offset: 15px;
    color:inherit;
    position: relative;
    padding:10px;
}
a:after{
    display: block;
    content: "";
    height: 0px;
    left:0px;
    right:0px;
   /* transform: translateY(110%); */
   bottom:0;
    width:100%;
    position:absolute;
    background-size: 200%;
    animation: background-pan 3s linear infinite;
    background: linear-gradient(to right,var(--end),var(--start),var(--end));
    z-index:-1;
    transition: all 0.2s ease-in;
    /* display: none; */
}
/* a:hover::after{
    background-position: -200% center;
    height:100%;
    width:100%;
    display: block;
    
*/

a:hover{
    text-shadow: 8px 2px var(--start);
}
    
    
</style>

