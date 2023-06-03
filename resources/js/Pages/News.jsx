import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import TmpFooter from '../components/TmpFooter';
import VoteNotice from '../components/VoteNotice';
import { useEffect } from "react";
import axios from "axios";

const News = () => {

    const [news, setNews] = useState();
    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Tab 1',
            title: 'Title 1',
            content: 'Las tabs se generan automáticamente a partir de un array de objetos, el cual tiene las propiedades: id, tabTitle, title y content.'
        },
        {
            id: 2,
            tabTitle: 'Tab 2',
            title: 'Title 2',
            content: 'Contenido de tab 2.'
        },
        {
            id: 3,
            tabTitle: 'Tab 3',
            title: 'Title 3',
            content: 'Contenido de tab 3.'
        },
        {
            id: 4,
            tabTitle: 'Tab 4',
            title: 'Title 4',
            content: 'Contenido de tab 4.'
        }
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    useEffect(() => {
        const fetchData = async () => {
            const newsContents = await axios.get(`https://newsapi.org/v2/top-headlines?country=jp&apiKey=${import.meta.env.VITE_NEWS_KEY}`);
            setNews(newsContents.data.articles);
            console.log(news);
        }
        fetchData();
	}, []);

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
                <div className='content'>
                    {tabs.map((tab, i) =>
                        <div key={i}>
                            {currentTab === `${tab.id}` && <div><p className='title'>{tab.title}</p><p>{tab.content}</p></div>}
                        </div>
                    )}
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
        width: 100%;
    }
    
`