import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const CapitalLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  // Mark function as async
  const NewsUpdates = async () => {
    props.setprogress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=afe3116eb0a246e09417545c6408f5cf&page=${page}&pageSize=${props.pageSize}`;

    setLoading(true);
    const data = await fetch(url);
    props.setprogress(30);
    const parsedata = await data.json();
    props.setprogress(70);

    setArticles(parsedata.articles);
    setTotalResults(parsedata.totalResults);
    setLoading(false);
    props.setprogress(100);
  };

  useEffect(() => {
    document.title = `${CapitalLetter(props.category)} - MonkeyNews`;
    NewsUpdates();
  }, [])
  const fetchMoreData = async () => {
    const nextPage = page + 1;
    setPage(nextPage);

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=afe3116eb0a246e09417545c6408f5cf&page=${nextPage}&pageSize=${props.pageSize}`;

    const data = await fetch(url);
    const parsedata = await data.json();

    setArticles(articles.concat(parsedata.articles));
    setTotalResults(parsedata.totalResults);
  };

  return (
    <>
      <div className="text-center mt-5">
        <h1 className="mb-3">MonkeyNews - {CapitalLetter(props.category)} Headlines</h1>
      </div>

      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={loading && <Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  desc={element.description}
                  urlToImage={element.urlToImage}
                  urlnews={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

// Default props
News.defaultProps = {
  country: "us",
  pageSize: 8,
  category: "general",
};

// PropTypes validation
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;



