import React from "react";
import { useContext, useState } from "react";
import { gall } from "../App";
export default function Like() {
  const { image, setImage } = useContext(gall);
  const [remove, setRemove] = useState([]);
  const handleRemovelike = (index) => {
    const obj = image.find((_, idx) => idx === index);
    console.log(obj);
    obj.isLiked = !obj.isLiked;
    const arr = [...image];
    arr.splice(index, 1, obj);
    setImage(arr);
  };
  console.log(image);
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
        {image.map((element, index) => {
          return element.isLiked ? (
            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "start",
                rowGap: "0rem",
              }}
            >
              <div className="card" style={{ width: "15rem" }}>
                <div style={{ display: "flex" }}>
                  <div>
                    <img
                      className="card-img-top"
                      src={element.download_url}
                      alt="Card image cap"
                    />

                    <h5 style={{ textAlign: "center" }} className="card-title">
                      {element.author}
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
                        onClick={() => handleRemovelike(index)}
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
