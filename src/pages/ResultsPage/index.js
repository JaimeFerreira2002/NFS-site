import React from "react";
import { useParams } from "react-router-dom";
import "./style.css";

// The competition data should be imported from your data source
const competitionData = {
  competitions: [
    {
      competitionName: "FSPT 2024",
      staticEvents: [
        { eventName: "Design", result: "P2" },
        { eventName: "Cost P2", result: "P2" },
      ],
      dynamicEvents: [
        { eventName: "Aceleration", result: "DNS" },
        { eventName: "Skidpad", result: "DNS" },
        { eventName: "Autocross", result: "DNS" },
        { eventName: "Endurance", result: "DNF (10 laps completed)" },
      ],
      businessPlan: {
        result: "Winners",
      },
      specialAwards: [
        { awardName: "Best social media presence", result: null },
      ],
    },
    {
      competitionName: "FSA 2024",
      staticEvents: [
        { eventName: "Design", result: null },
        { eventName: "Cost", result: null },
      ],
      dynamicEvents: [
        { eventName: "Scrutineering", result: "Did not complete" },
      ],
      businessPlan: {
        result: "Did not compete",
      },
    },
  ],
};

const CompetitionDetails = () => {
  const { id } = useParams();
  const competition = competitionData.competitions[id];

  if (!competition) return <p>Competition not found</p>;

  return (
    <div className="wrapper">
      <h1>{competition.competitionName}</h1>

      <div>
        <h2>Static Events</h2>
        <ul>
          {competition.staticEvents.map((event, idx) => (
            <li key={idx}>
              {event.eventName}: {event.result || "Pending"}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Dynamic Events</h2>
        <ul>
          {competition.dynamicEvents.map((event, idx) => (
            <li key={idx}>
              {event.eventName}: {event.result || "Pending"}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Business Plan Presentation</h2>
        <p>Result: {competition.businessPlan.result || "Pending"}</p>
      </div>

      {competition.specialAwards && competition.specialAwards.length > 0 && (
        <div>
          <h2>Special Awards</h2>
          <ul>
            {competition.specialAwards.map((award, idx) => (
              <li key={idx}>
                {award.awardName}: {award.result || "Pending"}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CompetitionDetails;

