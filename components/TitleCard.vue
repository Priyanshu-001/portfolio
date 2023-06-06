<template>
    <div class="title-content">
       <h1 > Hi, I am Priyanshu Ahuja <br>
        I am a  <funny-text>Software Developer</funny-text></h1>
        <br>
        <div class="good-container">
        <funny-btn> contact me</funny-btn>
        <a href="#about"><i class="fa-sharp fa-regular fa-angles-down"></i> Resume</a>
        </div>
    </div>
</template>

<style scoped>
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
a{  text-decoration: none;
    color:inherit;
    position: relative;
}
a:after{
    content: "";
    height: 3px;
    left:0px;
    right:0px;
    bottom:-1.2ch;
    width:110%;
    position:absolute;
    background: linear-gradient(to right,var(--start),var(--mid),var(--end));
}
    
    
</style>

