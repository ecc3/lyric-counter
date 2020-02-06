import React from "react";
import ReactWordcloud from "react-wordcloud";
import { Resizable } from "re-resizable";

const resizeStyle = {
  display: "flex",
  alignItems: "stretch",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0"
};

const options = {
  colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
  enableTooltip: true,
  deterministic: false,
  fontFamily: "impact",
  fontSizes: [5, 60],
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 1,
  rotations: 3,
  rotationAngles: [0, 90],
  scale: "sqrt",
  spiral: "archimedean",
  transitionDuration: 1000
};

const WordCloud = props => {
  const { words } = props;

  const wordsAndTotals = words.reduce((acc, val) => {
    if (val.length > 3) {
      acc[val] ? acc[val]++ : (acc[val] = 1);
    }
    return acc;
  }, {});

  const formattedWords = [];

  for (const word in wordsAndTotals) {
    if (wordsAndTotals[word] > 1) {
      formattedWords.push({
        text: word,
        value: wordsAndTotals[word]
      });
    }
  }

  return (
    <Resizable
      defaultSize={{
        width: 600,
        height: 300
      }}
      style={resizeStyle}
    >
      <div style={{ width: "100%", height: "100%" }}>
        <ReactWordcloud options={options} words={formattedWords} />
      </div>
    </Resizable>
  );
};

export default WordCloud;
