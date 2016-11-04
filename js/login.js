console.log('Hello world!');

let login = (username, password) => {
  if(username !== 'admin' || password !== 'admin') {
    console.log('Login Failure.');
  }
};

login('admin', 'admin1');
