import React, { Component } from 'react';
import { emojify } from 'react-emojione';
import { connect } from 'react-redux';

const Message = (props) => {
  const { created_at, author, content } = props.message;
  const time = new Date(created_at).toLocaleTimeString();

  return (
    <div className='message-container' >
      <i className="author">
        <span style={{ color: 'red' }}>{author}</span>
        <small>{time}</small>
      </i>
      <p>{emojify(content)}</p>
    </div>
  );
};

// function mapStateToProps(state) {
//   return {
//     // cities: state.cities
//   };
// }

export default (Message);
