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
            tabTitle: 'エンタメ',
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
            <div className='tab-wrap'>
                <div className='tabs'>
                    <div className='title'>
                        ニュース
                    </div>
                    {tabs.map((tab, i) =>
                        <butto className='btn' key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</butto>
                    )}
                </div>
                {news && news.map((news, i) => {
                    return(
                        <div key={i}>
                            <div className='news'>
                            <div className='newsTitle'>
                                <div className='newsTitleText'>
                                   {news.title}
                                </div>
                            </div>
                            <div className='newsContent'>
                                <div className='newsImg'>
                                    <img src={news.urlToImage || '../../../img/jimin.jpg'} alt="" />
                                </div>
                                
                                <div className='newsText'>{news.title}</div>
                                
                            </div>
                            </div>
                        </div>
                    )
                })}
            </div>
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
        max-width: calc(100vw - 10px*2);
	    width: 600px;
        margin: 2%;
        font-weight: 700;
        .tab-wrap{
            /* width: 1000px; */
            .tabs{
                margin: 20px 0 0 -2%;
                padding-top: 10px 0;
                background-color: #36375F;
                width: 105.4%;
                height: 90px;
                border-radius: 35px 35px 0px 0px;
                .title{
                    text-align: center;
                    font-size: 20px;
                    color:#fff;
                    margin: 0 0 5px 0;
                    padding-top: 15px;
                }
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

            .news{
                max-width: calc(100vw - 10px*2);
	            width: 600px;
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
                    display: flex;
                    justify-content: center;
                    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
                    overflow: hidden;
                    overflow-x: auto;
                    position: relative;
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
        }
    }

`
