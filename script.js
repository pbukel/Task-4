/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */
"use strict";
const ENDPOINT = "cars.json";
const append = document.getElementById("output");

fetch(ENDPOINT)
  .then((response) => response.json())
  .then(print)
  .catch((error) => alert(error));

function print(data) {
  console.log(data);
  for (let x of data) {
    let divas = document.createElement("div");
    divas.classList.add("append");
    divas.innerHTML = `
  <div class="manufacturer">${x.brand}</div>
              <div class="models">
                <ul>

                  ${x.models.map((y) => `<li>${y}</li>`).join("")}
                  
                </ul>
              </div>
  `;
    append.append(divas);
  }
}
