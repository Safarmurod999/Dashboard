
import get from './src/getElement.js';
import fetchApi from './src/fetchApi.js';
const loginUrl = "https://reqres.in/api/login";

const nameUser = get('#text');
const passwordInput = get('#password');
const loginForm = get(".loginForm");
const msg = get('#alertMsg');

const data = fetchApi(loginUrl);

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = nameUser.value;
    const password = passwordInput.value;
    console.log(username);
    console.log(password);
    data.then((res) => {
        const user = res.data.find((user) => user.name === username);
        if (user && user.color === password) {
            msg.classList.remove("text-warning");
            msg.classList.add('text-success');
            msg.innerHTML = "Welcome!";
            setTimeout(() => {
                window.location.href = "./table.html";
            }, 1000)
        } else {
            msg.classList.remove("text-warning");
            msg.classList.add('text-danger');
            msg.innerHTML = "Incorrect username or password!";
        }
    })
});
