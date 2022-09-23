var express = require("express");
    swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');
var mysql = require("mysql2");
var app = express();
var bp = require("body-parser");
const cors = require("cors");
app.use(cors());
app.options("*", cors());
app.use(bp.json());
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "practica2",
});

//-------------------------------PARTES-------------------------------------
//GET PARTES
app.get("/partes", function (req, resp) {
  connection.query("select * from partes", function (err, rows) {
    if (err) {
      console.log("Error en /partes " + err);
      resp.status(500);
      resp.send({ message: "Error al obtener partes" });
    } else {
      console.log("/partes");
      console.log("Mostrando todos los partes...");
      resp.status(200);
      resp.send(rows);
    }
  });
});
//GET FILTER PARTES
app.get("/partes", function (req, res) {
    var filter = req.query.filter;
    connection.query("select * from partes where ?", filter,function (err, rows) {
        if (err) {
          console.log("Error en /partes " + err);
          res.status(500);
          res.send({ message: "Error al obtener partes" });
        } else {
          console.log("/partes");
          res.status(200);
          res.send(rows);
        }
      });
    });
//POST PARTES
app.post("/partes", function (req, res) {
  var itemId = req.body.id;
  var data = req.body;
  connection.query(
    "INSERT INTO partes VALUES (?, ?, ?, ?, ?, ?);",
    [
      itemId,
      data.fecha,
      data.hora,
      data.descripcion,
      data.incidencia_resuelta,
      data.tiempo_dedicado_en_horas,
    ],
    function (err, rows) {
      if (err) {
        console.log("Error en /partes " + err);
        res.status(500);
        res.send({ message: "Error al crear partes" });
      } else {
        console.log("/partes");
        console.log("Parte " + itemId + " añadido.");
        res.status(200);
        res.send(rows);
      }
    }
  );
});
//PUT PARTES
app.put("/partes/:id", function (req, res) {
  var itemId = req.body.id;
  var data = req.body;
  connection.query(
    "UPDATE partes SET fecha = ?, hora = ?, descripcion = ?, incidencia_resuelta = ?, tiempo_dedicado_en_horas = ? where id = ?",
    [
      data.fecha,
      data.hora,
      data.descripcion,
      data.incidencia_resuelta,
      data.tiempo_dedicado_en_horas,
      itemId,
    ],
    function (err, rows) {
      if (err) {
        console.log("Error en /partes " + err);
        res.status(500);
        res.send({ message: "Error al actualizar parte" });
      } else {
        console.log("/partes");
        console.log("Parte " + itemId + " actualizado.");
        res.status(200);
        res.send(rows);
      }
    }
  );
});
//DELETE PARTES
app.delete("/partes/:id", function (req, res) {
  var itemId = req.params.id;

  connection.query(
    "DELETE FROM partes WHERE id = ?",
    itemId,
    function (err, rows) {
      if (err) {
        console.log("Error en /partes " + err);
        res.status(500);
        res.send({ message: "Error al eliminar partes" });
      } else {
        console.log("/partes");
        console.log("Parte" + itemId + "eliminado con éxito.");
        res.status(200);
        res.send(rows);
      }
    }
  );

});
//-----------------------------------CLIENTES----------------------------------
//GET ALL CLIENTES
app.get("/clientes", function (req, res) {
  connection.query("select * from clientes", function (err, rows) {
    if (err) {
      console.log("Error en /clientes " + err);
      res.status(500);
      res.send({ message: "Error al obtener clientes" });
    } else {
      console.log("/clientes");
      res.status(200);
      res.send(rows);
    }
  });
});
//GET FILTER CLIENTES
app.get("/clientes", function (req, res) {
    var filter = req.query.filter;
    connection.query("select * from clientes where ?", filter,function (err, rows) {
        if (err) {
          console.log("Error en /clientes " + err);
          res.status(500);
          res.send({ message: "Error al obtener clientes" });
        } else {
          console.log("/clientes");
          res.status(200);
          res.send(rows);
        }
      });
    });
//POST CLIENTES
app.post("/clientes", function (req, res) {
  var itemId = req.body.id;
  var data = req.body;
  connection.query(
    "INSERT INTO clientes VALUES (?, ?, ?, ?, ?, ?, ?);",
    [
      itemId,
      data.nombre,
      data.dni,
      data.direccion,
      data.poblacion,
      data.telefono,
      data.email,
    ],
    function (err, rows) {
      if (err) {
        console.log("Error en /clientes " + err);
        res.status(500);
        res.send({ message: "Error al crear cliente" });
      } else {
        console.log("/clientes");
        console.log("Cliente " + itemId + " añadido.");
        res.status(200);
        res.send(rows);
      }
    }
  );
});

//PUT CLIENTES
app.put("/clientes/:id", function (req, res) {
  var itemId = req.body.id;
  var data = req.body;
  connection.query(
    "UPDATE clientes SET nombre = ?, dni= ?, direccion = ?, poblacion = ?, telefono = ?, email = ?  where id = ?",
    [
      data.nombre,
      data.dni,
      data.direccion,
      data.poblacion,
      data.telefono,
      data.email,
      itemId,
    ],
    function (err, rows) {
      if (err) {
        console.log("Error en /clientes " + err);
        res.status(500);
        res.send({ message: "Error al actualizar cliente" });
      } else {
        console.log("/clientes");
        console.log("Cliente " + itemId + " actualizado.");
        res.status(200);
        res.send(rows);
      }
    }
  );
});
//DELETE CLIENTES
app.delete("/clientes/:id", function (req, res) {
  var itemId = req.params.id;
  connection.query(
    "DELETE FROM clientes WHERE id = ?",
    itemId,
    function (err, rows) {
      if (err) {
        console.log("Error en /clientes " + err);
        res.status(500);
        res.send({ message: "Error al eliminar cliente" });
      } else {
        console.log("/clientes");
        console.log("Cliente " + itemId + " eliminado con éxito.");
        res.status(200);
        res.send(rows);
      }
    }
  );
});
//-------------------------------VALIDACIONES------------------------------



app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

var server = app.listen(8080, function () {
  console.log("Servidor iniciado en puerto 8080…");
});
