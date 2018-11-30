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
        fetch("https://newsapi.org/v2/everything?q=liverpool-fc&from=2018-11-29&to=2018-11-29&sortBy=popularity&language=en", { headers: { "X-Api-Key": process.env.REACT_APP_NEWS_API_KEY } })
            .then((response) => response.json())
            .then(data => {
                this.setState({ news: data })
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