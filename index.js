const db =require('./models')

//  *********************** DINO ********************************
// CREATE
const createDino = async ()=>{
    try{
        const newDino = await db.Dino.create ({
            name: 'Sally',
            type: 'Stegosaurus'
        })
    // console.log (newDino)
} catch(err){
    console.warn(err)
}
}
createDino ()

//READ 
// ---all dinos
async function readAllDino () {
    try{
        const allDinos = await db.Dino.findAll()
        console.log(allDinos)
    }catch (err) {
        console.warn(err)
    }
}
readAllDino()
// ---- specific dino
async function findIndividualDino (){
    try {
        const allDinos = await db.Dino.findAll({
            where:{
                name:"Sally"
            }
        }) 
    console.log(allDinos) 
    } catch (err){
        console.warn(err)
    }
}
findIndividualDino ()

// UPDATE
async function updateDino (){
    try{
        // returns a value of how many rows were altered y this update
        const numRowsChanged= await db.Dino.update(
            { name: "Terry"},
            {where:{
                type: "T-Rex"
            }
         })
        console.log (numRowsChanged)
    } catch (err){
        console.warn(err)
    }
}
updateDino ()


// DESTROY
async function destroyDino (){
   try{
    const numRowsDeleted = await db.Dino.destroy({
        where:{
            name: "Terry"
        }
    })
    console.log(numRowsDeleted)
   } catch(err){
    console.warn(err)
   }
}
destroyDino()

// ************************ CREATURE ***********************************
// CREATE
const createCreature = async ()=>{
    try{
        const newCreature = await db.Creature.create ({
            name: 'Frank',
            img_url: 'pic of Frank'
        })
    // console.log (newDino)
} catch(err){
    console.warn(err)
}
}
createCreature ()

//READ 
// ---all dinos
async function readAllCreature () {
    try{
        const allCreature = await db.Creature.findAll()
        console.log(allCreatures)
    }catch (err) {
        console.warn(err)
    }
}
readAllCreatures()
// ---- specific dino
async function findIndividualCreature (){
    try {
        const allCreature = await db.Creature.findAll({
            where:{
                name:"Frank"
            }
        }) 
    console.log(allCreature) 
    } catch (err){
        console.warn(err)
    }
}
findIndividualCreature ()

// UPDATE
async function updateCreatue (){
    try{
        // returns a value of how many rows were altered y this update
        const numRowsChanged= await db.Creature.update(
            { name: "Kyle"},
            {where:{
                img_url: "pic of Kyle"
            }
         })
        console.log (numRowsChanged)
    } catch (err){
        console.warn(err)
    }
}
updateDino ()


// DESTROY
async function destroyCreature (){
   try{
    const numRowsDeleted = await db.Creature.destroy({
        where:{
            name: "Kyle"
        }
    })
    console.log(numRowsDeleted)
   } catch(err){
    console.warn(err)
   }
}
destroyCreature()