const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }

   const objPersonagem2 = Object.create(objPersonagem)
    
   objPersonagem2.nome = "Gandalf, o Cinzento"
   objPersonagem2.classe =" God"
   
   objPersonagem2.nivel= "Sayajin"

   console.log(objPersonagem2)


 