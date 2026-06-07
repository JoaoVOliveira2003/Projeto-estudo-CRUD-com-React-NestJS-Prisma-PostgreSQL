import { fakerPT_BR as faker } from '@faker-js/faker';
import {prisma} from '../src/lib/prisma'

async function main() {
   for(let i =0; i<100;i++){
      await prisma.pessoa.create({
         data:{
            nome:faker.person.fullName(),
            idade: faker.number.int({ min: 1, max: 80 }),
            endereco:{
               create:{
                  nomeRua:faker.location.streetAddress(),
               }
            },

            cachorros:{
               create:Array.from(
                  {length:faker.number.int({min:0,max:5})},
                  ()=>({
                    nome:faker.person.firstName(), 
                  })
               )
            }
         }
      })
   }
}

main();