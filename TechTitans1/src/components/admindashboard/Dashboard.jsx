import * as React from "react";
import Logo from "../../assets/web-logo2.png";
import Hospital from "../../assets/hospital.png";
import calender from "../../assets/calender.png";

import Doc from "../../assets/doctorhd.png";
import Button from "../../layouts/Button";

import { FaRegCalendarDays } from "react-icons/fa6";
import { LuAlarmClock } from "react-icons/lu";
import Chart from "./Chart";
import Sidebar from "./Sidebar";

function Admindashboard() {
  return (
    <section className="flex">
      {/* Sidebar */}
      <aside className="sidebar w-64 h-screen fixed top-0  bg-dark left-0 flex flex-col">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex ml-24 mt-5 p-4">
        <div className="flex-1 h-full flex-col">
          <div className="flex items-center mb-8">
            <div className="profilephoto bg-profile rounded-full w-24 h-24 flex items-center justify-center">
              <div className="photo">
                <img
                  className="rounded-full w-50 h-50 object-cover"
                  src={Doc}
                  alt="Profile"
                />
              </div>
            </div>
            <div className="text flex flex-col ml-8">
              <div className="text1 text-2xl font-semibold">
                <h1>Welcome Back Admin!!!</h1>
              </div>
              <div className="text2 text-center text-xs font-bold mt-2">
                <p>Check your every situation and activities</p>
              </div>
              <div className="btn mt-3">
                <Button title="Check it now" />
              </div>
            </div>
          </div>

          <div className="containerthird flex-1 bg-white">
            <div className="cardnoone flex">
              <div className="appoinmentcard p-5 w-[60%] flex flex-col">
                <div className="app mb-4">
                  <div className="title text-xl font-medium">
                    <h1>Check the Appointments</h1>
                  </div>
                  <div className="appoinsec flex mt-4">
                    <div className="hospitalphoto text-center w-[30%]">
                      <div className="photo">
                        <img
                          src={Hospital}
                          alt="hospitalphoto"
                          className="w-48 h-28 object-cover"
                        />
                      </div>
                      <div className="hospitalname">ABCD</div>
                      <div className="hospitaladdress">
                        Sitapaila, Kathmandu
                      </div>
                    </div>
                    <div className="doctorphoto flex flex-col items-center w-full ml-4">
                      <div className="cards flex items-center">
                        <div className="photo">
                          <img
                            src={Doc}
                            alt="doctorsphoto"
                            className="h-14 w-14"
                          />
                        </div>
                        <div className="doctorname ml-4">
                          <div className="name">Dr. Abhinash Khatri</div>
                          <div className="position">Dermatologist</div>
                        </div>
                        <div className="videocall ml-4">
                          <Button title="Video Call" />
                        </div>
                      </div>
                      <div className="calendar flex items-center justify-evenly bg-calendar w-[70%] h-12 rounded-lg mt-5">
                        <div className="calendarparts flex items-center justify-evenly w-1/2">
                          <div className="calendarlogo">
                            <FaRegCalendarDays />
                          </div>
                          <div className="calendardate">11, 2021</div>
                        </div>
                        <div className="timeparts flex items-center justify-evenly w-1/2">
                          <div className="tilelogo">
                            <LuAlarmClock />
                          </div>
                          <div className="time">12:00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="cardsection mt-5">
                  <div className="chart1 mb-5">
                    <div className="title font-semibold text-xl">
                      Patient Activities
                    </div>
                    <div className="todaydatehere">
                      <p>Today, 31 Aug 2024</p>
                    </div>
                  </div>
                  <div className="chart2 mt-10">
                    <Chart />
                  </div>
                </div>
              </div>
              <div className="listofappointments w-[40%] p-5">
                <div className="apponelist">
                  <div className="heading text-xl font-medium mb-4">
                    <h1>List Of Appointment</h1>
                  </div>
                  <div className="calendarphoto">
                    <div className="photo">
                      <img
                        src={calender}
                        alt="calender"
                        className="h-4/5 w-4/5"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Admindashboard;
