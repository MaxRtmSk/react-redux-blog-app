import img from "../img/project/MemoryGame.png"
import img_todo from "../img/project/todolist.png"
import img_travel from "../img/project/travelApp.png"

let initialState = {
  project: [
    {
      name: "Memory Game",
      src: img,
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. impedit similique laudantium earum eaque? Natus maiores necessitatibus aperiam sint.",
      tags: ['react', 'typescript', 'node', 'react-routing', 'react-spring'],
      link: {
        repository: "https://github.com/ratomsky/react-game/tree/react-game",
        deployed: "https://ratomsky.github.io/react-game/"
      }
    },
    {
      name: "Travel App",
      src: img_travel,
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus maiores necessitatibus aperiam sint.",
      tags: ['react', 'typescript', 'node', 'react-routing', 'react-spring'],
      link: {
        repository: "https://github.com/spytni1212/travel-app",
        deployed: "https://travel-app-dreamteam.netlify.app/"
      }
    },
    {
      name: "Todo List",
      src: img_todo,
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus maiores necessitatibus aperiam sint.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus maiores necessitatibus aperiam sint.",
      tags: ['react', 'typescript', 'node', 'react-routing', 'react-spring'],
      link: {
        repository: "https://github.com/ratomsky/react-game/tree/react-game",
        deployed: "https://ratomsky.github.io/ToDoList/"
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
