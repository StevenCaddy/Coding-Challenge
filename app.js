$(document).ready(function(){
    
    const request = () => {
        fetch(`https://jsonplaceholder.typicode.com/users/`)
        .then((res) => res.json())
        .then((res) => {
            const user = document.getElementById('users')
            console.log(res)
            res.forEach(element => {
                user.innerHTML = `${element.name}`
            });
            
        })
        .catch((err) => console.error(err));
    }
    
    
    request();

    
  
  });



