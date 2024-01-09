/* eslint-disable react/jsx-key */
import { useState } from "react";
import "./Accordian.css";
import data from "./data";

export default function Accourdian() {
  const [multiSelected, setMultiSelected] = useState([]);

  function handleMultiSelection(getCurrentId) {
    let copyMultiSelect = [...multiSelected];
    const findIndexOfCurrentId = copyMultiSelect.indexOf(getCurrentId);

    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) copyMultiSelect.push(getCurrentId);
    else copyMultiSelect.splice(findIndexOfCurrentId, 1);
    setMultiSelected(copyMultiSelect);
  }

  console.log(multiSelected);

  return (
    <div className="acc-wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={() => handleMultiSelection(dataItem.id)}
                className="title"
              >
                <h3>{dataItem.question}</h3>
                {multiSelected.indexOf(dataItem.id) !== -1 ? (
                  <button>-</button>
                ) : (
                  <button>+</button>
                )}
              </div>
              {multiSelected.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div> No Data Found! </div>
        )}
      </div>
    </div>
  );
}
