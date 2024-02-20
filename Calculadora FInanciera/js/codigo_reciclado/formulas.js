//ANUALIDADES VENCIDAS

var anualidad = 2000000;
var tiempo = 36;
var tasa_interes = 2;
var interes = tasa_interes/100;
var valor_presente = 0;


valor_presente = anualidad*((1+interes)**tiempo-1)/(interes*(1+interes)**tiempo);

valor_final = anualidad*(((1+interes)**tiempo-1))/interes;

anualidad_valor_presente = valor_presente*(interes*(1+interes)**tiempo)/((1+interes)**tiempo-1);

anualidad_valor_final =valor_final*interes/(((1+interes)**tiempo-1))

cuota_valor_presente = (Math.log(anualidad)-Math.log(anualidad-(interes*valor_presente)))/Math.log((1+interes));

cuota_valor_final = (Math.log(valor_final*interes+anualidad)-Math.log(anualidad))/Math.log(1+interes);

// Log to console
console.log("Anualidad Vencida");
console.log("Valor presente");
console.log(valor_presente.toFixed(2));
console.log("Valor futuro");
console.log(valor_final.toFixed(2));
console.log("Anualidad con valor presente");
console.log(anualidad_valor_presente);
console.log("Anualidad con valor futuro");
console.log(anualidad_valor_final);
console.log("Cuota con valor presente");
console.log(Math.round(cuota_valor_presente));
console.log("Cuota con valor final");
console.log(Math.round(cuota_valor_final));





//ANUALIDADES ANTICIPADAS
var anualidad = 20000;
var tiempo = 5;
var tasa_interes = 7;
var interes = tasa_interes/100;
var valor_presente = 0;


valor_presente = anualidad*(1+interes)*((1+interes)**tiempo-1)/(interes*(1+interes)**tiempo);

valor_final = anualidad*((1+interes)**(tiempo+1)-(1+interes))/interes;

anualidad_valor_presente = (valor_presente*(interes*(1+interes)**tiempo)/((1+interes)**tiempo-1))/(1+interes);

anualidad_valor_final = valor_final/((((1+interes)**(tiempo+1)-1)/interes)-1);

cuota_valor_presente = ((Math.log(anualidad)-Math.log(anualidad-interes*(valor_presente-anualidad)))/Math.log(1+interes))+1;


// Log to console

console.log("Anualidad Anticipada");
console.log("Valor presente");
console.log(valor_presente.toFixed(2));
console.log("Valor futuro");
console.log(valor_final.toFixed(2));
console.log("Anualidad con valor presente");
console.log(Math.round(anualidad_valor_presente));
console.log("Anualidad con valor futuro");
console.log(Math.round(anualidad_valor_final));
console.log("Cuota con valor presente");
console.log(Math.round(cuota_valor_presente));





// GRADIENTES

//Gradiente lineal creciente
var  anualidad= 150000;
var tasa_interes = 3;
var interes = tasa_interes/100;
var tiempo = 24;
var gradiente = 10000;


//valor presente
vp_paso1 = anualidad*(((1+interes)**tiempo-1)/(interes*(1+interes)**tiempo));
vp_paso2 = (gradiente/interes);
vp_paso3 = ((1+interes)**tiempo-1)/(interes*(1+interes)**tiempo);
vp_paso4 = tiempo/(1+interes)**tiempo;
vp_paso5 = vp_paso3 - vp_paso4;
vp_paso6 = vp_paso2 * vp_paso5;

valor_presente = vp_paso1 + vp_paso6;


//valor final
vf_paso1 = anualidad*(((1+interes)**tiempo-1)/interes);
vf_paso2 = (gradiente/interes);
vf_paso3 = (((1+interes)**tiempo-1)/interes)-tiempo;
vf_paso4 = vf_paso2 * vf_paso3;
valor_final = vf_paso1 + vf_paso4;


//anualidad valor futuro

a_paso1 = valor_final;
a_paso2 = gradiente/interes;
a_paso3 = (((1+interes)**tiempo-1)/interes)-tiempo;
a_paso4 = a_paso2 * a_paso3;
a_paso5 = a_paso1 - a_paso4;
a_paso6 = (((1+interes)**tiempo-1)/interes);
anualidad_valor_final = a_paso5 /a_paso6;


//cuota

cuota = anualidad+(tiempo-1)*gradiente;

// Log to console

console.log("Gradiente lineal creciente");
console.log("Valor presente");
console.log(valor_presente.toFixed(2));
console.log("Valor futuro");
console.log(valor_final.toFixed(2));
console.log("Anualidad con valor final");
console.log(Math.round(anualidad_valor_final));
console.log("Valor de la Cuota");
console.log(Math.round(cuota));



//Gradiente lineal decreciente

var  anualidad= 2500000;
var tasa_interes = 3;
var interes = tasa_interes/100;
var tiempo = 18;
var gradiente = 10000;


//valor presente
vp_paso1 = anualidad*(((1+interes)**tiempo-1)/(interes*(1+interes)**tiempo));
vp_paso2 = (gradiente/interes);
vp_paso3 = ((1+interes)**tiempo-1)/(interes*(1+interes)**tiempo);
vp_paso4 = tiempo/(1+interes)**tiempo;
vp_paso5 = vp_paso3 - vp_paso4;
vp_paso6 = vp_paso2 * vp_paso5;

valor_presente = vp_paso1 - vp_paso6;


//valor final
vf_paso1 = anualidad*(((1+interes)**tiempo-1)/interes);
vf_paso2 = (gradiente/interes);
vf_paso3 = (((1+interes)**tiempo-1)/interes)-tiempo;
vf_paso4 = vf_paso2 * vf_paso3;
valor_final = vf_paso1 - vf_paso4;


//anualidad valor futuro

a_paso1 = valor_final;
a_paso2 = gradiente/interes;
a_paso3 = (((1+interes)**tiempo-1)/interes)-tiempo;
a_paso4 = a_paso2 * a_paso3;
a_paso5 = a_paso1 + a_paso4;
a_paso6 = (((1+interes)**tiempo-1)/interes);
anualidad_valor_final = a_paso5 /a_paso6;


//cuota

cuota = anualidad-(tiempo-1)*gradiente;

// Log to console

console.log("Gradiente lineal decreciente");
console.log("Valor presente");
console.log(valor_presente.toFixed(2));
console.log("Valor futuro");
console.log(valor_final.toFixed(2));
console.log("Anualidad con valor final");
console.log(Math.round(anualidad_valor_final));
console.log("Valor de la Cuota");
console.log(Math.round(cuota));