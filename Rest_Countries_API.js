document.getElementById('userData').addEventListener('click', userData);
    
function userData(){
            fetch('https://restcountries.eu/rest/v2/all/').then(response => response.json())
            
   .then(countries => {
   var the_country = '';
   var the_capital = '';
   var the_flag = '';
   var the_currency = '';
   var the_language = '';
   var the_calling_code = '';
   
                 countries.forEach(function(country) {
       the_country += `${country.name}<br><br><hr>`;
       the_capital += `${country.capital}<br><br><hr>`; 
       the_flag += `${country.flag}<br><br><hr>`;  
       the_currency += `${country.currencies[0].symbol}<br><br><hr>`;
       the_language += `${country.languages[0].name}<br><br>`;
       the_calling_code += `${country.callingCodes[0]}<br><br>`;
               
                 });
                    document.getElementById("country").innerHTML = the_country;
document.getElementById("capital").innerHTML = the_capital; 
document.getElementById("flag").innerHTML = the_flag; 
document.getElementById("currency").innerHTML = the_currency; 
document.getElementById("language").innerHTML = the_language; 
document.getElementById("code").innerHTML = the_calling_code;                
                });
            }
