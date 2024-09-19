import React from "react";
import banner from "../assets/banner.jpg"
import img1 from "../assets/images.jfif"
import img2 from "../assets/images.jfif"
export default function Content() {
  return (
    <div className="h-[100%] mb-20">
    <div className="shadow-md shadow-gray-500">
    <img src={banner} className="w-[100%] h-[50%]" alt="" />
    </div>
      <div className="p-8 border-4 bg-slate-100 rounded-lg  shadow-md ml-[10%] mt-10 shadow-gray-600 w-[80%]">
        <h1 className="text-4xl font-bold flex justify-center items-center">Training Split</h1>
        <br />
        <p className="font-bold">
          A well-structured training split is crucial for gaining muscle and
          increasing weight. Here's a sample 6-day training split focused on
          hypertrophy (muscle growth) with one rest day. This split targets
          different muscle groups each day to ensure recovery and maximize
          muscle growth.
        </p>
      </div>

      <div className="training-split bg-slate-100 flex-wrap  mx-auto w-fit flex flex-col justify-center items-center  rounded-[10px] shadow-lg shadow-gray-500 p-8 m-4">
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
<div className="flex  flex-wrap justify-center  mx-auto max-w-[500px]   exercises space-y-8 m-4 gap-12     ">
 <div className="day-1 w-fit bg-slate-100 border h-[50vh]  p-4 m-1 flex flex-col items-center rounded-[10px] shadow-lg shadow-gray-500">
        <h1 className="my-2  font-bold text-2xl">Day:1 Chest and Triceps</h1>
        <ol className="list-decimal ml-8">
          <li><span className="font-bold mr-2">Bench Press:</span>4 sets of 8-12 reps</li>
          <li><span className="font-bold mr-2">Incline Dumbbell Press:</span>4 sets of 8-12 reps</li>
          <li><span className="font-bold mr-2">Chest Dips:</span>3 sets of 10-12 reps</li>
          <li><span className="font-bold mr-2">Cable Flyes:</span>3 sets of 12-15 reps</li>
          <li><span className="font-bold mr-2">Triceps Pushdowns:</span>4 sets of 10-15 reps</li>
          <li><span className="font-bold mr-2">Overhead Triceps Extension:</span>3 sets of 10-12 reps</li>
          <li><span className="font-bold mr-2">Close-Grip Bench Press:</span>3 sets of 8-10 reps</li>
        </ol>
      </div>
      <div className="day-2 w-fit border bg-slate-100  h-[50vh] p-4 m-1 flex flex-col items-center rounded-[10px] shadow-lg shadow-gray-500">
        <h1 className="my-2  font-bold text-2xl">Day:2 Back and Biceps</h1>
        <ol className="list-decimal ml-8">
          <li><span className="font-bold mr-2">Deadlift:</span>4 sets of 6-8 reps</li>
          <li><span className="font-bold mr-2">Pull-Ups:</span>4 sets of 8-12 reps</li>
          <li><span className="font-bold mr-2">Barbell Rows:</span>3 sets of 10-12 reps</li>
          <li><span className="font-bold mr-2">Lat Pulldown:</span>3 sets of 10-12 reps</li>
          <li><span className="font-bold mr-2">Face Pulls:</span>4 sets of 12-15 reps</li>
          <li><span className="font-bold mr-2">Barbell Curls:</span>3 sets of 10-12 reps</li>
          <li><span className="font-bold mr-2">Hammer Curls:</span>3 sets of 10-12 reps</li>
           
        </ol>
      </div>
      <div className="day-3 w-fit border  bg-slate-100  p-4 m-1 flex flex-col items-center rounded-[10px] shadow-lg shadow-gray-500">
        <h1 className="my-2  font-bold text-2xl">Day:3 Shoulders and Abs</h1>
        <ol className="list-decimal ml-8">
          <li><span className="font-bold mr-2">Overhead Press:</span>4 sets of 8-12 reps</li>
          <li><span className="font-bold mr-2">Dumbbell Lateral Raises:</span>4 sets of 12-15 reps</li>
          <li><span className="font-bold mr-2">Front Raises:</span>3 sets of 12-15 reps</li>
          <li><span className="font-bold mr-2">Bent-Over Rear Delt Flyes:</span>3 sets of 12-15 reps</li>
          <li><span className="font-bold mr-2">Cable Face Pulls:</span>4 sets of 12-15 reps</li>
          <li><span className="font-bold mr-2">Plank:</span>3 sets of 1-2 Min</li>
          <li><span className="font-bold mr-2">Hanging Leg Raises:</span>3 sets of 12-15 reps</li>
          <li><span className="font-bold mr-2">Russian Twists:</span>3 sets of 20-30 reps</li>
           
        </ol>
      </div>
      <div className="day-4 w-fit border bg-slate-100  p-4 m-1 flex flex-col items-center rounded-[10px] shadow-lg shadow-gray-500">
        <h1 className="my-2  font-bold text-2xl">Day:4 Chest and Triceps (Different Focus)</h1>
        <ol className="list-decimal ml-8">
          <li><span className="font-bold mr-2">Incline Barbell Press: </span>4 sets of 8-12 reps</li>
          <li><span className="font-bold mr-2">Flat Dumbbell Press: </span>4 sets of 8-12 reps</li>
          <li><span className="font-bold mr-2">Decline Bench Press </span>3 sets of 8-10 reps</li>
          <li><span className="font-bold mr-2">Pec Deck Machine: </span>3 sets of 12-15 reps</li>
          <li><span className="font-bold mr-2">Skull Crushers: </span>4 sets of 8-12 reps</li>
          <li><span className="font-bold mr-2">Triceps Kickbacks: </span>3 sets of 10-12 reps</li>
          <li><span className="font-bold mr-2">Dips (Bench or Parallel Bar): </span>3 sets of 10-15 reps</li>
           
        </ol>
      </div>
      <div className="day-5 w-fit border bg-slate-100  p-4 m-1 flex flex-col items-center rounded-[10px] shadow-lg shadow-gray-500">
        <h1 className="my-2  font-bold text-2xl">Day:5 Back and Biceps (Different Focus)</h1>
        <ol className="list-decimal ml-8">
          <li><span className="font-bold mr-2">Rack Pulls:</span>4 sets of 6-8 reps</li>
          <li><span className="font-bold mr-2">T-Bar Rows:</span>4 sets of 8-12 reps</li>
          <li><span className="font-bold mr-2">Single-Arm Dumbbell Rows:</span>3 sets of 10-12 reps</li>
          <li><span className="font-bold mr-2">Seated Cable Rows:</span>3 sets of 10-12 reps</li>
          <li><span className="font-bold mr-2">Preacher Curls:</span>4 sets of 8-12 reps</li>
          <li><span className="font-bold mr-2">Concentration Curls:</span>3 sets of 10-12 reps</li>
          <li><span className="font-bold mr-2">Reverse Curls:</span>3 sets of 12-15 reps</li>

         
        </ol>
      </div>
      <div className="day-6 w-fit border  bg-slate-100 p-4 m-1 flex flex-col items-center rounded-[10px] shadow-lg shadow-gray-500">
        <h1 className="my-2  font-bold text-2xl">Day:6 Legs</h1>
        <ol className="list-decimal ml-8">
          <li><span className="font-bold mr-2">Squats:</span>4 sets of 6-8 reps</li>
          <li><span className="font-bold mr-2">Leg Press:</span>4 sets of 10-12 reps</li>
          <li><span className="font-bold mr-2">Lunges:</span>3 sets of 10-12 reps</li>
          <li><span className="font-bold mr-2">Leg Curls:</span>3 sets of 12-15 reps</li>
          <li><span className="font-bold mr-2">Leg Extensions:</span>4 sets of 10-15 reps</li>
          <li><span className="font-bold mr-2">Standing Calf Raises:</span>4 sets of 15-20 reps</li>
          <li><span className="font-bold mr-2">Seated Calf Raises:</span>3 sets of 15-20 reps</li>
          
        </ol>
      </div>
      <div className="day-7 w-fit border bg-slate-100  p-4 m-1 flex flex-col items-center rounded-[10px] shadow-lg shadow-gray-500">
        <h1 className="my-2  font-bold text-2xl">Day:7 Rest or Active Recovery</h1>
        <ol className="list-decimal ml-8">
          <li><span className="font-bold mr-2">Active Recovery:</span>Light cardio, stretching, yoga, or a walk.</li>
          <li><span className="font-bold mr-2">Rest:</span>Complete rest to allow muscle recovery.</li>
          
        </ol>
      </div>
</div>
     
    </div>
  );
}
