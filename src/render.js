import get from './getElement.js';
import fetchApi from './fetchApi.js';

const dashBody = get('#dash-body');

let priority=[
    'high','low','normal','low','normal','high','normal','high'
]

async function fetcher(url){
    let data = await fetchApi(url);
    data.pop();
    data.pop();
    return data;
}
async function renderUser(url) {
    let data=await fetcher(url);
    for (let i = 0; i < data.length; i++) {
        data[i].priority=priority[i];
    }
    data.forEach(el => {
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

export default renderUser;