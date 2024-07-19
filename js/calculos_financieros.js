
// Calculo de Anualidades

//Anualidad vencida


function valor_presente_vencida(){

    var anualidad = document.getElementById("anualidad").value;
    var tasa_interes = document.getElementById("tasa_interes").value;
    var interes = tasa_interes/100;
    var tiempo = document.getElementById("tiempo").value;

    valor_presente = anualidad*((1+interes)**tiempo-1)/(interes*(1+interes)**tiempo);
    var respuesta = document.getElementById("respuesta");
    
    respuesta.textContent = Math.round(valor_presente);
    
    
}


function valor_futuro_vencida(){

    var anualidad = document.getElementById("anualidad1").value;
    var tasa_interes = document.getElementById("tasa_interes1").value;
    var interes = tasa_interes/100;
    var tiempo = document.getElementById("tiempo1").value;

    valor_final = anualidad*(((1+interes)**tiempo-1))/interes;
    var respuesta1 = document.getElementById("respuesta1");
   
    respuesta1.textContent = Math.round(valor_final);
    
    
}


function anualidad_valor_presente_vencida(){

    var valor_presente = document.getElementById("valor_presente").value;
    var tasa_interes = document.getElementById("tasa_interes2").value;
    var interes = tasa_interes/100;
    var tiempo = document.getElementById("tiempo2").value;

    anualidad_valor_presente = valor_presente*(interes*(1+interes)**tiempo)/((1+interes)**tiempo-1);

    var respuesta2 = document.getElementById("respuesta2");
    
    respuesta2.textContent = Math.round(anualidad_valor_presente);
    
    
}


function anualidad_valor_futuro_vencida(){

    var valor_futuro = document.getElementById("valor_futuro").value;
    var tasa_interes = document.getElementById("tasa_interes3").value;
    var interes = tasa_interes/100;
    var tiempo = document.getElementById("tiempo3").value;

    anualidad_valor_final =valor_final*interes/(((1+interes)**tiempo-1))
    var respuesta3 = document.getElementById("respuesta3");
    
    respuesta3.textContent = anualidad_valor_final;
    
   
    
}


function pagos_valor_presente_vencida(){

    var anualidad= document.getElementById("anualidad2").value;
    var valor_presente = document.getElementById("valor_presente1").value;
    var tasa_interes = document.getElementById("tasa_interes4").value;
    var interes = tasa_interes/100;

    cuota_valor_presente = (Math.log(anualidad)-Math.log(anualidad-(interes*valor_presente)))/Math.log((1+interes));
    var respuesta4 = document.getElementById("respuesta4");
    
    respuesta4.textContent = Math.round(cuota_valor_presente);
   
    
}


function pagos_valor_futuro_vencida(){

    var anualidad= document.getElementById("anualidad6").value;
    var valor_final = document.getElementById("valor_futuro2").value;
    var tasa_interes = document.getElementById("tasa_interes10").value;
    var interes = tasa_interes/100;

    
    cuota_valor_final = (Math.log(valor_final*interes+Number(anualidad))-Math.log(anualidad))/Math.log(1+Number(interes));

    var respuesta10 = document.getElementById("respuesta10");
    
    respuesta10.textContent = Math.round(cuota_valor_final);
    
    
}



//Anualidad Anticipada

function valor_presente_anticipada(){

    var anualidad = document.getElementById("anualidad3").value;
    var tasa_interes = document.getElementById("tasa_interes5").value;
    var tiempo = document.getElementById("tiempo4").value;
    var interes = tasa_interes/100;
    
    valor_presente = anualidad*(1+interes)*((1+interes)**tiempo-1)/(interes*(1+interes)**tiempo);
    var respuesta5 = document.getElementById("respuesta5");
  
    respuesta5.textContent = valor_presente.toFixed(2);
    
 
    
}

function valor_futuro_anticipada(){

    var anualidad = document.getElementById("anualidad4").value;
    var tasa_interes = document.getElementById("tasa_interes6").value;
    var tiempo = document.getElementById("tiempo5").value;
    var interes = tasa_interes/100;

    valor_final = anualidad*((1+interes)**(tiempo+1)-(1+interes))/interes;

    var respuest6 = document.getElementById("respuesta6");
    
    respuesta6.textContent = valor_final.toFixed(2);
    
    
}



