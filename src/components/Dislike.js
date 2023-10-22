import React from "react";
import { useContext, useState } from "react";
import { disl, gall } from "../App";
export default function Dislike() {
  const { image, setImage } = useContext(gall);
  const handleRemove = (index1) => {
    const obj = image.find((_, idx) => idx === index1);
    console.log(obj);
    obj.isDisabled = !obj.isDisabled;
    const arr = [...image];
    setImage(arr);
    arr.splice(index1, 1, arr);
    setImage(arr);
  };
  return (
    <>
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          rowGap: "5rem",
        }}
      >
        {image.map((index, item) => {
          return index.isDisabled ? (
            <div>
              <div className="card" style={{ width: "15rem" }}>
                <div style={{ display: "flex" }}>
                  <div>
                    <img
                      className="card-img-top"
                      src={index.download_url}
                      alt="Card image cap"
                    />
                    <h5 style={{ textAlign: "center" }} className="card-title">
                      {index.author}
                    </h5>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <button
                        style={{ backgroundColor: "red" }}
                        onClick={() => handleRemove(item)}
                        type="button"
                        class="btn btn-dark"
                      >
                        <i class="fa fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null;
        })}
      </div>
    </>
  );
}
