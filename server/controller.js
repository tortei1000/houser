
module.exports = {
  getAll : (req, res) => {
    console.log(`3 - getAll fired`)
    const db = req.app.get('db')

    db.get_all().then((house)=>{
      res.status(200).send(house)
    })
  }
}