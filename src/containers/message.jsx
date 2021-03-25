import React, { Component } from 'react';
import { connect } from 'react-redux';

const Message = (props) => {
  return (
    <div className='message' >
      <strong><p>{props.message.author}</p></strong>
      <p>{props.message.content}</p>
    </div>
  );
};

// function mapStateToProps(state) {
//   return {
//     // cities: state.cities
//   };
// }

export default (Message);
