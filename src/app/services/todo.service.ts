import { Injectable } from "@angular/core";


@Injectable()
export class TodoService {
  today= new Date();
  todos;
  todoSlice;

  lastUpdate;
  lastUpdate2;




  constructor(){
    /*------- raccourci de promesse-----
    this.lastUpdate= Promise.resolve(new Date());

    this.lastUpdate2= Promise.reject("Msg d'erreur");*/

    this.todos = new Promise ((resolve,reject) => {
        const data = [
          {
          todoName:"Projet 1",
          todoStatus: true,
          image:"http://placehold.it/150",
          isModif: false
          },
          {
          todoName:"Projet 2",
          todoStatus: false,
          image:"http://placehold.it/150",
          isModif: false

          },
          {
          todoName:"Projet 1",
          todoStatus: true,
          image:"http://placehold.it/150",
          isModif: false

          },
          {
          todoName:"Projet 4",
          todoStatus: false,
          image:"http://placehold.it/150",
          isModif: false

          }
        ];
        if(data.length){
          this.todoSlice = data
          setTimeout(() => {
            resolve(data);
           },2000);
        }else{
          reject("Pas de données disponible sur le serveur")
        }
    });

    /*setTimeout(() =>{
      this.todos = [
        {
        todoName:"Projet 1",
        todoStatus: true,
        image:"http://placehold.it/150",
        isModif: false
        },
        {
        todoName:"Projet 2",
        todoStatus: false,
        image:"http://placehold.it/150",
        isModif: false

        },
        {
        todoName:"Projet 1",
        todoStatus: true,
        image:"http://placehold.it/150",
        isModif: false

        },
        {
        todoName:"Projet 4",
        todoStatus: false,
        image:"http://placehold.it/150",
        isModif: false

        }
      ];
    },3000);*/
  }

   onChangeStatus(i: number){
     this.todoSlice[i].todoStatus = !this.todoSlice[i].todoStatus ;
   }

   onChangeIsModif(i: number){
     this.todoSlice[i].isModif = !this.todoSlice[i].isModif ;
   }

   getTodo(index : number){
     if(this.todoSlice[index]){
       return this.todoSlice[index];
     }
     return false;
   }

}
