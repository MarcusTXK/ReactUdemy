import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    //load up client portion of the library
    //2nd arg is a callback function, called when the  library has sucessfully been loaded up into the api
    window.gapi.load("client:auth2", () => {
      //initialize our application with the client id that we had generated
      //scopes we want to fetch when user goes through OAuth process
      window.gapi.client
        .init({
          clientId:
            "783408617905-3h2a40arra0plp74lm17hkblkskc5239.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          //update state, cause component to rerender and print auth status
          //pass in user's current login status to redux store
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  //callback function set up as an arrow functions so that its context is bound to my component.
  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  //helper methods not very necessary, but increase readability
  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  //helper method to render the button
  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In With Google
        </button>
      );
    }
  }

  render() {
    //forgot to put bracket
    //got error: index.js:1 Warning: Functions are not valid as a React child
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
