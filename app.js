$(document).ready(() => {
    
    const request = () => {
        fetch(`https://jsonplaceholder.typicode.com/users/`)
        .then((res) => res.json())
        .then((res) => {
            const user = document.getElementById('users')
            let item = ''
            res.forEach(element => {
                item = `${element.name} `
                const li = document.createElement("li")
                li.innerHTML = item
                li.classList.add('item');
                li.dataset.userId = element.id;
                li.addEventListener('click', (event) => postRequest(event))
                user.appendChild(li);
            });
        })
        .catch((err) => console.error(err));
    }

    const postRequest = (event) => {
            const userId = event.target.dataset.userId;   
            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
                .then((res) => res.json())
                .then(json => renderPosts(json, event.target))
        }
    
    const renderPosts = (posts, target) => {    
        clear();

        const list = document.createElement("ul");

        for (let i = 0; i < posts.length; i++) {

            const item = document.createElement("li");
            const liTitle = document.createElement("strong");
            const liBody = document.createElement("p");

            liTitle.innerHTML = posts[i].title;
            liBody.innerHTML = posts[i].body;

            item.appendChild(liTitle);
            item.appendChild(liBody);
            list.appendChild(item);
        }
        $('#posts').append(target.appendChild(list));
    }

    const clear = () => {
        $('#posts').empty();   
    }

    request();
  
  });



