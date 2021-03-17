const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write('Content \n')
      res.write('More content \n')
      res.write('Hello World')
      res.write('<table>')
      res.write('<tr>')
      res.write('<th>Location</th>')
      res.write('<th>Number of Hours</th>')
      res.write('<th>Amount of Money</th>')
      res.write('</tr>')
      res.write('<tr>')
      res.write('<td>Leh Ladakh</td>')
      res.write('<td>120 hours</td>')
      res.write('<td>400$</td>')
      res.write('</tr>')
      res.write('<tr><td>Goa</td><td>96 hours</td><td>300$</td></tr><tr><td>Munnar</td><td>120 hours</td><td>350$</td></tr><tr><td>Bangalore</td><td>96 hours</td><td>300$</td></tr></table>')
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})