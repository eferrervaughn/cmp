import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/juiceActions';
// import Sauce from '../components/Sauce';
import styled from 'react-emotion';

const StyledButton = styled.button(props => {
    const { hue, faith } = props;

    return [
        `
        background-color: ${hue};
        color: ${faith || 'grey'};
        width: 100px;
        `
    ]
});

export class Juice extends React.Component {
//   ACTION = () => { 
//     this.props.actions.ACTION(ARGS);
//   }

  render() {
    return (
    //   <Sauce
    //     onACTION={this.ACTION}
    //   />
    <div>
    <StyledButton hue="blue" faith="white" onClick={() => this.props.actions.fetchPrayer('1ddqvYHtbhmrRCSQ4K4Y')}>
        Fetch Prayer
    </StyledButton>
    {this.props.fetching ? 'Loading' : ''}
    <br></br>
    <StyledButton hue="lightred" faith="black" onClick={() => this.props.actions.fetchAll('prayers')}>
      Fetch All Prayers
    </StyledButton>
    <br></br>
    <StyledButton hue="darkgreen" faith="white" onClick={() => this.props.actions.deletePrayer('TOXUMkOZnhacVVJpUOYJ')}>
      Delete Prayer
    </StyledButton>
    </div>
    );
  }
}

Juice.propTypes = {
  actions: PropTypes.object.isRequired,
  // app state is required
};

function mapStateToProps(state) {
  return {
    // app state you want to access
    fetching: state.data.prayersLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Juice);