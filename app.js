

const getUserData = () => {
    return fetch('https://jsonplaceholder.typicode.com/users/')
    .then((res) => res.json())
    .catch((err) => console.error(err));
    //.then(json => console.log(json));
};

console.log(getUserData());

