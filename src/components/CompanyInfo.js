import React from "react";

function CompanyInfo() {
  return (
    <div className="mt-20 flex flex-col gap-10 mb-10">
      <h1 className="text-center text-3xl font-semibold text-primary">
        Who we are ?
      </h1>
      <div className="flex justify-center">
        <img
          src="https://sheyhiring.netlify.app/images/job-searching.png"
          alt=""
        />
      </div>
      <p className="text-gray-600 text-md">
        SHEYHIRING is an employment agency, which helps companies/employers get
        matched with talented candidates who meet their requirements. We provide
        staffing solutions for local, national, and global recruitment needs.
        Our goal is to assist job seekers in finding new positions while also
        assisting employers in finding the best applicant for their available
        positions. For employers, we give the greatest staffing solution. We
        want to help employers find the right people to help them achieve their
        objectives.
      </p>
      <div className="flex items-center justify-center bg-primary text-secondary p-5 flex-col font-semibold gap-5 hover:bg-secondary hover:text-primary">
        <h1 className="text-7xl text-center sm:text-3xl">
          ❝ If opportunity doesn't knock,
        </h1>
        <h1 className="text-7xl text-center sm:text-3xl"> build a door ❞</h1>
      </div>
      <div className="flex gap-5 flex-col">
        <h1 className="text-center text-3xl font-semibold text-primary">
          What we do ?
        </h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
          voluptatem ipsam cupiditate inventore dignissimos beatae quos?
          Dolores, deleniti enim error veniam dignissimos ut dolorum laboriosam
          neque impedit! Voluptatibus, quo? Itaque.
        </p>
        <div className="relative">
            <img src="./office.jpg" alt="" className="rounded-2xl"/>
            <div className="absolute inset-0 bg-black opacity-70 flex items-center justify-start rounded-2xl">
                 <h1 className="text-white text-7xl sm:text-4xl text-center">Easy and Fast Way For You To Find Your Dream Job</h1>
            </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyInfo;
