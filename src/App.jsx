
import React, {Component} from 'react';
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import RoutesLink from './router/RoutesLink';


class App extends Component {
  constructor(props) {
      super(props);
  }

  static get propTypes() {
      return {
          history: PropTypes.object.isRequired,
          store: PropTypes.object.isRequired,
      };
  }

  render() {
      return (
        <Provider store={this.props.store}>
            <PersistGate loading={null} persistor={this.props.persistor}>
                <React.Fragment>
                    <div className='App'>
                        <RoutesLink/>
                    </div>
                </React.Fragment>
            </PersistGate>
        </Provider>
      );
  }
}

export default (App);

