import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "./css/index.css";
import Main from "./Main";
import axios from "axios";

function Index() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function getQuestion() {
      try{
        await axios.get("/api/question").then((res) => {
          setQuestions(res.data.reverse());
          // console.log(res.data)
        });
      }
      catch(err){
        console.error('getquestion error:', err)
      }
      }
  
    getQuestion();
  }, [questions]);
  return (
    <div className="stack-index">
      <div className="stack-index-content">
        {/* <Sidebar /> */}
        <Main questions={questions} />
      </div>
    </div>
  );
}

export default Index;
