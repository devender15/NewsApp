import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props)=>{

  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [total_articles, settotal_articles] = useState(0);

 
  const capitalize = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     articles: [],
  //     loading: false,
  //     page: 1,
  //     total_articles: 0
  //   }
  //   // // changing the title of the page according to category
  // }

 // function to fetch data as required 
  const update_news = async()=>{
    
    document.title = `${capitalize(props.category)} | NewsMonkey`;

    props.set_prog(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api_key}&page=${page}&pageSize=${props.pageSize}`;

    setloading(true); // making visible the loading spinner
    let data = await fetch(url);
    props.set_prog(30);
    let parsed_data = await data.json();
    props.set_prog(70);
    setarticles(parsed_data.articles);
    settotal_articles(parsed_data.totalResults);
    setloading(false);
    props.set_prog(100);
  }

  useEffect(() => {
    update_news();
    // eslint-disable-next-line
  }, [])
  

  // handle_prev_click = async ()=>{

  //   this.setState({page: this.state.page - 1})
  //   this.update_news();

  // }

  // handle_next_click = async ()=>{ 

  //   this.setState({page: this.state.page + 1})
  //   this.update_news();

  // }

   const fetch_more = async ()=>{
     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api_key}&page=${page+1}&pageSize=${props.pageSize}`;

     setpage(page + 1);

    let data = await fetch(url);
    let parsed_data = await data.json();

    setarticles(articles.concat(parsed_data.articles));
    settotal_articles(parsed_data.totalResults)
  }

    return (
      <>
        <h1 className='text-center' style={{margin: '35px 0px', marginTop: '90px'}}>NewsMonkey - Top Headlines</h1>

        {loading && <Spinner/>}

        <InfiniteScroll dataLength={articles.length} next={fetch_more} hasMore={articles.length !== total_articles} loader={<Spinner/>}>
        <div className='container my-3'>
            <div className="row my-3">
              {articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title} description={element.description} image_url={element.urlToImage} news_url={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
              </div>
              })}
            </div>
        </div>
        </InfiniteScroll>

          {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-success" onClick={this.handle_prev_click}>&#8592; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.total_articles/this.props.pageSize)} type="button" className="btn btn-success" onClick={this.handle_next_click}>Next &#8594;</button>
          </div> */}
    </>
    )
}

// setting prop types and default props
News.defaultProps = {
  country: 'in',
  pageSize: 5,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News