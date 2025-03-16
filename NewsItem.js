import React from 'react'
 
const NewsItem=(props)=> {
    let { title, desc, urlToImage, urlnews, author, date, source } = props;
    
    return (
      <div className="card mt-4">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{left:'90%', zIndex:'1'}}>
    {source}
  </span>
        <img src={!urlToImage?"https://www.hollywoodreporter.com/wp-content/uploads/2024/08/It-Ends-With-Us-publicity-H-2024-1.jpg?w=1296&h=730&crop=1":urlToImage} className="card-img-top" alt="News Thumbnail" />
        <div className="card-body">
          <h5 className="card-title">{title ? title.slice(0, 44) : "No Title"}...</h5>
          <p className="card-text">
            {desc ? desc.slice(0, 88) : "A New York court has also set a March 2026 trial date and intends to consolidate the crisscrossing lawsuits between Lively and her director and co-star, who is suing both Lively and husband Ryan Reynolds."}...
          </p>
          <p className="card-text"><small className="text-body-secondary">By{author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
          <a rel="noreferrer" href={urlnews} target="_blank" className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
    );
}
export default NewsItem;
