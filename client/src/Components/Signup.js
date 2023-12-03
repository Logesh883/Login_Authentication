import React from "react";
import TextField from "@mui/material/TextField";
import { Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { Alert } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
function Signup() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirm, setconfirm] = useState("");
  const [msg, setmsg] = useState("");
  const [alert, setaleart] = useState("");
  const SignUp = async () => {
    if (confirm === password && password.length > 0) {
      var validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (email !== "" && email.match(validRegex)) {
        axios
          .post("http://localhost:4000/api/post", {
            email,
            password,
          })
          .then((res) => {
            setmsg(res.data.msg);
          })
          .catch((err) => {
            setmsg(JSON.stringify(err));
          });
        setemail("");
        setpassword("");
        setconfirm("");
      } else {
        setaleart("Enter valid Email");
      }
    } else {
      setaleart("Password  should match and can't be empty");
    }
    setTimeout(() => {
      setmsg("");
      setaleart("");
    }, 3000);
  };

  const Check = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/check", {
        params: { email },
      });

      if (!response.data) {
        SignUp();
      } else {
        setaleart("username exist");
        setemail("");
        setpassword("");
        setconfirm("");
      }
      setTimeout(() => {
        setmsg("");
        setaleart("");
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="w-screen h-screen overflow-hidden bg-slate-300 relative">
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
              className="w-[20rem] absolute top-3 right-5 bg-red-800"
            >
              {msg}
            </Alert>
          </motion.div>
        )}
        {alert && (
          <motion.div
            initial={{ x: "20vw", opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1,
                type: "spring",
                bounce: 0.2,
              },
            }}
            className="bg-red-300"
          >
            <Alert
              severity="warning"
              variant="standard"
              className="w-[20rem] absolute top-3 right-5 bg-red-800"
            >
              {alert}
            </Alert>
          </motion.div>
        )}
        <motion.div
          className="w-fit h-[26rem] mx-[38%] my-52 line border-2 p-4 bg-white rounded-lg"
          initial={{ y: "-100vh" }}
          animate={{ y: 0, transition: { type: "spring", bounce: 0.1 } }}
        >
          <span className="uppercase font-serif font-bold  ml-24  tracking-widest text-2xl">
            Signup
          </span>

          <div className="my-4">
            <TextField
              variant="outlined"
              placeholder="Email"
              label="Email"
              className="w-80"
              onChange={(e) => {
                setemail(e.target.value);
              }}
              value={email}
            />
          </div>
          <div>
            <TextField
              variant="outlined"
              label="Password"
              className="w-80"
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              value={password}
            />
          </div>
          <div className="mt-4">
            <TextField
              variant="outlined"
              label=" Confirm Password"
              placeholder="Confirm Password"
              onChange={(e) => {
                setconfirm(e.target.value);
              }}
              type="password"
              value={confirm}
              className="w-80"
            />
          </div>
          {confirm !== password && confirm !== "" ? (
            <p className="mb-2 text-red-600">Password must match</p>
          ) : (
            ""
          )}
          <Stack className="my-4">
            <Button
              variant="contained"
              className="w-80"
              onClick={() => {
                Check();
              }}
            >
              SUBMIT
            </Button>
          </Stack>
          <p className="text-end">
            Already have an account?
            <button className="border-b-2 border-blue-500 ml-2">
              {" "}
              <Link to="/">Login</Link>
            </button>
          </p>
        </motion.div>
      </div>
    </>
  );
}

export default Signup;
