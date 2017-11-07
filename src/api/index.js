const formatJson = response => response.json();

module.exports = {
  fetchTopicsP() {
    return fetch('https://cnodejs.org/api/v1/topics').then(formatJson);
  },

  loginP(name, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.4) {
          resolve({ token: name + password });
        } else {
          reject(new Error('login failed'));
        }
      }, 2000);
    });
  },

  logoutP(name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.4) {
          resolve();
        } else {
          reject(new Error('logout failed'));
        }
      }, 2000);
    });
  }
}