"use strict";

// https://restcountries.eu/rest/v2/all


(async function () {

    const data = await fetch('https://restcountries.eu/rest/v2/all');

    const dataJson = await data.json();
    let htmlString = ``;
    htmlString += htmlString;
    const listElement = document.getElementById("results");
    const region = dataJson.region;
    dataJson.forEach(element => {

        htmlString += ` <article>
               <label>
                 <h3>${element.name}</h3>
                 <div class="flagWrapper">
                   <img src="${element.flag}" />
                 </div>
                 <input type="checkbox"/>
                 Already visited
              </label>
             </article>`;
    });
    listElement.innerHTML = htmlString;

    region.sort();

    var checkBox = document.getElementById("myCheck");
    var total = document.getElementById("total");
    if (checkBox.checked === true) {
        let a = total.innerHTML;
        a++;
    }

})();