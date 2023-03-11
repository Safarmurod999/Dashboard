import renderUser from './src/render.js';
import get from './src/getElement.js';
import fetchApi from './src/fetchApi.js';
import renderUser from './src/render.js';
import get from './src/getElement.js';
import fetchApi from './src/fetchApi.js';

const userUrl = "https://jsonplaceholder.typicode.com/users";

const dashBody = get('#dash-body');

let priority = [
    'high', 'low', 'normal', 'low', 'normal', 'high', 'normal', 'high'
]

renderUser(userUrl);

async function sortNameUp() {
    let data = await fetchApi(userUrl);
    data.pop();
    data.pop();
    let sorted = data.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    for (let i = 0; i < data.length; i++) {
        sorted[i].priority = priority[i];
    }
    sorted.forEach(el => console.log(el));
    dashBody.innerHTML = "";
    sorted.forEach(el => {
        dashBody.innerHTML += `
            <tr>
            <th scope="row">
                <div>
                    <img src="images/${el.id}.png" alt="...">
                    <h4>${el.email}<br>
                        <p>Updated 1 day ago</p>
                    </h4>
                </div>
            </th>
            <td>${el.name} <br>
                <p>on 24.05.2019</p>
            </td>
            <td>May 26, 2019 <br>
                <p>6:30 PM</p>
            </td>
            <td>
                <div>
                    <div class="dropdown">
                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button"
                            id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            <button><i class="uil uil-bookmark-full"></i></button><button><i
                                    class="uil uil-ellipsis-v"></i></button>
                        </a>
        
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a class="dropdown-item" href="#">High</a></li>
                            <li><a class="dropdown-item" href="#">Low</a></li>
                            <li><a class="dropdown-item" href="#">Normal</a></li>
                        </ul>
                    </div>
                </div>
            </td>
        </tr>`;
    });
}

async function sortNameDown() {
    let data = await fetchApi(userUrl);
    data.pop();
    data.pop();
    let sorted = data.sort((a, b) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0));
    for (let i = 0; i < data.length; i++) {
        sorted[i].priority = priority[i];
    }
    sorted.forEach(el => console.log(el));
    dashBody.innerHTML = "";
    sorted.forEach(el => {
        dashBody.innerHTML += `
            <tr>
            <th scope="row">
                <div>
                    <img src="images/${el.id}.png" alt="...">
                    <h4>${el.email}<br>
                        <p>Updated 1 day ago</p>
                    </h4>
                </div>
            </th>
            <td>${el.name} <br>
                <p>on 24.05.2019</p>
            </td>
            <td>May 26, 2019 <br>
                <p>6:30 PM</p>
            </td>
            <td>
                <div>
                    <div class="dropdown">
                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button"
                            id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            <button><i class="uil uil-bookmark-full"></i></button><button><i
                                    class="uil uil-ellipsis-v"></i></button>
                        </a>
        
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a class="dropdown-item" href="#">High</a></li>
                            <li><a class="dropdown-item" href="#">Low</a></li>
                            <li><a class="dropdown-item" href="#">Normal</a></li>
                        </ul>
                    </div>
                </div>
            </td>
        </tr>`;
    });
}

async function filterHigh(priority) {
  
}

const sortValue = document.querySelectorAll('#dropdown1 ul li');
const filterValue = document.querySelectorAll('#dropdown2 ul li');

console.log(filterValue);
console.log(sortValue);

// filterValue[0].addEventListener('click',filterHigh)

filterValue.forEach(el=>{
    el.addEventListener('click',async (e)=>{
        let prior=e.target.innerHTML.toLowerCase();
        let data = await fetchApi(userUrl);
        data.pop();
        data.pop();
        for (let i = 0; i < data.length; i++) {
            data[i].priority = priority[i];
        }
        let sorted = data.filter(el => el.priority == prior);
        sorted.forEach(el => console.log(el));
        dashBody.innerHTML = "";
        sorted.forEach(el => {
            dashBody.innerHTML += `
                    <tr>
                    <th scope="row">
                        <div>
                            <img src="images/${el.id}.png" alt="...">
                            <h4>${el.email}<br>
                                <p>Updated 1 day ago</p>
                            </h4>
                        </div>
                    </th>
                    <td>${el.name} <br>
                        <p>on 24.05.2019</p>
                    </td>
                    <td>May 26, 2019 <br>
                        <p>6:30 PM</p>
                    </td>
                    <td>
                        <div>
                            <div class="dropdown">
                                <a class="btn btn-secondary dropdown-toggle" href="#" role="button"
                                    id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    <button><i class="uil uil-bookmark-full"></i></button><button><i
                                            class="uil uil-ellipsis-v"></i></button>
                                </a>
                
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">High</a></li>
                                    <li><a class="dropdown-item" href="#">Low</a></li>
                                    <li><a class="dropdown-item" href="#">Normal</a></li>
                                </ul>
                            </div>
                        </div>
                    </td>
                </tr>`;
        });
    });
})

sortValue[0].addEventListener('click', sortNameUp);
sortValue[1].addEventListener('click', sortNameDown);
