import "./App.css";
import { useState, useEffect } from "react";
import { createContext } from "react";
import Navbar from "./components/Navbar";
import Like from "./components/Like";
import Dislike from "./components/Dislike";
import { Routes, Route } from "react-router-dom";
const gall = createContext();
const disl = createContext();
function App() {
  const [image, setImage] = useState([]);
  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then((response) => response.json())
      .then((json) =>
        setImage(
          json.map((item) => ({ ...item, isLiked: false, isDisabled: false }))
        )
      );
  }, []);
  const handleLike = (index) => {
    const obj = image.find((_, idx) => idx === index);
    console.log(obj);
    obj.isLiked = !obj.isLiked;
    const arr = [...image];
    arr.splice(index, 1, obj);
    setImage(arr);
  };
  const handleDislike = (index1) => {
    const obj1 = image.find((_, idx1) => idx1 === index1);
    console.log(obj1);
    obj1.isDisabled = !obj1.isDisabled;
    const arr1 = [...image];
    arr1.splice(index1, 1, obj1);
    setImage(arr1);
  };
  return (
    <>
      <gall.Provider value={{ image, setImage }}>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div
                style={{
                  marginTop: "2rem",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-evenly",
                  rowGap: "5rem",
                }}
              >
                {image.map((i, index) => {
                  return image.isLiked || image.isDisabled ? null : (
                    <div>
                      <div className="card" style={{ width: "15rem" }}>
                        <div style={{ display: "flex" }}>
                          <div>
                            <img
                              className="card-img-top"
                              src={i.download_url}
                              alt="Card image cap"
                            />
                            <h5
                              style={{ textAlign: "center" }}
                              className="card-title"
                            >
                              {i.author}
                            </h5>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <button
                                onClick={() => handleLike(index)}
                                style={{
                                  backgroundColor: "green",
                                  marginBottom: "1rem",
                                }}
                                type="button"
                                class="btn btn-dark"
                              >
                                <i class="fa fa-regular fa-heart"></i>
                              </button>
                              <button
                                style={{
                                  backgroundColor: "red",
                                  marginLeft: "1rem",
                                  marginBottom: "1rem",
                                }}
                                onClick={() => handleDislike(index)}
                                type="button"
                                className="btn btn-dark "
                              >
                                <i class="fa fa-thumbs-down"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            }
          />
          <Route path="/Like" element={<Like />} />
          <Route path="/Dislike" element={<Dislike />} />
          <Route path="/" element={<App />} />
        </Routes>
      </gall.Provider>
    </>
  );
}
export default App;
export { gall, disl };
