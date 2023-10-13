import React from "react";

const BasicInformation = () => {
  return (
    <div className="md:flex text-left ">
      <div className="1">
        <div>
          <span class="material-symbols-outlined">calendar_month</span>
          <span>
            <b>Date of birth</b>: 03 feb 2001
          </span>
        </div>
        <div>
          <span class="material-symbols-outlined">home</span>
          <span>
            <b>Address</b>:KASHMIR, INDIA
          </span>
        </div>
        <div>
          <span class="material-symbols-outlined">language</span>
          <span>
            <b>Spoken Language</b>: ENGLISH, URDU, HINDI, PUNJABI, KASHMIRI,
            HINKO
          </span>
        </div>
      </div>
      <div className="2">
        <div>
          <span class="material-symbols-outlined">flag</span>
          <span>
            <b>Nationality</b>: INDIA
          </span>
        </div>
        <div>
          <span class="material-symbols-outlined">email</span>
          <span>
            <b>Email</b>:ansarbaba2000@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
};

export default BasicInformation;
