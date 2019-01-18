import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabContainer = styled.div`
display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: ${props => (props.selectedTab === props.tab ? '#333' : '#fff')};
  background-color: ${props =>
    props.selectedTab === props.tab ? '#fff' : '#333'};
  border: ${props =>
    props.selectedTab === props.tab ? '2px solid #333' : 'none'}
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;

  :hover {
  text-decoration: underline;
}


`;

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <TabContainer
      selectedTab={props.selectedTab}
      tab={props.tab}
      onClick={() => {
        props.selectTabHandler(props.tab);
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
      }}
    >
      {props.tab.toUpperCase()}
    </TabContainer>
  );
};

Tab.propTypes = {
  tab: PropTypes.string,
  tabs: PropTypes.array.required,
  selectedTab: PropTypes.string.required,
  selectTabHandler: PropTypes.func.required
};

// Make sure you include PropTypes on your props

export default Tab;
