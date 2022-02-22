let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
let arr2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

const site = document.querySelector('#site');
let matrix = Matrix(arr1, arr2);
function Matrix(ar1, ar2){
    let res = [];
    for(let i = 0; i < ar1.length; i++){
        
        res.push([]);
        for(let j = 0; j < ar1.length; j++){
            let index = '' + ar1[j] + ar2[i];
        res[i].push(index);
        }
    }
    return res;
}
let html = '';
html = bildCheesBord(matrix, 8);
site.insertAdjacentHTML('beforeend', html);
   function bildCheesBord(matrix, coluns) {
       let html = '';
    for(let i = 0; i < coluns; i++){
        html += bildRow(matrix[i], i);
    }
    return html;
   }

function bildRow(array, index){
    let html = '';
    array.forEach((item, i) => {
        let black = `<div class="col border-dark bg-dark">`;
        let white = `<div class="col border-dark bg-warning">`;
        let color;
        index %2 !== 0 || ([black, white] = [white, black]);
        if(i %2 == 0) color = black;
        else color = white
        html += `
        ${color}
        <div class="ratio ratio-1x1">
        <div class="col text-center">${item}</div>
    </div>
      </div>
        `
    });
return `
    <div class="row g-0">
    ${html}
    </div>
  `
   
}