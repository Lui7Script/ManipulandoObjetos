const cliente = { 
    nome : "Luiz Gustavo",
    idade : 24, 
    cpf : "564876321-50",
    email : "luizgustavocruz933@gmail.com",              
    Fones : ["31 939056874" , "31 40029822"],        //UTILIZAMOS FUNÇOES PARA DA COMPORTAMENTO AO OBJETO,\\
                                                     //NESTA ETAPA CRIAMOS UMA FUNÇÃO DEPOSITAR\\
                                                     //DENTRO DO OBJETO CLIENTE.\\

                                                      
    
    dependentes : [{
    nome: "Pedro",
    parentesco : "Amiga",
    DataNasc: "31/12/1944 "
    },

     {
      nome: 'Otavio Manoel',
      parentesco: 'Sobrinho',
      DataNasc: '01/01/2001'
    }
  ],
   
  saldo:100,
  depositar:function(valor){                           //DEPOSITAR SE TORNA UMA FUNÇÃO(MÉTODO) DO OBJETO CLINETE\\
  
    this.saldo += valor 

  } 

}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)
