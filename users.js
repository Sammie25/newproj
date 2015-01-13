var users = [
    {
        id : 1,
        name:"Sameetha",
        username: "visitsam25@gmail.com",
        password: "abc"
    
    },
    
    {
        id : 2,
        name:"Sanjana",
        username: "visitsanj18@gmail.com",
        password: "xyz"  
    
    }           


];

exports.getUsers = function()
{
    return users;
}

exports.getUser = function(id)

{   
    
    for(var i=0; i < users.length; i++)
    {if(users[i].id == id)
    
    return users[i];}
}