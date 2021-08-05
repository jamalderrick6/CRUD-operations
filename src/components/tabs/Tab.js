import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
    static propTypes = {
      activeTab: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    };
  
    onClick = () => {
      const { label, onClick } = this.props;
      onClick(label);
    }
  
    render() {
      const {
        onClick,
        props: {
          activeTab,
          label,
        },
      } = this;
  
      let className = `${this.props.identifier}`;
  
      if (activeTab === label) {
        className += ` ${this.props.identifier}--active`;
      }
  
      return (
        <button className={className} onClick={onClick}>
        <span>{label}</span>
    </button>
      );
    }
  }
  
  export default Tab;
