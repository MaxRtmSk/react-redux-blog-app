import img from "../img/project/MemoryGame.png"

let initialState = {
  project: [
    {
      name: "Memory Game",
      src: img,
      description: "deploy: Github Page",
      link: {
        repository: "https://github.com/ratomsky/react-game/tree/react-game",
        deployed: "https://ratomsky.github.io/react-game/"
      }
    },
    {
      name: "Memory Game",
      src: img,
      description: "deploy: Github Page",
      link: {
        repository: "https://github.com/ratomsky/react-game/tree/react-game",
        deployed: "https://ratomsky.github.io/react-game/"
      }
    },
    {
      name: "Memory Game",
      src: img,
      description: "deploy: Github Page",
      link: {
        repository: "https://github.com/ratomsky/react-game/tree/react-game",
        deployed: "https://ratomsky.github.io/react-game/"
      }
    },
  ],
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default AppReducer;
