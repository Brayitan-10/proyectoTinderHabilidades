const { Sequelize } = require("sequelize");

// VARIABLES DE ENTORNO
const USER_DB = "postgres";
const PASS_DB = "12345";
const HOST_DB = "localhost";
const PORT_DB = "5432";
const NAME_DB = "tinderHabilidades";

// INICIO UNA INSTANCIA DE SEQUELIZE Y CONECTO CON LA BASE DE DATOS
const sequelize = new Sequelize(`postgres://${USER_DB}:${PASS_DB}@${HOST_DB}:${PORT_DB}/${NAME_DB}`, {
  logging: false, // CAMBIAR A TRUE PARA VER LAS QUERY QUE SE EJECUTAN DESDE LA CONSOLA
  native: false, // LETS SEQUELIZE KNOW WE CAN USE PG-NATIVE FOR ~30% MORE SPEED
}
);


// EXPORTO SEQUELIZE
module.exports = { sequelize, ...sequelize.models };