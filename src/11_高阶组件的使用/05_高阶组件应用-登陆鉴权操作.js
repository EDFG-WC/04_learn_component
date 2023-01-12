import React, {PureComponent} from 'react';

// CartPage需要进行鉴权. 很多组件都要鉴权, 我们把这个功能做到高阶组件里
function withAuth(WrappedComponent) {
  const NewCpn = (props) => {
    const { isLogin } = props;
    if (isLogin) {
      return <WrappedComponent {...props} />;
    } else {
      return <LoginPage />;
    }
  };

  NewCpn.displayName = 'AuthCpn';

  return NewCpn;
}

class CartPage extends PureComponent {
  render() {
    return <h2>Cart Page</h2>;
  }
}

class LoginPage extends PureComponent {
  render() {
    return <h2>Login Page</h2>;
  }
}

const AuthCart = withAuth(CartPage);

class App extends PureComponent {
  render() {
    return (
      <div>
        <AuthCart isLogin={false} />
      </div>
    );
  }
}

export default App;
