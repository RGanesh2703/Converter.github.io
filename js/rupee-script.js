const inputs = document.querySelectorAll(".element input");
const r = document.querySelector("#Rupee");
const d = document.querySelector("#Dollar");
const eu = document.querySelector("#Euro");


inputs.forEach(input=>{
    input.addEventListener("input" , e =>{ 

        const unit = e.target.id;

        const v = parseInt(e.target.value);
         
        if(unit === "Rupee"){
            d.value = parseFloat(v * 0.012).toFixed(4)*1;
            eu.value = parseFloat(v * 0.011).toFixed(4)*1;
        }
        else if(unit === "Dollar"){
            r.value = parseFloat(v * 82.62).toFixed(4)*1;
            eu.value = parseFloat(v * 0.91).toFixed(4)*1;
        }
        else if(unit === "Euro"){
            r.value= parseFloat(v * 90.63).toFixed(4)*1;
            d.value = parseFloat(v * 1.10).toFixed(4)*1;

        }
    });
});