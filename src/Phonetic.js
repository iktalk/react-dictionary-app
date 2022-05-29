import React from "react";
import "./Phonetic.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a
        href={props.phonetic.audio}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-circle"
      >
        <FontAwesomeIcon icon={faPlay} size="lg" />
      </a>
      <span className="phonetic-text">{props.phonetic.text}</span>
    </div>
  );
}
