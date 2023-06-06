import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import TmpFooter from '../components/TmpFooter';
import VoteNotice from '../components/VoteNotice';
import { useEffect } from "react";
import axios from "axios";

const News = () => {

    const [news, setNews] = useState();
    const [currentTab, setCurrentTab] = useState('business');
    const tabs = [
        {
            id: "business",
            tabTitle: 'ビジネス',
            title: 'Title 1',
            content: 'Las tabs se generan automáticamente a partir de un array de objetos, el cual tiene las propiedades: id, tabTitle, title y content.'
        },
        {
            id: "entertainment",
            tabTitle: 'エンターテイメント',
            title: 'Title 2',
            content: 'Contenido de tab 2.'
        },
        {
            id: "health",
            tabTitle: '健康',
            title: 'Title 3',
            content: 'Contenido de tab 3.'
        },
        {
            id: "science",
            tabTitle: '科学',
            title: 'Title 4',
            content: 'Contenido de tab 4.'
        },
        {
            id: "sports",
            tabTitle: 'スポーツ',
            title: 'Title 5',
            content: 'Contenido de tab 5.'
        },
        {
            id: "technology",
            tabTitle: 'テクノロジー',
            title: 'Title 6',
            content: 'Contenido de tab 6.'
        }
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    useEffect(() => {
        const fetchData = async () => {
            const newsContents = await axios.get(`https://newsapi.org/v2/top-headlines?country=jp&category=${currentTab}&apiKey=${import.meta.env.VITE_NEWS_KEY}`);
            setNews(newsContents.data.articles);
        }
        fetchData();
        console.log("rerender")
	}, [currentTab]);

    return (
      <>
        <Header />
        <NewsPage>
            <VoteNotice />
            <div className="news-container">
                <div className='tabs'>
                    {tabs.map((tab, i) =>
                        <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                    )}
                </div>
                {news && news.map((news, i) => {
                    return(
                        <div key={i}>
                            <div className='news'>
                            <div className='newsTitle'>{news.title}</div>
                            <div className='newsContent'>
                                <div className='newsImg'>
                                    <img src={news.urlToImage} alt="" />
                                </div>
                                
                                <div className='newsText'>{news.title}</div>
                                
                            </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </NewsPage>
        <TmpFooter />
      </>
    );
}

export default News;

const NewsPage = styled.div`
    background-color: #BDC3CD;
    width: 100%;
    height: calc(100vh - 92px - 80px);
    overflow-y: auto;

    .news-container {
        margin: 5%;
        .newsTitle{
            background-color: #D9D9D9;
            margin-top: 30px;
            width: 100%;
            height: 20%;
        }
        .newsContent{
            background-color: #f5f5f5;
            width: 100%;
            height: 20%;
            display: flex;
            justify-content: center;
            .newsImg{
                width: 30%;
                img {
                    width: 100%;
                    margin: 10px 10px 5px;
                    aspect-ratio: 1/1;
                    min-width: 100px;
                }
            }
            .newsText{
                    margin: 10px 10px 5px 20px;
                }
        }
    }

`
