import img from "../img/project/MemoryGame.png";
import img_todo from "../img/project/todolist.png";
import img_travel from "../img/project/travelApp.png";
import img_lang from "../img/project/lang.png";

let initialState = {
  project: [
    {
      name: "Lang App",
      src: img_lang,
      description: "Работа в команде. Aдаптив",
      tags: [
        "работа в команде",
        "redux",
        "mongoDB",
        "routing",
        "material ui",
        "react-form",
      ],
      link: {
        repository: "https://github.com/ratomsky/rslang",
        deployed: "https://pengu-english.netlify.app/",
      },
    },

    {
      name: "Travel App",
      src: img_travel,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus maiores necessitatibus aperiam sint.",
      tags: ["работа в команде", "redux", "react-routing", "react-spring"],
      link: {
        repository: "https://github.com/spytni1212/travel-app",
        deployed: "https://travel-app-dreamteam.netlify.app/",
      },
    },
    {
      name: "Memory Game",
      src: img,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. impedit similique laudantium earum eaque? Natus maiores necessitatibus aperiam sint.",
      tags: ["react", "typescript", "redux-thunk"],
      link: {
        repository: "https://github.com/ratomsky/react-game/tree/react-game",
        deployed: "https://ratomsky.github.io/react-game/",
      },
    },
    {
      name: "Todo List",
      src: img_todo,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus maiores necessitatibus aperiam sint.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus maiores necessitatibus aperiam sint.",
      tags: ["react", "typescript"],
      link: {
        repository: "https://github.com/ratomsky/react-game/tree/react-game",
        deployed: "https://ratomsky.github.io/ToDoList/",
      },
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
