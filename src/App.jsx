import { useState } from "react";
import "./App.css";
const tabData = [
  {
    id: 1,
    title: "ITEM 1",
    content: "Authorize the user data ✅",
  },
  {
    id: 2,
    title: "ITEM 2",
    content: "Redirect user to cart page 🛒",
  },
  {
    id: 3,
    title: "ITEM 3",
    content: "Create new payment for the user 💰",
  },
];

function App() {
  const [activeTab, setActiveTab] = useState(1);
  const [isShow, setIsShow] = useState(true);
  // const handelShow = () => {};
  const handelActiveTab = (id) => {
    setActiveTab(id);
  };
  return (
    <>
      <button
        className="show"
        onClick={() => {
          setIsShow(!isShow);
        }}
      >
        {isShow ? "Hide" : "Show"}
      </button>
      
      {isShow ? <div className="tab">
        <div className="tab__header">
          {tabData.map((tab) => {
            return (
              <button
                key={tab.id}
                onClick={() => handelActiveTab(tab.id)}
                className={activeTab === tab.id ? "active" : ""}
              >
                <span>{tab.title}</span>
                <span className="tab-indicator"></span>
              </button>
            );
          })}
        </div>
        <div className="tab__content">{tabData[activeTab - 1].content}</div>
      </div> : <h2>click on show button</h2>}
    </>
  );
}

export default App;
