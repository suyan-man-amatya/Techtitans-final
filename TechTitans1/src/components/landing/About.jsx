import React from "react";
import Doc from "../../assets/doctors2.png";
import Logo from "../../assets/web-logo2.png";
import Button from "../../layouts/Button";
import Car from "../../assets/ambulance3.png";

function About() {
  return (
    <>
      <div className="bg-aboutback bg-cover mx-8 rounded-3xl">
        <div className="flex flex-col justify-center h-2/5 rounded-3xl shadow-sm  items-center text-center backdrop-blur-sm ">
          <div className="text-area flex flex-col w-3/4 justify-center items-center pl-20 ">
            <div className="slog rounded-full flex w-1/5 justify-center px-3 py-2 ">
              <img src={Logo} alt="" />
            </div>
            <div className="title text-5xl py-3 w-2/4">
              <h1 className="font-semibold">We're changing the whole game.</h1>
            </div>
            <div className="description text-slate-400"></div>
            <div className="book">
              <Button title="Connect with our Professionals ↗" />
            </div>
          </div>
          <div className="flex justify-center image-area  w-3/4 ">
            <img style={{ height: "50vh" }} src={Doc} alt="" />
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <div className="container mx-8 my-16 text-center flex flex-row justify-around items-center bg-green-400 w-2/4">
          <div className="image w-2/4">
            <img className=" bg-red-500" src={Car} alt="" />
          </div>
          <div className="text-area w-2/4 bg-blue-500 py-7">
            <div className="title text-3xl font-semibold">Lives Saved</div>
            <div className="description">Our services has saved many lives</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
