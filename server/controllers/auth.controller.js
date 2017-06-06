
export default function authController(passport) {
  function signup(req, res, next) {
    // use the local-signup stategy
    return passport.authenticate('local-signup', (error, user) => {
      if (error) {
        res.status(400).json({
          message: 'signupFailed',
        });
      } else {
        res.status(200).json({
          user,
        });
      }
    })(req, res, next);
  }

  function isAuthenticated(req, res, next) {
    next();
  }

  function login(req, res, next) {
    next();
  }
  return {
    signup,
    isAuthenticated,
    login,
  };
}