function anualidad_valor_presente_anticipada(){

    var valor_presente = document.getElementById("valor_presente2").value;
    var tasa_interes = document.getElementById("tasa_interes7").value;
    var tiempo = document.getElementById("tiempo6").value;
    var interes = tasa_interes/100;

    anualidad_valor_presente = (valor_presente*(interes*(1+interes)**tiempo)/((1+interes)**tiempo-1))/(1+interes);
    var respuesta7 = document.getElementById("respuesta7");
   
    respuesta7.textContent = Math.round(anualidad_valor_presente);
    
    
}




function anualidad_valor_futuro_anticipada(){

    var valor_final = document.getElementById("valor_futuro1").value;
    var tasa_interes = document.getElementById("tasa_interes8").value;
    interes = tasa_interes/100;
    var tiempo = document.getElementById("tiempo7").value;

    anualidad_valor_final = valor_final/((((1+Number(interes))**(Number(tiempo)+1)-1)/interes)-1);

    var respuesta8 = document.getElementById("respuesta8");
 
    respuesta8.textContent = Math.round(anualidad_valor_final);
    
    
    
}

function pagos_valor_presente_anticipada(){

    var anualidad= document.getElementById("anualidad5").value;
    var valor_presente = document.getElementById("valor_presente3").value;
    var tasa_interes = document.getElementById("tasa_interes9").value;
    var interes = tasa_interes/100;

    cuota_valor_presente = ((Math.log(anualidad)-Math.log(anualidad-interes*(valor_presente-anualidad)))/Math.log(1+interes))+1;
    var respuesta9 = document.getElementById("respuesta9");
   
    respuesta9.textContent = Math.round(cuota_valor_presente);
    
    
}



//Gradientes

// Gradiente lineal creciente

function valor_presente_gradiente_creciente(){

    var anualidad = document.getElementById("anualidad_1").value;
    var tasa_interes = document.getElementById("tasa_interes_1").value;
    var interes = tasa_interes/100;
    var tiempo = document.getElementById("tiempo_1").value;
    var gradiente = document.getElementById("gradiente_1").value;
    
    vp_paso1 = anualidad*(((1+interes)**tiempo-1)/(interes*(1+interes)**tiempo));
    vp_paso2 = (gradiente/interes);
    vp_paso3 = ((1+interes)**tiempo-1)/(interes*(1+interes)**tiempo);
    vp_paso4 = tiempo/(1+interes)**tiempo;
    vp_paso5 = vp_paso3 - vp_paso4;
    vp_paso6 = vp_paso2 * vp_paso5;

    valor_presente = vp_paso1 + vp_paso6;

    var respuesta = document.getElementById("respuesta_1");
   
    respuesta.textContent = valor_presente.toFixed(2);
    
   
    
}


function valor_futuro_gradiente_creciente(){

    var anualidad = document.getElementById("anualidad_2").value;
    var tasa_interes = document.getElementById("tasa_interes_2").value;
    interes = tasa_interes/100;
    var tiempo = document.getElementById("tiempo_2").value;
    var gradiente = document.getElementById("gradiente_2").value;
    
    vf_paso1 = anualidad*(((1+interes)**tiempo-1)/interes);
    vf_paso2 = (gradiente/interes);
    vf_paso3 = (((1+interes)**tiempo-1)/interes)-tiempo;
    vf_paso4 = vf_paso2 * vf_paso3;
    valor_final = vf_paso1 + vf_paso4;

    var respuesta = document.getElementById("respuesta_2");
   
    respuesta.textContent = Math.round(valor_final);
    
    
}


function anualidad_valor_futuro_gradiente_creciente(){

    var valor_final = document.getElementById("valor_futuro_1").value;
    var tasa_interes = document.getElementById("tasa_interes_3").value;
    interes = tasa_interes/100;
    var tiempo = document.getElementById("tiempo_3").value;
    var gradiente = document.getElementById("gradiente_3").value;
    
    
    a_paso1 = valor_final;
    a_paso2 = gradiente/interes;
    a_paso3 = (((1+interes)**tiempo-1)/interes)-tiempo;
    a_paso4 = a_paso2 * a_paso3;
    a_paso5 = a_paso1 - a_paso4;
    a_paso6 = (((1+interes)**tiempo-1)/interes);
    anualidad_valor_final = a_paso5 /a_paso6;

    var respuesta = document.getElementById("respuesta_3");
    
    respuesta.textContent = Math.round(anualidad_valor_final);
    
   
}

