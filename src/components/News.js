import React, { Component } from 'react';
// import Article from './Article'
import '../styles/News.css'

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []

        }
    }


    componentDidMount = () => {
        var today = new Date();
        var day = today.getDate();
        var month = today.getMonth() + 1;
        var year = today.getFullYear();

        let todaysDate = year + "-" + month + "-" + day

        fetch(`https://newsapi.org/v2/everything?q=liverpool-fc&from=2018-11-29&to=${todaysDate}&sortBy=popularity&language=en`, { headers: { "X-Api-Key": process.env.REACT_APP_NEWS_API_KEY } })
            .then((response) => response.json())
            .then(data => {

                this.setState({ news: data })
                console.log(this.state.news)
            })
    }

    onClick = (key) => {
        let article = this.state.news
        if (article.articles[key].show) {
            article.articles[key].show = false
        } else {
            article.articles[key].show = true

        }
        this.setState({ news: article })
    }

    stringStripper = (string) => {
        console.log("this is string---", string)
        console.log("this is string.substring(5)---", string.substring(8))

        let somestring = string.substring(8)
        return somestring
    }

    render() {
        if (this.state.news.articles) {
            return (
                <div className="News_container">
                    <div className="News_title">News</div>
                    {this.state.news.articles.map((article, key) => {
                        if (article.show) {
                            return <div onClick={() => this.onClick(key)} key={key}>
                                <div className="News_article">{article.title}</div>
                                <div >{article.description}</div>
                                <a href={"//" + this.stringStripper(article.url)}>Full Article</a>
                            </div>

                        } else {
                            return <div onClick={() => this.onClick(key)} key={key} className="News_article">{article.title}</div>
                        }
                    })
                    }
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }

    }
}

export default News;