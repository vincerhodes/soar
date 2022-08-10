import React, { Component } from "react";
import { withAuthStore } from "../hooks/useAuthStore";

const clientId =
  "904587428709-aku6rhk3s0l2hqbfk00qte07up5546vd.apps.googleusercontent.com";

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: clientId,
          scope: "email",
          plugin_name: "Jimmy's Streaming Service",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.store.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.store.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.store.isSignedIn === null) {
      return null;
    } else if (this.props.store.isSignedIn) {
      return (
        <div>
          <button className='btn btn-primary' onClick={this.onSignOutClick}>
            <i className='google icon' />
            Sign Out
          </button>
        </div>
      );
    } else if (!this.props.store.isSignedIn) {
      return (
        <button className='btn btn-secondary' onClick={this.onSignInClick}>
          <i className='google icon' />
          Sign In With Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default withAuthStore(GoogleAuth);