function pagos_gradiente_creciente(){

    var anualidad= document.getElementById("anualidad_3").value;
    var tiempo = document.getElementById("cuota_1").value;
    var gradiente = document.getElementById("variacion_1").value;
 
    
    var respuesta = document.getElementById("respuesta_4");

    cuota = Number(anualidad)+(Number(tiempo)-1)*gradiente;

    respuesta.textContent = cuota;
    
    
   
}


// Gradiente lineal decreciente

function valor_presente_gradiente_decreciente(){

    var anualidad = document.getElementById("anualidad_11").value;
    var tasa_interes = document.getElementById("tasa_interes_11").value;
    var interes = tasa_interes/100;
    var tiempo = document.getElementById("tiempo_11").value;
    var gradiente = document.getElementById("gradiente_11").value;
    

    vp_paso1 = anualidad*(((1+interes)**tiempo-1)/(interes*(1+interes)**tiempo));
    vp_paso2 = (gradiente/interes);
    vp_paso3 = ((1+interes)**tiempo-1)/(interes*(1+interes)**tiempo);
    vp_paso4 = tiempo/(1+interes)**tiempo;
    vp_paso5 = vp_paso3 - vp_paso4;
    vp_paso6 = vp_paso2 * vp_paso5;

    valor_presente = vp_paso1 - vp_paso6;

    var respuesta = document.getElementById("respuesta_11");
    
    respuesta.textContent = Math.round(valor_presente);
    
    
    
}

function valor_futuro_gradiente_decreciente(){

    var anualidad = document.getElementById("anualidad_21").value;
    var tasa_interes = document.getElementById("tasa_interes_21").value;
    var interes = tasa_interes/100;
    var tiempo = document.getElementById("tiempo_21").value;
    var gradiente = document.getElementById("gradiente_21").value;
    
    
    vf_paso1 = anualidad*(((1+interes)**tiempo-1)/interes);
    vf_paso2 = (gradiente/interes);
    vf_paso3 = (((1+interes)**tiempo-1)/interes)-tiempo;
    vf_paso4 = vf_paso2 * vf_paso3;
    valor_final = vf_paso1 - vf_paso4;

    var respuesta = document.getElementById("respuesta_21");

    
    respuesta.textContent = Math.round(valor_final);
    
 
}

function anualidad_valor_futuro_gradiente_decreciente(){

    var valor_final = document.getElementById("valor_futuro_11").value;
    var tasa_interes = document.getElementById("tasa_interes_31").value;
    var tiempo = document.getElementById("tiempo_31").value;
    var gradiente = document.getElementById("gradiente_31").value;
    var interes = tasa_interes/100;
    

    a_paso1 = Number(valor_final);
    a_paso2 = gradiente/interes;
    a_paso3 = (((1+Number(interes))**Number(tiempo)-1)/interes)-Number(tiempo);
    a_paso4 = Number(a_paso2) * Number(a_paso3);
    a_paso5 = Number(a_paso1) + Number(a_paso4);
    a_paso6 = (((1+Number(interes))**Number(tiempo)-1)/interes);
    anualidad_valor_final = Number(a_paso5) /Number(a_paso6);
    var respuesta = document.getElementById("respuesta_31");
 
    respuesta.textContent = Math.round(anualidad_valor_final);
    
  
}

function pagos_gradiente_decreciente(){

    var anualidad= document.getElementById("anualidad_31").value;
    var tiempo = document.getElementById("cuota_11").value;
    var gradiente = document.getElementById("variacion_11").value;
 
    cuota = anualidad-(tiempo-1)*gradiente;
    var respuesta = document.getElementById("respuesta_41");
    
    respuesta.textContent = cuota;
    
 
}


// Tabla Amortización

