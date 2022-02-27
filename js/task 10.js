const loadData = () => {

    const search = document.getElementById('search-text');
    const searchText = search.value;
    search.value = '';
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayLoadData(data.drinks))

}

const dataContainer = document.getElementById('show-dataContainer');

const displayLoadData = (data) => {
    dataContainer.textContent = '';
    data.forEach(element => {
        console.log(element);
        const div = document.createElement('div');
        div.innerHTML=`
        <div onclick="imgDetails('${element.idDrink}','${element.strDrink}' ,'${element.strCategory}' ,'${element.strDrinkThumb}', '${element.strGlass}', '${element.strInstructions}','${element.dateModified}' ,'${element.strIngredient1}', '${element.strIngredient2}', '${element.strIngredient3}')" class="single-box shadow-sm">
           <img src="${element.strDrinkThumb}" alt="">
           <h2>${element.strDrink}</h2>
        </div>
        `;
        dataContainer.appendChild(div);

    });

}

const cockDetails = document.getElementById('cock-details');



const imgDetails = (id, name,cetagory ,img, glassStyle, instruction, datemodified ,Ingredient1, Ingredient2, Ingredient3) => {
   cockDetails.textContent='';
   const div = document.createElement('div');
   div.classList.add('details-box')
   div.innerHTML =`
   <img src="${img}" alt="">
   <h1><b>Id:</b> ${id}</h1>
   <h2><b>Name:</b> ${name}</h2>
   <h2><b>Cetagory:</b> ${cetagory}</h2>
   <h3><b>Glass-Style:</b> ${glassStyle}</h3>
   <h3><b>Date Modified:</b> ${datemodified}</h3>
   <h4><b>Ingredients:</b> ${Ingredient1}, ${Ingredient2}, ${Ingredient3}</h4>
   <h4><b>Intructions:</b> ${instruction}</h4>
   `;

   cockDetails.appendChild(div);
}