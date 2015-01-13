var express = require('express');//imports

var hbs = require('hbs');
var bodyParser = require('body-parser');

var usersController = require('./controllers/users'); //if inside  folder then ./folder name/filename

var app = express();//creates expess server 
var path = require('path');
app.set('views', path.join(__dirname,'views'));
app.set('view engine','html');
app.engine('html', hbs.__express);
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    
            extended:false
    
    
    }));





app.use(express.static('public'));

app.get('/',function(request,response){
        response.render('index',
                       {
                        title : "home",
                        users: usersController.getUsers
                       });
});

app.get('/users/:id',function(request,response){
     var user = usersController.getUser(request.params.id);    
       response.render('profile',
                       {
                        title : "User profile",
                        user: user
                       
       
        });
    
}) ;       
       
       

app.get('/login',function(request,response){
       
       
       response.render('login',
                      
                       {title: "Login"}
                      );
       
        });//route
app.get('/aboutclasspro',function(request,response){
       
       
      response.render('aboutus',
                      
                       {title: "aboutus"}
                      );
       
       
        });
app.get('/signup',function(request,response){
       
       
response.render('Signup',
                      
                       {title: "Signup"}
                      );
       
        });
app.post('/login',usersController.postLogin());


app.listen(3000);