//Cuota fija

function cuota_fija_amortizacion(){

    var monto= document.getElementById("monto_1").value;
    var tiempo= document.getElementById("tiempo_41").value;
    var tasa_interes = document.getElementById("tasa_interes_41").value;
    var llenarTabla = document.querySelector("#lista_tabla tbody");
    
    let fechas = [];
    let fechaActual = Date.now();
    let mes_actual = moment(fechaActual);

    let pagoInteres = 0;
    let pagoCapital = 0;
    let cuota = 0;

    cuota = monto * (Math.pow(1+tasa_interes/100, tiempo)*tasa_interes/100)/(Math.pow(1+tasa_interes/100, tiempo)-1);
    //console.log(cuota);
    
    for(let i = 1; i <= tiempo; i++){

        pagoInteres = parseFloat(monto*(tasa_interes/100));
        pagoCapital = cuota - pagoInteres;
        monto = parseFloat(monto-pagoCapital);

        //Formato fechas

        fechas[i] = mes_actual.format('DD-MM-YYYY');
        mes_actual.add(1, 'month');

        var row = document.createElement('tr');
        row.innerHTML = `
            <td>${fechas[i]}</td>
            <td>${cuota.toFixed(2)}</td>
            <td>${pagoCapital.toFixed(2)}</td>
            <td>${pagoInteres.toFixed(2)}</td>
            <td>${monto.toFixed(2)}</td>
        `;

        llenarTabla.appendChild(row);


    }
    //var respuesta = document.getElementById("respuesta_51");
    //Pruebas unitarias
    //respuesta.textContent = monto;
    //respuesta.textContent = tiempo;
    //respuesta.textContent = tasa_interes;
    
    
    //alert(valor_presente);
}


// Tabla de Capitalización

function capitalizacion(){

    var monto= document.getElementById("monto_11").value;
    var tiempo= document.getElementById("tiempo_51").value;
    var tasa_interes = document.getElementById("tasa_interes_51").value;
    
    var llenarTabla = document.querySelector("#lista_tabla1 tbody");
    
    let fechas = [];
    let fechaActual = Date.now();
    let mes_actual = moment(fechaActual);

    let pagoInteres = 0;
    let pagoCapital = 0;
    let cuota = 0;

    //cuota = monto * (Math.pow(1+tasa_interes/100, tiempo)*tasa_interes/100)/(Math.pow(1+tasa_interes/100, tiempo)-1);
    //console.log(cuota);
    let capitalInicial = monto;
    let interesGenerado = 0;
    let capitalFinal = 0;

    interesGenerado = parseFloat(monto * (tasa_interes/100));
    capitalFinal = parseFloat(Number(monto) + interesGenerado);

    //console.log(interesGenerado)
    //console.log(capitalFinal)
    
    fechas[1] = mes_actual.format('DD-MM-YYYY');
        mes_actual.add(1, 'month');

        var row = document.createElement('tr');
        row.innerHTML = `
            <td>${fechas[1]}</td>
            <td>${capitalInicial}</td>
            <td>${interesGenerado.toFixed(2)}</td>
            <td>${capitalFinal.toFixed(2)}</td>
        `;

        llenarTabla.appendChild(row);

    
     for(let i = 2; i <= tiempo; i++){

        capitalInicial = capitalFinal;
        interesGenerado = parseFloat(capitalInicial * (tasa_interes/100));
        capitalFinal = parseFloat(Number(capitalInicial) + interesGenerado);

        fechas[i] = mes_actual.format('DD-MM-YYYY');
        mes_actual.add(1, 'month');

        var row = document.createElement('tr');
        row.innerHTML = `
            <td>${fechas[i]}</td>
            <td>${capitalInicial.toFixed(2)}</td>
            <td>${interesGenerado.toFixed(2)}</td>
            <td>${capitalFinal.toFixed(2)}</td>
        `;

        llenarTabla.appendChild(row);


    } 
    
    
    //var respuesta = document.getElementById("respuesta_61");
    //Pruebas unitarias
    //respuesta.textContent = monto;
    //respuesta.textContent = tiempo;
    //respuesta.textContent = tasa_interes;
    
    
    //alert(valor_presente);
}