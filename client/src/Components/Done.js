import React from "react";

import DoneSharp from "@mui/icons-material/DoneAllTwoTone";
import { Link } from "react-router-dom";
const Done = () => {
  return (
    <>
      <div>
        <div className="p-7">
          <p className="text-center font-serif text-2xl">
            <span className="mx-5">
              <DoneSharp sx={{ fontSize: 40, color: "green" }} />
            </span>
            Login Successfull
            <br />
            <button className="border-b-2 border-blue-500 ml-24 ">
              {" "}
              <Link to="/">Back</Link>
            </button>
          </p>
        </div>
      </div>
    </>
  );
};
export default Done;
