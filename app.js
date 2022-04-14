$(document).ready(function(){
    
    const request = () => {
        fetch(`https://jsonplaceholder.typicode.com/users/`)
        .then((res) => res.json())
        .then((res) => {
            const user = document.getElementById('users')
            let item = ''
            console.log(res)
            res.forEach(element => {
                item = `${element.name} `
                console.log(item)
                user.append(item)
            });
            
        })
        .catch((err) => console.error(err));
    }
    
    
    request();

    
  
  });



