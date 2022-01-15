// I have practice about backend and front end too.
const recept = (req, res) =>{
    res.send('Felipe Programer 18')
 }

const caught = (req, res) =>{
    res.send('Felipe smarer ')
 }

const calc = (req, res) => {
    console.log(req.query)

    // remember i have always use destrucment assisment to improve my code always!!!
     if(req.query.num1 && req.query.num2){
      // now uses about destrucment assiment
        const {num1, num2} = req.query
        const soma = parseFloat(num1) + parseFloat(num2)
        res.send('A soma é :' + soma)
      } else{
    res.send('calculator')
      }
}

module.exports = {
    recept,
    caught,
    calc

} 