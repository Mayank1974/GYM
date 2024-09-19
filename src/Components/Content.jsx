import React from "react";
import banner from "../assets/banner.jpg";

export default function Content() {
  return (
    <div className="h-[100%] mb-20">
      
      <div className="shadow-md shadow-gray-500">
        <img src={banner} className="w-[100%] h-[50%]" alt="" />
      </div>
      <div className="p-8 border-4 bg-slate-100 rounded-lg  shadow-md ml-[10%] mt-10 shadow-gray-600 w-[80%]">
        <h1 className="text-4xl font-bold flex justify-center items-center">
          Training Split
        </h1>
        <br />
        <p className="font-bold">
          A well-structured training split is crucial for gaining muscle and
          increasing weight. Here's a sample 6-day training split focused on
          hypertrophy (muscle growth) with one rest day. This split targets
          different muscle groups each day to ensure recovery and maximize
          muscle growth.
        </p>
      </div>

      <div className="training-split bg-slate-100 flex-wrap  mx-auto w-[400px] flex flex-col justify-center items-center  rounded-[10px] shadow-lg shadow-gray-500 px-4 pb-4 m-4">
        <h1 className="my-2 underline font-bold text-2xl">
          Training Split Overview
        </h1>
        <ol className="list-disc">
          <li>Day : 1 : Chest and Triceps</li>
          <li>Day : 2 : Back and Biceps</li>
          <li>Day : 3 : Shoulders and Abs</li>
          <li>Day : 4 : Chest and Triceps (focus on different exercises)</li>
          <li>Day : 5 : Back and Biceps (focus on different exercises)</li>
          <li>Day : 6 : Legs</li>
          <li>Day : 7 : Rest or Active Recovery</li>
        </ol>
      </div>
      <div className="flex  flex-wrap justify-center  mx-auto max-w-[500px]   exercises space-y-8 m-12 gap-12     ">
        <div className="day-1 w-[460px] bg-slate-100 border   p-4 m-1 flex flex-col items-center rounded-[10px] shadow-lg shadow-gray-500">
          <h1 className="my-2  font-bold text-2xl">Day:1 Chest and Triceps</h1>
          <ol className="list-decimal ml-8">
            <a href="https://youtube.com/shorts/hWbUlkb5Ms4?si=LjnrDGajZ5AS0Mwl">
              <li>
                <span className="font-bold mr-2">Bench Press:</span>4 sets of
                8-12 reps
              </li>
            </a>
            <a href="https://youtube.com/shorts/Gruq177Psnk?si=niKg7aI9hwkjaHgu">
              <li>
                <span className="font-bold mr-2">Incline Dumbbell Press:</span>4
                sets of 8-12 reps
              </li>
            </a>
            <a href="https://youtube.com/shorts/8Wqw9vjfvzY?si=6bcnAnfwuC_s6KpQ">
              <li>
                <span className="font-bold mr-2">Chest Dips:</span>3 sets of
                10-12 reps
              </li>
            </a>
            <a href="https://youtube.com/shorts/tGXIQR89-JE?si=eX1VQNcenYX6ZBWj">
              <li>
                <span className="font-bold mr-2">Cable Flyes:</span>3 sets of
                12-15 reps
              </li>
            </a>
            <a href="https://youtube.com/shorts/WjLJ7zIppXQ?si=rXrbO7UbZjrUNfXU">
              <li>
                <span className="font-bold mr-2">Triceps Pushdowns:</span>4 sets
                of 10-15 reps
              </li>
            </a>
            <a href="https://youtube.com/shorts/8FNGBJUHfsA?si=karVoSYGEdDHJmqq">
              <li>
                <span className="font-bold mr-2">
                  Overhead Triceps Extension:
                </span>
                3 sets of 10-12 reps
              </li>
            </a>
            <a href="https://youtube.com/shorts/43rg7fBNP2w?si=8dATsrRDaJyrBWO3">
              <li>
                <span className="font-bold mr-2">Close-Grip Bench Press:</span>3
                sets of 8-10 reps
              </li>
            </a>
          </ol>
        </div>
        <div className="day-2 w-[460px] border bg-slate-100   p-4 m-1 flex flex-col items-center rounded-[10px] shadow-lg shadow-gray-500">
          <h1 className="my-2  font-bold text-2xl">Day:2 Back and Biceps</h1>
          <ol className="list-decimal ml-8">
            <a href="https://youtube.com/shorts/vfKwjT5-86k?si=Vrck1pbvxMZZnZVv">
              <li>
                <span className="font-bold mr-2">Deadlift:</span>4 sets of 6-8
                reps
              </li>
            </a>
            <a href="https://youtube.com/shorts/dvG8B2OjfWk?si=XLSlE6a25MVslzWa">
              <li>
                <span className="font-bold mr-2">Pull-Ups:</span>4 sets of 8-12
                reps
              </li>
            </a>
            <a href="https://youtube.com/shorts/Nqh7q3zDCoQ?si=zGSuCgOBEttrxGH6">
              <li>
                <span className="font-bold mr-2">Barbell Rows:</span>3 sets of
                10-12 reps
              </li>
            </a>
            <a href="https://youtube.com/shorts/77bPLrsMwiQ?si=U3_vd4jGZaaaD1hU">
              <li>
                <span className="font-bold mr-2">Lat Pulldown:</span>3 sets of
                10-12 reps
              </li>
            </a>
            <a href="https://youtube.com/shorts/XZW0m1J_9dU?si=EHPNIRWzzjJmYC3K">
              <li>
                <span className="font-bold mr-2">Face Pulls:</span>4 sets of
                12-15 reps
              </li>
            </a>
            <a href="https://youtube.com/shorts/N6paU6TGFWU?si=dJj2l50cZEW5r8PC">
              <li>
                <span className="font-bold mr-2">Barbell Curls:</span>3 sets of
                10-12 reps
              </li>
            </a>
            <a href="https://youtube.com/shorts/ZzJs4BLnhCw?si=N9hemOpc_1gOKfcs">
              <li>
                <span className="font-bold mr-2">Hammer Curls:</span>3 sets of
                10-12 reps
              </li>
            </a>
          </ol>
        </div>
        <div className="day-3 w-[460px] border  bg-slate-100  p-4 m-1 flex flex-col items-center rounded-[10px] shadow-lg shadow-gray-500">
          <h1 className="my-2  font-bold text-2xl">Day:3 Shoulders and Abs</h1>
          <ol className="list-decimal ml-8">
            <a href="https://youtube.com/shorts/DN3WXJlB1Q4?si=y2oWznl8mORnprcb">
              <li>
                <span className="font-bold mr-2">Overhead Press:</span>4 sets of
                8-12 reps
              </li>
            </a>
            <a href="https://youtube.com/shorts/G-piLwLu0d4?si=qfs5pXwYOL2w9gv_">
              <li>
                <span className="font-bold mr-2">Dumbell Lateral Raises:</span>4
                sets of 12-15 reps
              </li>
            </a>
            <a href="https://youtube.com/shorts/yHx8wPv4RPo?si=58VTlVpNArjtRCdQ">
              <li>
                <span className="font-bold mr-2">Front Raises:</span>3 sets of
                12-15 reps
              </li>
            </a>
            <a href="https://youtube.com/shorts/mSMJ3rwYMu0?si=MOzMg_bddRrCub28">
              <li>
                <span className="font-bold mr-2">
                  Bent-Over Rear Delt Flyes:
                </span>
                3 sets of 12-15 reps
              </li>
            </a>
            <a href="https://youtube.com/shorts/DVxfKB0BnlY?si=K9UVONcxHmaAzpWw">
              <li>
                <span className="font-bold mr-2">Cable Face Pulls:</span>4 sets
                of 12-15 reps
              </li>
            </a>
            <a href="https://youtube.com/shorts/v25dawSzRTM?si=arESqBdsYKh5ZRo5">
              <li>
                <span className="font-bold mr-2">Plank:</span>3 sets of 1-2 Min
              </li>
            </a>
            <a href="https://youtube.com/shorts/2n4UqRIJyk4?si=PK5em4cWjaAqW-YM">
              <li>
                <span className="font-bold mr-2">Hanging Leg Raises:</span>3
                sets of 12-15 reps
              </li>
            </a>
            <a href="https://youtube.com/shorts/-cPtvFdT8dc?si=xFpU-DAw5VK6z5XB">
              <li>
                <span className="font-bold mr-2">Russian Twists:</span>3 sets of
                20-30 reps
              </li>
            </a>
          </ol>
        </div>
        <div className="day-4 w-[460px] border bg-slate-100  p-4 m-1 flex flex-col items-center rounded-[10px] shadow-lg shadow-gray-500">
          <h1 className="my-2  font-bold text-2xl">
            Day:4 Chest and Triceps (Different Focus)
          </h1>
          <ol className="list-decimal ml-8">
            <a href="https://youtube.com/shorts/MRmeUet5VUw?si=gVpAFTLBWuo3pdFq">
              <li>
                <span className="font-bold mr-2">Incline Barbell Press: </span>4
                sets of 8-12 reps
              </li>
            </a>
            <a href="https://youtube.com/shorts/1V3vpcaxRYQ?si=JJCqYblFGNlmQhwa">
              <li>
                <span className="font-bold mr-2">Flat Dumbbell Press: </span>4
                sets of 8-12 reps
              </li>
            </a>
            <a href="https://youtube.com/shorts/a-UFQE4oxWY?si=cSif5TH8iPhnNLdS">
              <li>
                <span className="font-bold mr-2">Decline Bench Press </span>3
                sets of 8-10 reps
              </li>
            </a>
            <a href="https://youtube.com/shorts/g3T7LsEeDWQ?si=Y91AJPAf3Dfl3-Wi">
              <li>
                <span className="font-bold mr-2">Pec Deck Machine: </span>3 sets
                of 12-15 reps
              </li>
            </a>
            <a href="https://youtube.com/shorts/gTrlbuuMufQ?si=34Frg96TTXdmi_9T">
              <li>
                <span className="font-bold mr-2">Skull Crushers: </span>4 sets
                of 8-12 reps
              </li>
            </a>
            <a href="https://youtube.com/shorts/F0hRXsCylig?si=iIBlcUbsQexjoWM0">
              <li>
                <span className="font-bold mr-2">Triceps Kickbacks: </span>3
                sets of 10-12 reps
              </li>
            </a>
            <a href="https://youtube.com/shorts/Qz39qVt6NGA?si=-yLG1kplPOxVDvoO">
              <li>
                <span className="font-bold mr-2">
                  Dips (Bench or Parallel Bar):{" "}
                </span>
                3 sets of 10-15 reps
              </li>
            </a>
          </ol>
        </div>
        <div className="day-5 w-[460px] border bg-slate-100  p-4 m-1 flex flex-col items-center rounded-[10px] shadow-lg shadow-gray-500">
          <h1 className="my-2  font-bold text-2xl">
            Day:5 Back and Biceps (Different Focus)
          </h1>
          <ol className="list-decimal ml-8">
            <a href="https://youtube.com/shorts/ZhHw9HZGezY?si=S5-k6FORcLnIWIE3">
              <li>
                <span className="font-bold mr-2">Rack Pulls:</span>4 sets of 6-8
                reps
              </li>
            </a>
            <a href="https://youtube.com/shorts/MIulz5576AY?si=5XMRFNFsutqWO9lA">
              <li>
                <span className="font-bold mr-2">T-Bar Rows:</span>4 sets of
                8-12 reps
              </li>
            </a>
            <a href="https://youtube.com/shorts/KaCcBqhiXtc?si=aJU3BcuTEGP8iu0E">
              <li>
                <span className="font-bold mr-2">
                  Single-Arm Dumbbell Rows:
                </span>
                3 sets of 10-12 reps
              </li>
            </a>
            <a href="https://youtube.com/shorts/dCLRdVqKRkk?si=czO0aXwJB-Nze5FB">
              <li>
                <span className="font-bold mr-2">Seated Cable Rows:</span>3 sets
                of 10-12 reps
              </li>
            </a>
            <a href="https://youtube.com/shorts/Pp1VDEfd_us?si=CJdZl7iQ4k1dWFCM">
              <li>
                <span className="font-bold mr-2">Preacher Curls:</span>4 sets of
                8-12 reps
              </li>
            </a>
            <a href="https://youtube.com/shorts/e2kBlN7drqM?si=CKS65Ekxfx-NFKe-">
              <li>
                <span className="font-bold mr-2">Concentration Curls:</span>3
                sets of 10-12 reps
              </li>
            </a>
            <a href="https://youtube.com/shorts/W32gBdbEeoU?si=ffmiWZykfAB1-Iqb">
              <li>
                <span className="font-bold mr-2">Reverse Curls:</span>3 sets of
                12-15 reps
              </li>
            </a>
          </ol>
        </div>
        <div className="day-6 w-[460px] border  bg-slate-100 p-4 m-1 flex flex-col items-center rounded-[10px] shadow-lg shadow-gray-500">
          <h1 className="my-2  font-bold text-2xl">Day:6 Legs</h1>
          <ol className="list-decimal ml-8">
            <a href="https://youtube.com/shorts/PPmvh7gBTi0?si=pLVNIwlBfIajUfad">
              <li>
                <span className="font-bold mr-2">Squats:</span>4 sets of 6-8
                reps
              </li>
            </a>
            <a href="https://youtube.com/shorts/nDh_BlnLCGc?si=nMRr1nkjXMHUb6LN">
              <li>
                <span className="font-bold mr-2">Leg Press:</span>4 sets of
                10-12 reps
              </li>
            </a>
            <a href="https://youtube.com/shorts/YASKcL_kO3M?si=Obl40jLwE-b4nXJs">
              <li>
                <span className="font-bold mr-2">Lunges:</span>3 sets of 10-12
                reps
              </li>
            </a>
            <a href="https://youtube.com/shorts/FMCq0hT3KRU?si=mo1qRjKqSeW9nC2e">
              <li>
                <span className="font-bold mr-2">Leg Curls:</span>3 sets of
                12-15 reps
              </li>
            </a>
            <a href="https://youtube.com/shorts/ztNBgrGy6FQ?si=nBJnSVj9cMOSbN6j">
              <li>
                <span className="font-bold mr-2">Leg Extensions:</span>4 sets of
                10-15 reps
              </li>
            </a>
            <a href="https://youtube.com/shorts/haHcBAd637E?si=YkkQCro9YXDh92wz">
              <li>
                <span className="font-bold mr-2">Standing Calf Raises:</span>4
                sets of 15-20 reps
              </li>
            </a>
            <a href="https://youtube.com/shorts/NwA1N_EFTtk?si=nYuq4Os135rGBb4H">
              <li>
                <span className="font-bold mr-2">Seated Calf Raises:</span>3
                sets of 15-20 reps
              </li>
            </a>
          </ol>
        </div>
        <div className="day-7 w-[460px] border bg-slate-100  p-4 m-1 flex flex-col items-center rounded-[10px] shadow-lg shadow-gray-500">
          <h1 className="my-2  font-bold text-2xl">
            Day:7 Rest or Active Recovery
          </h1>
          <ol className="list-decimal ml-8">
            <li>
              <span className="font-bold mr-2">Active Recovery:</span>Light
              cardio, stretching, yoga, or a walk.
            </li>
            <li>
              <span className="font-bold mr-2">Rest:</span>Complete rest to
              allow muscle recovery.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
