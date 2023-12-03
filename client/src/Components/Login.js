import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from "@mui/material/Alert";
import { motion } from "framer-motion";
function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [msg, setmsg] = useState("");
  const [alert, setalert] = useState("");
  const navigate = useNavigate();

  const Run = async () => {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email !== "" && email.match(validRegex)) {
      try {
        const response = await axios.get("http://localhost:4000/api/login", {
          params: { email, password },
        });

        if (!response.data) {
          setalert("User not found");
        } else {
          if (response.data === "invalid") {
            setalert("Password Invalid");
          } else {
            setmsg("Login Successfull");
            navigate("/done");
          }
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      setalert("Invalid email");
    }
    setTimeout(() => {
      setmsg("");
      setalert("");
    }, 3000);
  };
  return (
    <>
      <div className="w-screen h-screen overflow-hidden bg-slate-300">
        {msg && (
          <motion.div
            initial={{ x: "20vw" }}
            animate={{
              x: 0,
              transition: {
                duration: 0.2,
                type: "spring",
              },
            }}
            className="bg-red-300"
          >
            <Alert
              severity="success"
              variant="standard"
              className="w-[20rem] absolute top-3 right-5 font-bold uppercase bg-red-800"
            >
              {msg}
            </Alert>
          </motion.div>
        )}
        {alert && (
          <motion.div
            initial={{ x: "20vw" }}
            animate={{
              x: 0,
              transition: {
                duration: 0.2,
                type: "spring",
              },
            }}
            className="bg-red-300"
          >
            <Alert
              severity="warning"
              variant="standard"
              className="w-[20rem] absolute font-bold text-xl top-3 right-5 bg-red-800"
            >
              {alert}
            </Alert>
          </motion.div>
        )}
        <motion.div
          className="w-fit h-80 mx-[38%] my-52 line border-2 p-4 bg-white rounded-lg"
          initial={{ y: "-70vw" }}
          animate={{
            y: 0,
            transition: {
              type: "spring",
              duration: 1,
            },
          }}
        >
          <span className="uppercase font-serif font-bold  ml-28  tracking-widest text-2xl">
            Login
          </span>

          <div className="my-4">
            <TextField
              variant="outlined"
              label="Email"
              className="w-80"
              onChange={(e) => {
                setemail(e.target.value);
              }}
              defaultValue={email}
            />
          </div>
          <div>
            <TextField
              type="password"
              variant="outlined"
              label="Password"
              className="w-80"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              defaultValue={password}
            />
          </div>

          <Stack className="my-4">
            <Button variant="contained" className="w-80" onClick={() => Run()}>
              SUBMIT
            </Button>
          </Stack>
          <p className="text-end">
            Don't have account?
            <button className="border-b-2 border-blue-500 ml-2">
              {" "}
              <Link to="/signup">Sign up</Link>
            </button>
          </p>
        </motion.div>
      </div>
    </>
  );
}

export default Login;
