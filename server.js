const http = require('http')

const server = http.createServer( (req, res) =>{
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>pure more insight</title>
        <link href="style.css" rel="stylesheet">
        <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.6/build/pure-min.css" integrity="sha384-Uu6IeWbM+gzNVXJcM9XV3SohHtmWE+3VGi496jvgX1jyvDTXfdK+rfZc8C1Aehk5" crossorigin="anonymous">
    </head>
    <body>
        
    
        <h1> hi there,my name is Felipe i have 26 year, and am developer of sotware</h1>
        <p><a href="updating.html">Pure css</a></p>
        <table class="pure-table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                <tr class="pure-table-odd">
                    <td>1</td>
                    <td>Honda</td>
                    <td>Accord</td>
                    <td>2009</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Toyota</td>
                    <td>Camry</td>
                    <td>2012</td>
                </tr>
                <tr class="pure-table-odd">
                    <td>3</td>
                    <td>Hyundai</td>
                    <td>Elantra</td>
                    <td>2010</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Ford</td>
                    <td>Focus</td>
                    <td>2008</td>
                </tr>
                <tr class="pure-table-odd">
                    <td>5</td>
                    <td>Nissan</td>
                    <td>Sentra</td>
                    <td>2011</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>BMW</td>
                    <td>M3</td>
                    <td>2009</td>
                </tr>
                <tr class="pure-table-odd">
                    <td>7</td>
                    <td>Honda</td>
                    <td>Civic</td>
                    <td>2010</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Kia</td>
                    <td>Soul</td>
                    <td>2010</td>
                </tr>
            </tbody>
        </table>
    
    </body>
    </html>`)
})

//the door are unique ways that login in that serviless!!
server.listen(3000)