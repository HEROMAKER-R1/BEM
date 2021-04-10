require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const ObjectId = require("mongodb").ObjectID;
mongoose.set("useFindAndModify", false);

const userSchema = mongoose.Schema({
  name: { type: String, unique: true },
  hobi: { type: String },
  alamat: { type: String },
  nomor_telp: { type: Number }
});
const userModel = mongoose.model("user", userSchema);

const server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
mongoose.connect(`mongodb+srv://HEROMAKER:T1m3fighter@test.ewswe.mongodb.net/bem?retryWrites=true&w=majority`,({
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
);
const PORT = 3001;
server.listen(PORT,()=>{
console.log(`Server Running on port ${PORT}`);
});

// server.post("/register", async (req, res) => {
//     let statusCode = 500;
//     try {
//       const payload = req.body;
//       const data = {
//         nama: payload.nama,
//         hobi: payload.hobi,
//         alamat: payload.alamat,
//         nomor_telp: payload.nomor_telp,
//       };
//       const result = await userModel.create(data);
      
//         statusCode = 201;
//         res
//           .status(statusCode)
//           .json({
//             message: "success",
//             code: statusCode,
//             success: true,
//             result: result,
//           });
//       }
//     }catch (error) {
//       console.log(error);
//       statusCode = 400;
//       res
//         .status(statusCode)
//         .json({ message: error.message, code: statusCode, success: false });
//     }
//   });

server.post("/create", async (req, res) => {
    const payload = req.body;

    console.log(payload)
    
     const newUser = new userModel(payload);
     const result = newUser.save();
  
    res.send({
      status: 200,
      data: result,
    });
  });

  server.get("/get", async (req, res) => {
    const payload = req.body;
    const user = await userModel.find({})
  
    res.send({
      status: 200,
      data: user,
    });
  });

  server.put(
    "/update/:id",
    async (req, res) => {
      const id = req.params.id;
      const payload = req.body;
      userModel.findByIdAndUpdate(
        id,
        { nama: payload.nama, hobi: payload.hobi, alamat: payload.alamat, nomor_telp: payload.nomor_telp },
        function (err, data) {
          if (err) {
            console.log(err);
          } else {
            res.send({
              status: 200,
              data: userModel,
            });
          }
        }
      );
    }
  );

  server.delete("/delete", async (req, res) => {
    const id = req.body.id;
    
    userModel.findByIdAndDelete(id, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        res.send({
          status: 200,
          data: userModel,
        });
      }
    });
  });