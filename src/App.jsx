import { useState } from 'react'
import './App.css'
const FaqItems = ({question,answer}) => {
const [show,setShow] = useState(false);

const toggleShow = () => {
  setShow(!show);
};
  return(
    <div className={`faq-items ${show ? "active" : ""}`}>
      <div className="faq-item-header" onClick={toggleShow}>{question}</div>
      <div className="faq-item-body">
        <div className="faq-item-body-content">
          {answer}
        </div>
      </div>
    </div>
  )
};
const FaqAccordian = ({data}) =>{
  return(
    <div className="faq-accordian">
      <h2>FAQs:</h2>
 {data.map((item)=>(
  <FaqItems key={item.id}
  question={item.question}
  answer={item.answer}/>
 ))}
    </div>
  )
};

const data = [
  {id:1, question:"What is React?", answer:"In short, React js is a JavaScript library for building performant and user-friendly interfaces. React was released as an open-source project by Facebook in 2013, and it quickly became popular and widely used even by big names like Netflix, Uber, and Airbnb."},
  {id:2, question:"What are the pros of React?", answer:"You already know some React benefits like creating completely custom user interfaces, but the list of its advantages is much longer. Let’s write them down and explain shortly looking from two different perspectives – business owner and developer."},
  {id:3, question:"What are the cons of React?", answer:"React is still a relatively new technology which evolves fast. Therefore, it may be hard for some to keep up with this pace because of new features coming out now and then. And some developers might not like constant changes."},
  {id:4, question:"What can I build with React?", answer:"React.js allows you to build great digital products and interfaces like:Single Web Pages,Static websites,SaaS products,MVPs easy to scale"},
  {id:5, question:"What are React alternatives?", answer:"The main competitors and alternatives of React are other JavaScript libraries with a focus on front-end web and mobile development.These libraries include:InfernoJS,Angular,Preact,Vue.js,Elm,Riot"},
];

function App() {
  

  return (
    <>
      <div className="App">
        <FaqAccordian data={data}/>
      </div>
    </>
  )
}

export default App
