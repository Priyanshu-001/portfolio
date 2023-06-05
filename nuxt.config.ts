export default defineNuxtConfig({
    
    css: [
        
    //   'primevue/resources/themes/saga-blue/theme.css',
      'primevue/resources/primevue.css',
      'primeicons/primeicons.css',
      'primeflex/primeflex.css'
    ],
    build: {
      transpile: ['primevue']
    },
    app:{
        head:{
            title:'Hello',
            link:[
               { rel: 'stylesheet',
                type: 'text/css', 
                href:'/themeDark.css'
                 }
            ]
        }
    },
    ssr: true
  })