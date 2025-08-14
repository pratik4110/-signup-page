import React from "react";

function Signup() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-gradient-to-br from-[#CFE8B0] via-[#A8D495] to-[#7DBE86]">

      <div className="flex rounded-[40px] overflow-hidden shadow-lg">

        <div className="flex flex-col justify-between w-[350px] px-10 py-12 bg-[#0B4038]">

          <div className="text-[36px] leading-[36px] font-bold text-[#9FE0C3]">
            better
            <br />
            market
          </div>

          <p className="text-[29px] leading-[31px] font-semibold text-[#EEF3B0] mt-8 max-w-[300px]">
            Say hello to global food and beverage producers and suppliers, all in one place
          </p>
        </div>


        <div className="bg-white w-[530px] px-12 py-14">
          <h2 className="text-[26px] font-semibold leading-[32px] mb-6 text-[#222]">
            Let's get started
            <br />
            <span className="text-[20px] font-semibold">with a few simple steps</span>
          </h2>

          <form className="flex flex-col">
            <label className="text-[13px] font-medium  text-[#1f2937] ">Email</label>
            <input
              type="email"
              className="border-b border-[#000000] outline-none  mb-6 w-80"
            />

            <label className="text-[13px] font-medium mb-1 text-[#1f2937]">FullName</label>
            <input
              type="text"
              className="border-b border-[#000000] outline-none  mb-6 w-80"
            />

            <label className="text-[13px] font-medium mb-1 text-[#1f2937]">Password</label>
            <input
              type="password"
              className="border-b border-[#000000] outline-none  mb-8 w-80"
            />

            <button
              type="submit"
              className="w-75 h-[56px]  rounded-xl font-medium bg-[#08CE8E] hover:bg-[#0AB882] text-white"
            >
              Signup
            </button>
          </form>

          <p className="text-[11px] text-[#6b7280] mt-6">
            By signing up you agree to our{" "}
            <a href="#" className="text-[#0AB882] hover:underline">
              Terms of Service
            </a>
          </p>

          <p className="text-[11px] text-[#6b7280] mt-2">
            Already have an account{" "}
            <a href="#" className="text-[#0AB882] hover:underline">
              log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;