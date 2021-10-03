const jwt = require('jsonwebtoken');
const users = require('../data/users')


let indexController = {
    index: function(req,res){
        res.render("index");
    },
    login: function(req,res){
        res.render('login')
    },
    logged: function(req, res){
        const name = req.body.name;
        const secretKey = req.body.secretKey;
        for(let i=0; i<users.length; i++){
            if(name == users[i].name){
                let user = users[i]
                req.session.userLogged= user
                const token = jwt.sign(user , secretKey
                );
                
              //  res.render("index" , {user})
            //  res.redirect("dashboard" + "?token="token)
            res.send(token)
            } else { 
                res.send("Usuario o contraseña incorrecta")
                }
        }
    },

    dashboard: function(req,res){
        let user = req.session.userLogged
        if(user){
        let { token } = req.query;
        jwt.verify(token , user.secretKey , (err, decoded) => {
            err ? res.status(401).send({
                error: "401 Unauthorized" , 
                message: err.message
            }) : res.send("Bienvenido " + user.name);
        })
        } else {
            res.redirect("login")
        }
        
    }

//        const user = users.find((u) => u.email == email && u.password == password);
//        if (user) {
         /* const token = jwt.sign(
          {
          exp: Math.floor(Date.now() / 1000) + 10,
          data: user,
          },
          secretKey
          );
    
          res.send(
          `<a href="/Dashboard?token=${token}"> <p> Ir al Dashboard </p> </a> Bienvenido, ${email}.
          <script>
          localStorage.setItem('token', JSON.stringify("${token}"))
          </script>
          `);
          */
         
//        }

}

module.exports = indexController;