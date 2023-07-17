const generateHTML = (imageUrl) => {
    const html = `
      <html>
        <body>
          <iframe src="${imageUrl}" width="100%" height="100%"></iframe>
        </body>
      </html>
    `;
    
    return html;
  };
  
  // Example usage
  const imageUrl = 'https://www.roadaffair.com/wp-content/uploads/2019/01/lake-bled-slovenia-shutterstock_768078295-675x450.jpg';
  const html = generateHTML(imageUrl);
  console.log(html);

  const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(html);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
  