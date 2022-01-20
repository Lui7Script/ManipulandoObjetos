const colecionador = {
    nome: "João do Gibi",
    idade:41,
    tipocolecao: ["quadrinhos"],
    contato: "joao@email.com",
    
    adicionarTipo:function(propriedade,tipo){
        this[propriedade].push(tipo)
      
        for(i = 0; i < 4; i++) {
            colecionador.adicionarTipo("tipocolecao","HQ"+i)
          }
    
}
      

}      
        
colecionador.adicionarTipo ="Anime" 
colecionador.adicionarTipo = "Terror"

console.log(colecionador.adicionarTipo)

console.log(colecionador)

   //ABAIXO TEMOS UMA FORMA DE ACESSAR O VALOR DE UM OBJETO, NESTA  EA  NOTAÇÃO DE PONTO
   //console.log(colecionador.nome)
    
   //ABAIXO TEMOS OUTRA FORMA DE ACESSAR O VALOR DE UM OBJETO, NESTA USAMOS O COLCHETES
   //console.log(colecionador["nome"])