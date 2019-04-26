
module.exports = {
  getAll : (req, res) => {
    console.log(`3 - getAll fired`)
    const db = req.app.get('db')

    db.get_all().then((house)=>{
      res.status(200).send(house)
    })
  },

  createHouse : (req, res) => {
    const db = req.app.get('db')
    const { name, address, city, state, zip} = req.body
    

    db.create_house([name, address, city, state, zip]).then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: `something went wrong in creation` })
        console.log(err)
      })
  },
}