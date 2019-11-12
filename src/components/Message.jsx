import React from "react";
import PropTypes from "prop-types";

function Message(props) {
  return (
    
    <div className="">
      <div className="row">
      
        <style jsx>{`
            div {
              margin: 0 auto 0 auto;
            }
            img {
              width: 90%;
              background-color: burlywood;
            }
            hr {
              border: 0;
              clear:both;
              display:block;
              width: 96%;               
              background-color:#333;
              height: 1px;
            }
          `}</style>
        
        <div className="col-md-3"><img src={props.image}></img></div>
        <div className="col-md-9">
          <h3>{props.name}</h3>
          <p>{props.msg}</p>
        </div>
        <hr />
      </div>
    </div>
  );
}

Message.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  msg: PropTypes.string
};

export default Message;