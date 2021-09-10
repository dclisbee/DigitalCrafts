let date = "09/10/2021"

for (let index = 0; index < date.length; index++) {
     if (date[index] = '/'){
        date = date.replace('/', '');
     }
    
}
let newDate = date.substring(4, 8) + date.substring(0, 5);
console.log(newDate);
