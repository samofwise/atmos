// https://johnnyreilly.com/2021/01/02/create-react-app-with-ts-loader-and-craco



module.exports = {
  eslint: {
    configure:{
      extends:[
        "airbnb",
        "prettier",
        "prettier/react"
      ], 
      plugins: [
        "prettier"
      ],
    }
  },
};

