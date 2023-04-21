import Model, { sequelize } from "../models";
const jwt = require("jsonwebtoken")
const { Empleados } = Model;

export const Login = (req, res) => {
  res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);

  const { correoElectronico, password } = req.body;

  Empleados.findAll({
    where: {
      correoElectronico
    }
  })
  .then((data) => {
    console.log(data)
    if(data.length == 0){
      //usuario no encontrado
      res.json({
        msg: "No existe"
      })
    } else {
      //usuario encontrado
      if(data[0].password == password){
        //Usuario y contra correcta
        const token = jwt.sign({
          id: data[0].ID_empleado,
          rol: data[0].ID_rol
        }, "ITC_Besto_Team")
        
        res.json({
          token
        })
        
      } else {
        //contraseña incorrecta
        res.json({
          msg: "Contra incorrecta"
        })
      }
    }
  })
  .catch((err) => {
    
    res.json({
      msg: err.message
    })
  })
}

export const validate = (req, res, next) => {
  res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);

  const hToken = req.headers['authorization'];
  
  if(hToken != undefined && hToken.startsWith('Bearer ')){

    const bToken = hToken.slice(7);
    
    try {
      const tValido = jwt.verify(bToken, "ITC_Besto_Team");
      next();
      
    } catch (error) {
      res.status(400).json({
        error: 'Token denegado'
      })
    }
    
  } else {
    res.status(400).json({
      error: 'Accesso denegado'
    })
  }
}


export const adminVal = (req, res) => {
  res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
  res.json({
    msg:"Soy admin"
  })
} 

export const isAdmin = (req, res, next) => {
  res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);

  const hToken = req.headers['authorization'];
  const bToken = hToken.slice(7);

  const parts = bToken.split('.');
  const base64Url = parts[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const decodedPayload = atob(base64);
  const payload = JSON.parse(decodedPayload);

  console.log(payload.role);

  if(payload.rol == 3){

    const bToken = hToken.slice(7);
    next();
    
  } else {
    res.status(400).json({
      error: 'Accesso denegado, rol incorrecto'
    })
  }

}