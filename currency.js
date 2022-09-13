// const { response } = require("har-validator");

document.addEventListener("DOMContentLoaded", () =>{ 
 const currency = document.querySelector('#rates').value;
 
 let apiRequest =
 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/eur.json')
 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/aud.json')
 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/cad.json')
 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/chf.json')
 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/nzd.json')
 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/bgn.json')
  
 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/usd.json')
 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/aud.json')
 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/cad.json')
 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/chf.json')
 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/nzd.json')
 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/bgn.json')

 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/aud/usd.json')
 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/aud/eur.json')
 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/aud/cad.json')
 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/aud/chf.json')
 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/aud/nzd.json')
 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/aud/bgn.json')

 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/cad/usd.json')
 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/cad/eur.json')
 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/cad/aud.json')
 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/cad/chf.json')
 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/cad/nzd.json')
 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/cad/bgn.json')

 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/chf/usd.json')
 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/chf/eur.json')
 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/chf/aud.json')
 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/chf/cad.json')
 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/chf/nzd.json')
 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/chf/bgn.json')

 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/nzd/usd.json')
 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/nzd/eur.json')
 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/nzd/aud.json')
 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/nzd/cad.json')
 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/nzd/chf.json')
 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/nzd/bgn.json')

 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/bgn/usd.json')
 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/bgn/eur.json')
 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/bgn/aud.json')
 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/bgn/cad.json')
 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/bgn/chf.json')
 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/bgn/nzd.json')

apiRequest.then((response) =>{
    
    return response.json();
})
.then ((data) =>{
    console.log(data) 

    // Group currency pair for USD
    
    document.getElementById('rates').addEventListener('change', function groupOne(event) {
    
        if(event.target.value == 'USD'){
       for(var i=0; i<data.length; i++){
        document.getElementById("pair-1").innerHTML += 
        data[i].id +' ' + data[i].eur + " <br />"
       }
     }
           
    })
 
})

});






























