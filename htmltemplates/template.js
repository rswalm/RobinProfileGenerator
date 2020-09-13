    const generateHTML = function (myteamstring) {
        return `<!doctype html>
        <html lang="en">
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <meta name="description" content="">
            <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
            <meta name="generator" content="Jekyll v4.1.1">
            <title>Pricing example · Bootstrap</title>
        
        
            <!-- Bootstrap core CSS -->
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

        
            <style>
            html {
                font-size: 14px;
              }
              @media (min-width: 768px) {
                html {
                  font-size: 16px;
                }
              }
              
              .container {
                max-width: 960px;
              }
              
              .pricing-header {
                max-width: 700px;
              }
              
              .card-deck .card {
                min-width: 220px;
              }
              .bd-placeholder-img {
                font-size: 1.125rem;
                text-anchor: middle;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
              }
        
              @media (min-width: 768px) {
                .bd-placeholder-img-lg {
                  font-size: 3.5rem;
                }
              }
            </style>
            <!-- Custom styles for this template -->
            <link href="pricing.css" rel="stylesheet">
          </head>
          <body>
          <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
          <h5 class="my-0 mr-md-auto font-weight-normal">Profile App</h5>
          <nav class="my-2 my-md-0 mr-md-3">
            <a class="p-2 text-dark" href="#">Contacts</a>
            <a class="p-2 text-dark" href="#">Support</a>
          </nav>
          <a class="btn btn-outline-primary" href="#">Sign up</a>
        </div>
        
        <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 class="display-4">My Team</h1>
        </div>
        
        <div class="container">
          <div class="card-deck mb-3 text-center">
          ${myteamstring} 
      
          </div>
        
          <footer class="pt-4 my-md-5 pt-md-5 border-top">
            <div class="row">
              <div class="col-12 col-md">
                <img class="mb-2" src="/docs/4.5/assets/brand/bootstrap-solid.svg" alt="" width="24" height="24">
                <small class="d-block mb-3 text-muted">&copy; 2017-2020</small>
              </div>
              <div class="col-6 col-md">
                <h5>Features</h5>
                <ul class="list-unstyled text-small">
                  <li><a class="text-muted" href="#">Cool stuff</a></li>

                </ul>
              </div>
              <div class="col-6 col-md">
                <h5>Resources</h5>
                <ul class="list-unstyled text-small">
                  <li><a class="text-muted" href="#">Resource</a></li>

                </ul>
              </div>
              <div class="col-6 col-md">
                <h5>About</h5>
                <ul class="list-unstyled text-small">
                  <li><a class="text-muted" href="#">Team</a></li>

                </ul>
              </div>
            </div>
          </footer>
        </div>
        </body>
        </html>
        `
    }

    const generateDetails = function (arr) {
        let roleDetails;

        if (arr.title === "Manager") {
            roleDetails = `Office Number: ${arr.officeNumber}`
        } else if (arr.title === "Engineer") {
            roleDetails = `Github Username: ${arr.github}`
        } else if (arr.title === "Intern") {
            roleDetails = `School: ${arr.school}`
        }


return `    <div class="card mb-4 shadow-sm">
<div class="card-header">
  <h4 class="my-0 font-weight-normal">${arr.name}</h4>
</div>
<div class="card-body">
  <h1 class="card-title pricing-card-title">${arr.title} <small class="text-muted"></small></h1>
  <ul class="list-unstyled mt-3 mb-4">
  <li>ID: ${arr.id}</li>
  <li>Email: ${arr.email}</li>
  <li>${roleDetails} </li>
  </ul>
  <a href="mailto:${arr.email}" class="btn btn-lg btn-block btn-outline-primary">Send Email</a>
</div>
</div>`
    }

    exports.generateHTML = generateHTML
    exports.generateDetails = generateDetails;