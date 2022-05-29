import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <span className="resultsHeader">
            <h1 className="mb-4">{props.results.word}</h1>
            {props.results.phonetics.map(function(phonetic, index) {
              return (
                <div key={index} className="mb-4">
                  <Phonetic phonetic={phonetic} />
                </div>
              );
            })}
          </span>
          {props.results.meanings.map(function(meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </section>
        <section>
          <div>
            <h3>Synonyms</h3>
            <ul className="Synonyms">
              {props.results.meanings[0].synonyms.map(function(synonym, index) {
                return <li key={index}>{synonym}</li>;
              })}
            </ul>
          </div>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
