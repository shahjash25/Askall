import React from "react";
import "./css/WidgetContent.css"
function WidgetContent() {
  return (
    <div className=" widget__contents">
      <div className="widget__content">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ0MESlnzRysQXkEd6ijD40F3dbsGjdpM3zg&usqp=CAU"
          alt="hello"
        />
        <div className="widget__contentTitle">
          <h5>Mobile App Programmer</h5>
          <p>The best Mobile App Development Company</p>
        </div>
      </div>
    </div>
  );
}

export default WidgetContent;
