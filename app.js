const filter = document.getElementById('filter');
const resultEL = document.getElementById('result');
const listItem = []

getData();

filter.addEventListener('input' ,(e) => filterData(e.target.value)

)



function filterData(e){
    listItem.forEach(item => {
        if(item.innerText.toLowerCase().includes(e.toLowerCase())){
            item.classList.remove('hide');
        }else{
            item.classList.add('hide')
        }
    })

}


async function getData(){
    const res = await fetch('https://randomuser.me/api?results=20')
    const { results } = await res.json();
    console.log(res);

    // clearResult
    resultEL.innerHTML = ""
    results.forEach(user => {
        const li = document.createElement('li');
        listItem.push(li)

        li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}">
        <div class="userInfo">
            <h3>${user.name.first} ${user.name.last}</h3>
            <p>${user.location.city}</p>
        </div>
        

        `

        resultEL.appendChild(li);
        
    });
}







console.log(resultEL);