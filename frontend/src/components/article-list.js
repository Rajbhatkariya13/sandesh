import { Article } from "./article"
import Header from "./header"
import React from 'react';

export const ArticleList = ()=>{
    const [articles,setArticles] = React.useState([])
    React.useEffect(()=>{
        getArticles().then((res)=>{
            setArticles(res.articleList);
        },(err)=>{
            alert(err);
        });
    },[])

    const getArticles = (obj) => {
        var promise = new Promise((resolve, reject) => {
          fetch("/getAllArticles")
            .then((res) => res.json())
            .then((data) => resolve(data))
            .catch((err) => reject(err));
        });
        return promise;
      };

    return (
        <>
        <Header />
        <div className="p-32 px-44 bg-slate-200">
            <div className="text-4xl font-semibold">
                List of Posts...
            </div>
            {
                articles.map((a,idx)=>{
                    return(
                        <Article {...a} key={idx} />
                    )
                })
            }
        </div>
        </>
    )
}