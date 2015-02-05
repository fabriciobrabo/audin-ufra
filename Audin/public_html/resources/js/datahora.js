/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//function dataAtualFormatada() {
//    var data = new Date();
//    var dia = data.getDate();
//    if (dia.toString().length === 1)
//        dia = "0" + dia;
//    var mes = data.getMonth() + 1;
//    if (mes.toString().length === 1)
//        mes = "0" + mes;
//    var ano = data.getFullYear();
//    return data.toDateString();
//};

function dataAtualFormatada() {
    var data = new Date();
    var temp = data.toDateString();
    split = temp.split(' ');
    var dia = split[0];
    var mes = split[1];
    if (dia === "Sun") {
        dia = "Domingo";
    }
    if (dia === "Mon") {
        dia = "Segunda-Feira";
    }
    if (dia === "Tue") {
        dia = "Terça-Feira";
    }
    if (dia === "Wed") {
        dia = "Quarta-Feira";
    }
    if (dia === "Thu") {
        dia = "Quinta-Feira";
    }
    if (dia === "Fri") {
        dia = "Sexta-Feira";
    }
    if (dia === "Sat") {
        dia = "Sábado";
    }
    if (mes === "Jan") {
        mes = "Janeiro";
    }
    if (mes === "Feb") {
        mes = "Fevereiro";
    }
    if (mes === "Mar") {
        mes = "Março";
    }
    if (mes === "Apr") {
        mes = "Abril";
    }
    if (mes === "May") {
        mes = "Maio";
    }
    if (mes === "June") {
        mes = "Junho";
    }
    if (mes === "July") {
        mes = "Julho";
    }
    if (mes === "Aug") {
        mes = "Agosto";
    }
    if (mes === "Sept") {
        mes = "Setembro";
    }
    if (mes === "Oct") {
        mes = "Outubro";
    }
    if (mes === "Nov") {
        mes = "Novembro";
    }
    if (mes === "Dec") {
        mes = "Dezembro";
    }
    return dia + ", " + data.getDay() + " de " + mes + " de " + data.getFullYear();
}
document.getElementById("data").innerHTML = dataAtualFormatada();

