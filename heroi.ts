class Heroi{
 public nome: string = ''
 forca:number = 100
 nivel: number
  constructor(nome:string,forca:number){
   this.nome = nome
   this.forca = forca
   this.nivel = 1

  }


 olharDestemido(){
  console.log("Olhar Destemido")

 }

}

let heroi1 = new Heroi("toni",100)
console.log(heroi1)


let heroi2 = new Heroi("tonho",500)
heroi2.nome = "tonho"
console.log(heroi2)
