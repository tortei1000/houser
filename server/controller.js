
module.exports = {
  getAll : (req, res) => {
    console.log(`3 - getAll fired`)
    const db = req.app.get('db')

    db.get_all().then((house)=>{
      res.status(200).send(house)
    }).catch(err => console.log("error", err))
  },

  createHouse : (req, res) => {
    const db = req.app.get('db')
    const { name, address, city, state, zip, img, mortage, rent} = req.body
    

    db.create_house([name, address, city, state, zip, img, mortage, rent]).then(() => {
    res.sendStatus(200)})
    console.log(`5- created a house on db`)
    
  },

  delete: (req, res) => {
    const db = req.app.get('db')
    const { id } = req.params

    db.delete_house(id).then(() => res.sendStatus(200))
    console.log(`6- deleted a house on db`)
      
  },
}