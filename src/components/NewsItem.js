import React from 'react'

const NewsItem = (props)=> {

    let {title, description, image_url, news_url, author, date, source} = props;

    return (
      <div className='my-3'>
        <div className="card">
          <img src={image_url} className="card-img-top" alt='news'/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className='card-text'><small className='text-muted'>By <b>{!author?"Unknown":author}</b> on {new Date(date).toGMTString()}</small></p>
            <a rel='noreferrer' href={news_url} target="_blank" className="btn btn-primary">Read More</a>
            <span class="badge bg-warning text-dark" style={{marginLeft: "30px", padding: "10px 12px"}}>{source}</span>
          </div>
        </div>
      </div>
    )
}

export default NewsItem