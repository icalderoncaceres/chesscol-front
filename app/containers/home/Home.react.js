/* dependecies */
import React from 'react';
import { connect } from 'react-redux';
import { authFail } from '../../actions/session/SessionActions';
import { Link } from 'react-router-dom';
import Nav from '../../components/layout/Nav.react';
import Content from '../../components/layout/Content.react';
/* class */
class HomeContainer extends React.Component {
  componentWillMount() {
    // alert('Private home is at: ' + this.props.location.pathname)
  }

  render() {
    return (<div>
        <Nav />
        <Content />
      </div>
    );
  }
}
//export default connect(null, {logout: authFail})(HomeContainer);
export default HomeContainer;
