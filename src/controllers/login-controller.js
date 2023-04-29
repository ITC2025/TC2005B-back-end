const db =  require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const secret = "ITC_Besto_Team";
const max_age = 60 * 60 * 24 * 14; // in seconds

const handle_errors = (err) => {
  let error = {
    email: "",
    password: ""
  };

  if (err.message === "Incorrect email") {
    error.email = "That email is not registered";
  };

  if (err.message === "Incorrect password") {
    error.password = "That password is incorrect";
  };

  return error;
};

const generate_token = (id) => {
  return jwt.sign({ id }, secret, {
    expiresIn: max_age
  });
};

const user_login = async (email, password)  => {
  const user = await db.Empleados.findOne({where: {correoElectronico: email}});
  
  if (user) {
    const auth = await bcrypt.compare(password, user.password);

    if (auth) {

      return user;

    } else {

      throw Error("Incorrect password");
    };

  }

  throw Error("Incorrect email");

};

module.exports.login_post = async (req, res) => {

  const { correoElectronico, password } = req.body;

  try {
    const user = await user_login(correoElectronico, password);
    
    const token = generate_token(user.ID_empleado);
    res.cookie("jwt", token, {
      secure: true,
      httpOnly: true,
      maxAge: 1000 * max_age
    });

    res.status(200).json({user: user.ID_empleado});

  } catch (err) {
      const errors = handle_errors(err);
      res.status(400).json({errors});
  }
}

module.exports.logout_post = async (req, res) => {
  try {
    res.clearCookie("jwt");
    res.status(200).json({});
  } catch (err) {
    res.status(400).json({err});
  }
}