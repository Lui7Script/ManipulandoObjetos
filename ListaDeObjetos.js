const cliente = { 
    nome : "Luiz Gustavo",
    idade : 24, 
    cpf : "564876321-50",
    email : "luizgustavocruz933@gmail.com",              
    Fones : ["31 939056874" , "31 40029822"],
    
    dependentes : [{
    nome: "Pedro",
    parentesco : "Amiga",
    DataNasc: "31/12/1944 "
    }]
}
 //NESTA ETAPA ACIMA FOI TRANSFORMADO O VALOR DEPENDENTES DO OBJETO CLIENTE 
 //EM UM VALOR DO OBJETO QUE CONTÉM UMA LISTA DE DEPENDENTES.




cliente.dependentes.push({
    nome: "Otavio Manoel",
    parentesco: "Sobrinho",
    DataNasc:"01/01/2001"
}) 


//NESTA ETAPA, FOI ADICIONADO UM DEPENDENTE A LISTA DE DEPENDENTES, USANDO UM MÉTODO DE ARRAY,
// POIS ESTE VALOR DO OBJETO CLIENTE FOI TRANSFORMADO EM ARRAY, 
//ASSIM PODEMOS USAR MÉTODOS DE ARRAY DENTRO DESTE OBJETO.



const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.DataNasc==="01/01/2001")



//NESTA ETAPA FOI FILTRADO NA LISTA O DEPENDENTE MAIS NOVO, USANDO UM MÉTODO DE ARRAY.
//COMO ANTES EXPLICADO, ESTE VALOR DEPENDENTES FOI TRANSFORMADO EM ARRAY.

console.log(filhaMaisNova[0].nome)

//ACIMA EXIBIMOS O NOME DO DEPENDENTE MAIS NOVO

console.log(cliente)