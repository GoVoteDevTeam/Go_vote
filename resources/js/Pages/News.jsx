import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VoteNotice from '../components/VoteNotice';
import axios from "axios";

const News = () => {
    const [news, setNews] = useState({});
    const [currentTab, setCurrentTab] = useState('business');
    const tabs = [
        {
            id: "business",
            tabTitle: 'ビジネス',
        },
        {
            id: "entertainment",
            tabTitle: 'エンタメ',
        },
        {
            id: "health",
            tabTitle: '健康',
        },
        {
            id: "science",
            tabTitle: '科学',
        },
        {
            id: "sports",
            tabTitle: 'スポーツ',
        },
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    };

    useEffect(() => {
        const fetchData = async () => {
            if (!news[currentTab]) {
                const newsContents = await axios.get(`https://newsapi.org/v2/top-headlines?country=jp&category=${currentTab}&apiKey=${import.meta.env.VITE_NEWS_KEY}`);
                setNews(prevNews => ({
                    ...prevNews,
                    [currentTab]: newsContents.data.articles,
                }));
            }
        };

        fetchData();
    }, [currentTab]);

    return (
        <>
            <NewsPage>
                <VoteNotice />
                <div className="news-container">
                    <div className='tab-wrap'>
                        <div className='tabs'>
                            <div className='title'>
                                ニュース
                            </div>
                            <div className="button-element">
                                {tabs.map((tab) => (
                                    <button
                                        className='btn'
                                        key={tab.id}
                                        id={tab.id}
                                        disabled={currentTab === tab.id}
                                        onClick={handleTabClick}
                                    >
                                        {tab.tabTitle}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className='newsBlock'>
                            {news[currentTab] && news[currentTab].map((newsItem, i) => (
                                <div key={i}>
                                    <div className='news'>
                                        <div className='newsTitle'>
                                            <div className='newsTitleText'>
                                                {newsItem.title}
                                            </div>
                                        </div>
                                        <div className='newsContent'>
                                            <div className='newsImg'>
                                                <img src={newsItem.urlToImage || '../../../img/Noimg.jpg'} alt="" />
                                            </div>
                                            <div className='newsText'>{newsItem.description}<a href={newsItem.url}>詳細記事はこちら</a></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </NewsPage>
        </>
    );
};

export default News;

const NewsPage = styled.div`
    background-color: #BDC3CD;
    width: 100%;
    height: calc(100vh);
    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-thumb {
        background: rgb(232, 232, 232, 0.5);
        border-radius: 10px;
    }
    .news-container {
        max-width: calc(100vw - 10px*2);
        max-width: 600px;
        width: 90%;
        margin: 2% auto;
        font-weight: 700;
        .tab-wrap{
            /* width: 1000px; */
            .tabs{
                margin: 30px 0 0 0;
                background-color: #36375F;
                width: 100%;
                height: 90px;
                border-radius: 35px 35px 0px 0px;
                .title{
                    text-align: center;
                    font-size: 20px;
                    color:#fff;
                    margin: 0 0 5px 0;
                    padding-top: 15px;
                }
                .button-element {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .btn{
                        background-color: transparent;
                        color:#fff;
                        margin:0 0px 0 13px;
                        border: none;
                        cursor: pointer;
                        outline: none;
                        padding: 0;
                        appearance: none;
                        border-right: 2px solid #fff; /* 縦線のスタイルを指定 */
                        padding-right: 10px; /* ボタンと縦線の間のスペースを指定 */
                    }
                    .btn:last-child {
                        border-right: none; /* 最後のボタンの縦線を削除 */
                    }
                }

            }

            .newsBlock{
                .news{
                    max-width: calc(100vw - 10px*2);
                    max-width: 600px;
                    .newsTitle{
                        background-color: #D9D9D9;
                        margin-top: 25px;
                        width: 100%;
                        height: 20%;
                        .newsTitleText{
                        padding: 3px 10px;
                        }
                    }
                    .newsContent{
                        background-color: #f5f5f5;
                        width: 100%;
                        height: 20%;
                        /* display: flex; */
                        justify-content: center;
                        box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
                        overflow: hidden;
                        overflow-x: auto;
                        position: relative;
                        .newsImg{
                            margin: 0 auto;
                            max-width: 80%;
                            min-width: 200px;
                            width: 300px;
                            img {
                                width: 100%;
                                margin: 10px 10px 5px;
                                /* aspect-ratio: 1/1; */
                                min-width: 100px;
                            }
                        }
                        .newsText{
                            margin: 10px 10px 5px 20px;
                        }
                    }
                }

                /* レスポンシブ対応の追加 */
                @media screen and (min-width: 1024px) {
                /* display: grid; */
                grid-template-columns: repeat(3, 1fr);
                column-gap: 20px;
                }
            }
        } 
    }
    

    .container {
    }

`
