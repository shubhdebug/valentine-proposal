"use client";

import React, { useState, useEffect, useRef } from "react";
import { Quintessential } from "next/font/google";

const quintessential = Quintessential({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const [step, setStep] = useState("start");
  const [history, setHistory] = useState([]);
  const [pos, setPos] = useState({ top: "60%", left: "60%" });
  const [showCartoon, setShowCartoon] = useState(false);
  const [showHearts, setShowHearts] = useState(false);

  const goTo = (newStep) => {
    setHistory((prev) => [...prev, step]);
    setStep(newStep);
  };

  const goBack = () => {
    setHistory((prev) => {
      const last = prev[prev.length - 1];
      if (last) setStep(last);
      return prev.slice(0, -1);
    });
  };

  const move = () => {
    setPos({
      top: Math.random() * 70 + "%",
      left: Math.random() * 70 + "%",
    });
  };

  // Video
  const videoRef = useRef(null);
  useEffect(() => {
    if (step === "forever" && videoRef.current) {
      videoRef.current.play();
    }
  }, [step]);
  // Quiz
const [quizStep, setQuizStep] = useState(1);
const [selectedOption, setSelectedOption] = useState(null);

const quizData = {
  1: {
    question: "Who is more likely to start a random argument but forget about it immediately? 😂",
    options: ["You 😏", "Me 😘", "Both like Tom & Jerry 🐭🐱"],
  },
  2: {
    question: "If we were a couple in a movie, our story would be… 🎬",
    options: ["Full of chaos and love 💕", "Rom-com with constant teasing 😄", "Forever besties turned lovers ❤️"],
  },
  3: {
    question: "When we talk on the phone daily, who falls asleep first? 😴",
    options: ["Me 😴", "You 😴", "Sometimes both 😆"],
  },
  4: {
    question: "What’s our signature couple thing? 🫶",
    options: ["Laughing at each other’s jokes 😂", "Sending random memes all day 🤪", "Cuddles + endless chats 💖"],
  },
  5: {
    question: "If we were stuck on a deserted island together, who would survive longer without snacks? 🍕🍫",
    options: ["Me 🍫", "You 🍕", "Neither, we’d survive together 😄"],
  },
};


  const gifts = [
    { id: 1, title: "Gift 1", image: "/Images/img.gif" },
    { id: 2, title: "Gift 2", image: "/Images/img9.gif" },
    { id: 3, title: "Gift 3", image: "/Images/img.gif" },
  ];

  const letterText = `
Dear A MAN ❤️,

It’s been almost a year since we’ve been connected, and this time has been truly special for me.
Over this period, a unique connection has grown between us — one that goes beyond friendship, making every single moment unforgettable.

I’ll always cherish the time we spent together in Pune — laughing, talking, and enjoying little adventures. Those memories bring me so much joy and make our bond even stronger.

This past year, whether in small moments or big ones, has been absolutely priceless to me. You’ve become someone I truly treasure, and I want to hold on to every memory we’ve made together.

Thank you for being exactly who you are, and for all the beautiful memories we’ve shared. ❤️

Always yours,
Shubhangi Sen
`;

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-100 relative p-4 overflow-hidden">
      {/* Hearts background */}
      {showHearts && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          {[...Array(30)].map((_, i) => (
            <span
              key={i}
              className="absolute text-red-500"
              style={{
                left: Math.random() * 100 + "%",
                bottom: "-10%",
                fontSize: Math.random() * 20 + 16 + "px",
                animation: `rise ${Math.random() * 15 + 15}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            >
              ❤️
            </span>
          ))}
        </div>
      )}

      {/* Start: Do you love me? */}
      {/* START */}
{step === "start" && (
  <div className="bg-pink-200 p-10 md:p-16 text-center rounded-3xl w-full max-w-3xl relative transition-all duration-700">

    {/* NORMAL QUESTION VIEW */}
    {!showCartoon && (
      <>
        <h1 className="text-4xl sm:text-5xl text-pink-600 font-bold mb-8">
          Do you love me? ❤️
        </h1>

        <button
          className="cursor-pointer bg-pink-500 text-white px-8 py-4 rounded-full mr-4 hover:scale-110 transition-transform"
          onClick={() => setShowCartoon(true)}
        >
          Yes 😍
        </button>

        <button
          onMouseEnter={move}
          className="absolute bg-pink-700 text-white px-6 py-3 cursor-pointer rounded-full hover:scale-125 transition-transform"
          style={{ top: pos.top, left: pos.left }}
        >
          No 😒
        </button>
      </>
    )}

    {/* GIF SUCCESS VIEW (same style like Happy Valentine Day) */}
    {showCartoon && (
      <>
        <img
          src="/Images/me.gif"
          className="mx-auto mb-6 w-72"   // bigger size
        />

        <h2 className="text-4xl font-bold text-pink-600 mb-6">
          I knew it! 😘
        </h2>

        <button
          onClick={() => {
            goTo("valentine");
            setShowHearts(true);
          }}
          className="bg-pink-500 text-white px-10 py-4 rounded-full hover:scale-110 transition-transform"
        >
          Next ❤️
        </button>
      </>
    )}

  </div>
)}


      {/* Valentine */}
      {step === "valentine" && (
        <div className="text-center bg-pink-200 px-6 sm:px-12 md:px-20 py-12 sm:py-16 rounded-3xl relative w-full max-w-3xl transition-all duration-700">
          <h1 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-6 animate-pulse">
            Will you be my Valentine? ❤️
          </h1>
          <button
            className="bg-pink-500 text-white px-6 py-3 rounded-full mr-4 hover:scale-110 cursor-pointer transition-transform"
            onClick={() => goTo("happy")}
          >
            Yes 😍
          </button>

          <button
            onMouseEnter={move}
            className="absolute bg-pink-700 text-white  cursor-pointer px-6 py-3 rounded-full hover:scale-125 transition-transform"
            style={{ top: pos.top, left: pos.left }}
          >
            No 😒
          </button>
        </div>
      )}

      {/* Happy */}
      {step === "happy" && (
        <div className="bg-pink-200 p-6 sm:p-10 md:p-16 text-center rounded-3xl w-full max-w-3xl transition-all duration-700">
          <img src="/Images/img2.gif" className="mx-auto mb-4" />
          <h1 className="text-3xl sm:text-5xl text-pink-600 font-bold">
            Happy Valentine Day Dear!💖
          </h1>
          <p className="mt-4 text-amber-950">
            We fight like Tom & Jerry but love endlessly ❤️
          </p>
          <button
            className="bg-pink-500 text-white px-10 py-4 rounded-full mt-10 hover:scale-110 transition-transform cursor-pointer"
            onClick={() => goTo("gifts")}
          >
            See My Gifts 🎁
          </button>
        </div>
      )}

      {/* GIFTS */}
      {step === "gifts" && (
        <div className="bg-pink-200 px-6 sm:px-10 md:px-20 py-10 rounded-3xl text-center w-full max-w-5xl">
          <h1 className="text-3xl sm:text-4xl text-amber-950 font-bold mb-10">
            You 💝
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 cursor-pointer">
            {gifts.map((gift) => (
              <div
                key={gift.id}
                onClick={() => {
                  if (gift.id === 1) {
                    goTo("quiz");
                  }
                  if (gift.id === 2) goTo("letter");
                  if (gift.id === 3) goTo("gallery");
                }}
                className="bg-pink-100 hover:bg-pink-300 p-10 rounded-xl cursor-pointer hover:scale-105 transition"
              >
                <img src={gift.image} className="w-32 mx-auto" />
                <p className="mt-2 text-2xl text-amber-950 font-bold">{gift.title}</p>
              </div>
            ))}
          </div>
        </div>
      )}
{/* QUIZ */}
{step === "quiz" && (
  <div className="bg-pink-200 px-6 sm:px-12 md:px-20 py-10 rounded-3xl text-center w-full max-w-3xl">

    {quizStep <= 5 ? (
      <>
        <h1 className="text-3xl sm:text-4xl font-bold text-amber-950 mb-6">
          Quiz 😉
        </h1>

        <p className="mb-6 text-amber-950 text-lg sm:text-2xl">
          {quizData[quizStep].question}
        </p>

        {quizData[quizStep].options.map((opt, i) => (
          <button
            key={i}
            onClick={() => setSelectedOption(opt)}
            className={`block w-full mb-3 px-6 py-3 rounded-full transition 
              ${selectedOption === opt
                ? "bg-pink-500 text-white"
                : "bg-white text-amber-950 hover:bg-pink-100"
              }`}
          >
            {opt}
          </button>
        ))}

        <button
          disabled={!selectedOption}
          onClick={() => {
            setSelectedOption(null);
            setQuizStep(quizStep + 1);
          }}
          className="bg-pink-500 text-white px-6 py-2 rounded-full mt-4 hover:scale-105 transition"
        >
          Next ❤️
        </button>
      </>
    ) : (
      <>
        <h1 className="text-3xl sm:text-4xl font-bold text-amber-950">
          Yaay 😘❤️
        </h1>

        <button
          onClick={goBack}
          className="mt-6 bg-red-400 text-white px-6 py-2 rounded-full"
        >
          ← BACK
        </button>
      </>
    )}

  </div>
)}

      {/* Letter */}
      {step === "letter" && (
        <div className="bg-pink-200 rounded-3xl text-center p-6 sm:p-10 md:p-16 w-full max-w-4xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-amber-950">
            A Letter For You 🥺
          </h1>
          <div className="bg-yellow-100 p-6 sm:p-10 rounded-xl overflow-y-auto text-left">
            <p
              className={`${quintessential.className} text-amber-950 whitespace-pre-wrap`}
            >
              {letterText}
            </p>
          </div>
          <button
            onClick={goBack}
            className="mt-6 bg-red-400 text-white px-6 py-2  cursor-pointer rounded-full"
          >
            ← BACK
          </button>
        </div>
      )}

{/* GALLERY */}
{step === "gallery" && (
  <div className="bg-pink-200 px-4 sm:px-10 py-10 rounded-3xl text-center max-h-[80vh] overflow-y-auto w-full max-w-6xl">

    <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-amber-950">
      Memories 📸
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

      {["p2.jpeg","p1.jpeg","p3.jpeg","p4.jpeg","p5.jpeg","p6.jpeg","p7.jpeg","p9.jpeg","p8.jpeg"].map((img,i)=>(
        
        <div key={i} className="bg-white p-3 shadow-lg rounded-lg rotate-[2deg]">

          {/* ✅ FIX HERE */}
          <img 
            src={`/Images/${img}`} 
            className="w-full h-full rotate-[2deg] object-cover rounded-lg"
          />

        </div>
      ))}

    </div>

    <div className="flex justify-center gap-4 mt-6">

      <button
        onClick={goBack}
        className="bg-red-400 text-white px-6 py-2 rounded-full"
      >
        ← BACK
      </button>

      <button
        onClick={()=>goTo("forever")}
        className="bg-pink-500 text-white px-6 py-2 rounded-full"
      >
        Finally ❤️
      </button>

    </div>

  </div>
)}

      {/* FOREVER */}
      {step === "forever" && (
        <div className="bg-pink-200 rounded-3xl text-center p-6 sm:p-10 w-full max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-amber-950 mb-6">
            You are my forever 👁️❤️!
          </h1>
          <div className="bg-white p-4 rounded-xl shadow-lg mx-auto w-full max-w-sm">
            <video
              ref={videoRef}
              src="/Images/video.mp4"
              autoPlay
              loop
              controls
              className="rounded-lg w-full"
            />
          </div>
          <p className="mt-6 text-amber-950">
            Like Git & commits — sometimes conflicts, always merging ❤️<br />
            When your girlfriend is a coder, love feels like a perfect API — always connected, always responding.
          </p>
          <button
            onClick={goBack}
            className="mt-6 bg-red-400 text-white px-6 py-2 rounded-full"
          >
            ← BACK
          </button>
        </div>
      )}

      <style jsx>{`
        @keyframes rise {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-120vh);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
