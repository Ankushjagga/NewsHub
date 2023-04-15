import React, { useState  } from "react";
import Header from "./Components/Header";
import Newslist from "./Components/News-list";
import axios from "axios";
import "./App.css";
import Footer from "./Components/footer/Footer";
import { useEffect } from "react";
import RingLoader from "react-spinners/RingLoader";
const API_KEY2 = "2a913bc4b17b5bc5b499bf13d4caabbb";
const override  = {
  display: "block",
  margin: "20rem auto",
  borderColor: "red",
};
function App() {
  const [newsList, updatenewsList] = useState([]);
  const [timeoutid, settimeoutid] = useState();
  const [TechNews, setTechNews] = useState([]);
  const [loading, setLoading] = useState(false);


  const fetchNews = async (searchString) => {
    setLoading(true);
    const response = await axios.get(
      `https://gnews.io/api/v4/search?q=${searchString}&apikey=${API_KEY2}`
    );
    updatenewsList(response.data.articles);
    console.log(response.data.articles);
    setLoading(false);

  };
  const Technews = async () => {
    setLoading(true);

    const response = await axios.get(
      `https://gnews.io/api/v4/search?q=technology&apikey=${API_KEY2}`

    );
    setTechNews(response.data.articles);
    console.log(response.data.articles);
    setLoading(false);

  };

  const onTextChange = (event) => {
    clearTimeout(timeoutid);
    const timeout = setTimeout(() => {
      fetchNews(event.target.value);
      console.log(event.target.value)
    }, 500);
    settimeoutid(timeout);
  };

  useEffect(() => {
    Technews();
  }, []);

  return (
    <>
      <Header onTextChange={onTextChange} />
      <div className="row_posters">
        {!loading ? newsList?.length
          ? newsList.map((obj, id) => (
              <div key={id}>
                <Newslist news={obj} />
              </div>
            ))
          : TechNews.map((obj, id) => <Newslist key={id} news={obj} />):    <RingLoader
          color={"#ffff"}
          loading={loading}
          size={150}
          height={250}
          aria-label="Loading Spinner"
          data-testid="loader"
          cssOverride={override}
        />}
      </div>
      <Footer />
    </>
  );
}

export default App;
