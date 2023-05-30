import { useState } from "react";
import styled from "styled-components";

const news = () => {    
    return (
        <>
            <HeaderElement>

            </HeaderElement>
            <News_Page>
                <div className="title">
                    ニュース
                </div>

                <div className="newspage">
                function TabMenu({ tabs, activeTab, onChange }) {
    return (
    <ul>
      {tabs.map((tab) => (
        <li
          key={tab}
          className={tab === activeTab ? "active" : ""}
          onClick={() => onChange(tab)}
        >
          {tab}
        </li>
      ))}
    </ul>
  );
}

                </div>
            </News_Page>
        </>
    )

}

export default news;

const HeaderElement = styled.header`
    width: 100%;
    height: 92px;
    background-color: #36375F;
    margin-bottom: 100px;
`;

const News_Page = styled.div`
    width: 100%;
    height: calc(100vh - 300px);
    background-color: #36375F;
    border-radius: 30px 30px 0 0;
    .title {
        font-size: 50px;
        padding: 10px;
        text-align: center;
        color: #fff;
    }
    .newspage{
        border: #666666;
        height: 300px;
        width: 100%;
        padding: 10px;
    }
`;