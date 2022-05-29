import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="mb-3">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function(definition, index) {
        return (
          <div key={index}>
            <h4>{definition.definition}</h4>
            <h5>
              <em>{definition.example}</em>
            </h5>
            <h6>
              <Synonyms synonyms={props.meaning.synonyms} />
            </h6>
            <br />
          </div>
        );
      })}
    </div>
  );
}
