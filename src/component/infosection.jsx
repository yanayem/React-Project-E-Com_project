import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faAddressBook,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

function InfoSec() {
  const InfoData = [
    {
      icon: faLocationDot,
      title: "Delivery Information",
      desc: `Monday: 12:00 AM–3:00 AM, 8:00 AM–3:00 AM
Tuesday: 8:00 AM–3:00 AM
Wednesday: 8:00 AM–3:00 AM
Thursday: 8:00 AM–3:00 AM
Friday: 8:00 AM–3:00 AM
Saturday: 8:00 AM–3:00 AM
Sunday: 8:00 AM–12:00 AM
Estimated time until delivery: 20 min`,
    },
    {
      icon: faAddressBook,
      title: "Contact Information",
      desc: `If you have allergies or other dietary restrictions, please contact the restaurant. The restaurant will provide food-specific information upon request.
          Phone number
          +934443-43
          Website
          http://mcdonalds.uk/`,
    },
    {
      icon: faClock,
      title: "Operational Times",
      desc: `Monday: 8:00 AM–3:00 AM
Tuesday: 8:00 AM–3:00 AM
Wednesday: 8:00 AM–3:00 AM
Thursday: 8:00 AM–3:00 AM
Friday: 8:00 AM–3:00 AM
Saturday: 8:00 AM–3:00 AM
Sunday: 8:00 AM–3:00 AM`,
    },
  ];

  const boldDays = (text) => {
    const dayNames = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
      "Estimated time until delivery",
    ];
    const lines = text.split("\n");

    return lines.map((line, index) => {
      const day = dayNames.find((d) => line.startsWith(d));
      if (day) {
        const rest = line.slice(day.length);
        return (
          <div className="pb-2" key={index}>
            <strong>{day}</strong>
            {rest}
          </div>
        );
      }

      if (line.trim() === "Phone number") {
        return (
          <div className="pb-1 fw-bold fs-6" key={index}>
            Phone number
          </div>
        );
      }

      if (line.trim().startsWith("+")) {
        return (
          <div className="pb-2 fs-6" key={index}>
            {line.trim()}
          </div>
        );
      }

      if (line.trim() === "Website") {
        return (
          <div className="pb-1 fw-bold fs-6" key={index}>
            Website
          </div>
        );
      }

      if (line.trim().startsWith("http")) {
        return (
          <div className="pb-2 fs-6" key={index}>
            <a
              href={line.trim()}
              target="_blank"
              rel="noopener noreferrer"
              className=""
              style={{ textDecoration: "none", color: "black" }}
            >
              {line.trim()}
            </a>
          </div>
        );
      }

      if (line.match(/\d{1,2}:\d{2} (AM|PM)/)) {
        return (
          <div
            className="pb-2"
            style={{ fontSize: "12px", fontWeight: "normal" }}
            key={index}
          >
            {line}
          </div>
        );
      }
      return (
        <div
          className="pb-2"
          style={{ fontSize: "14px", fontWeight: "normal" }}
          key={index}
        >
          {line}
        </div>
      );
    });
  };

  return (
    <div className="container-fluid p-0">
      <div className="info_section container py-5">
        <div className="row bg-white rounded-3 shadow-lg overflow-hidden">
          {InfoData.map((item, index) => {
            let paddingClass = "px-0";
            if (index === 0) {
              paddingClass = "ps-5 pe-3";
            } else if (index === InfoData.length - 1) {
              paddingClass = "ps-5 pe-0";
            }
            return (
              <div
                className={`col-sm-4 ${paddingClass} py-5 ${
                  index === InfoData.length - 1
                    ? "bg_info_custom text-white"
                    : ""
                }`}
                key={index}
              >
                <div className="d-flex align-items-center mb-2">
                  <FontAwesomeIcon icon={item.icon} className="me-2" />
                  <h5 className="mb-0 fw-bold p-2">{item.title}</h5>
                </div>
                <div>{boldDays(item.desc)}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default InfoSec;
