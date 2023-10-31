let count=0;
let result = document.getElementById("result");

function convert() {
    count=count+1;
    if(count>1){
        result.innerText="";
        
    }
    let selected = document.getElementById("sel").value;
  

    let l1 = document.createElement("label");
    let l2 = document.createElement("label");
    let r2 = document.createElement("p");
    let r1 = document.createElement("p");
    let f = parseInt(document.getElementById("from").value);
    if (selected === "Fahrenheit") {


        l1.for = "celsius";
        l1.textContent = "result in celsius"

        r1.classList.add("celsius");


        let result1 = 5 / 9 * (f - 32);

        r1.textContent = ":" + result1;
        result.appendChild(l1);
        result.appendChild(r1);


        l2.for = "kelvin";
        l2.textContent = "result in kelvin"

        r2.classList.add("kelvin");

        let r = cel_kel(result1);



        r2.textContent = ":" + r;
        result.appendChild(l2);
        result.appendChild(r2);



    }
    else if (selected === "Celsius") {


        l1.for = "Fahrenheit";
        l1.textContent = "result in Fahrenheit"
        r1.classList.add("Fahrenheit");
        let result1 = (f * 1.8) + 32;

        r1.textContent = ":" + result1;
        result.appendChild(l1);
        result.appendChild(r1);


        l2.for = "kelvin";
        l2.textContent = "result in kelvin"

        r2.classList.add("kelvin");

        let r = cel_kel(f);



        r2.textContent = ":" + r;
        result.appendChild(l2);
        result.appendChild(r2);



    }
    else {
        l1.for = "kelvin";
        l1.textContent = "result in celcius"

        r1.classList.add("celcius");

        let r = kel_cel(f);



        r1.textContent = ":" + r;
        result.appendChild(l1);
        result.appendChild(r1);

        l2.for = "Fahrenheit";
        l2.textContent = "result in Fahrenheit"
        r2.classList.add("Fahrenheit");
        let result1 = 1.8*r+32;

        r2.textContent = ":" + result1;
        result.appendChild(l2);
        result.appendChild(r2);


        

    }


}
function cel_kel(celsius) {
    return celsius + 273.15;

}
function kel_cel(kelvin) {
    return kelvin - 273.15;

}