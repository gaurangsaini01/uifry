"use client";
import React from "react";
import Card from "./Card";

function FAQ() {
  return (
    <section className="md:max-w-[80%] max-w-[100vw] mx-auto mt-5">
      <div className="relative">
        <img
          src="star 1.png"
          className="absolute bottom-0 right-0 md:left-[60%] "
          alt=""
        />
        <div className="md:w-1/2 w-full md:p-2">
          <h2 className="text-[#FF5555] md:text-[18px] text-[14px] font-clash mb-2 text-center md:text-left font-semibold tracking-wider">
            FAQ
          </h2>
          <h1 className="md:text-5xl text-3xl font-clash font-bold text-center md:text-left">
            Frequently Asked Questions
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap md:flex-row flex-col mt-10 p-4 md:p-0">
        <div className="md:w-1/2 w-full flex gap-5 flex-col md:items-start items-center">
          <Card
            color={true}
            heading={"The Best Financial App Ever!"}
            subheading={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad "
            }
          />
          <Card
            color={false}
            heading={"The Best Financial App Ever!"}
            subheading={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad "
            }
          />
          <Card
            color={true}
            heading={"The Best Financial App Ever!"}
            subheading={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad "
            }
          />
        </div>
        <div className="flex gap-5 flex-col md:w-1/2 w-full items-center">
          {" "}
          <Card
            color={false}
            heading={"The Best Financial App Ever!"}
            subheading={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad "
            }
          />
          <Card
            color={true}
            heading={"The Best Financial App Ever!"}
            subheading={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad "
            }
          />
          <Card
            color={false}
            heading={"The Best Financial App Ever!"}
            subheading={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad "
            }
          />
        </div>
      </div>
    </section>
  );
}

export default FAQ;
