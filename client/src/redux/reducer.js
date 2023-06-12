import {
  DETDOGS,
  FILT_DOGS,
  GETDOGS,
  GET_TEMP,
  ORDER_DOG,
  ORDER_WE,
  SEARCH_DOG,
} from "./actions_type";

const initialState = {
  getDogs: [],
  detDogs: [],
  temperaments: [],
  filterDogs: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GETDOGS:
      return { ...state, getDogs: action.payload, filterDogs: [] };

    case DETDOGS:
      return { ...state, detDogs: action.payload, getDogs: [] };
    case SEARCH_DOG:
      return { ...state, getDogs: action.payload, filterDogs: [] };

    case GET_TEMP:
      return { ...state, temperaments: action.payload };

    case ORDER_DOG:
      const ordDog = [...state.getDogs];
      const ordFilt = [...state.filterDogs];
      return {
        ...state,
        getDogs:
          action.payload === "A"
            ? ordDog.sort((a, b) => a.name.localeCompare(b.name))
            : ordDog.sort((a, b) => b.name.localeCompare(a.name)),
        filterDogs:
          action.payload === "A"
            ? ordFilt.sort((a, b) => a.name.localeCompare(b.name))
            : ordFilt.sort((a, b) => b.name.localeCompare(a.name)),
      };
    case ORDER_WE:
      const weDog = [...state.getDogs];
      const weFilt = [...state.filterDogs];
      return {
        ...state,
        getDogs: weDog.sort((a, b) => {
          const weightA = parseInt(a.weight.split(" - ")[0]);
          const weightB = parseInt(b.weight.split(" - ")[0]);
          return action.payload === "1" ? weightA - weightB : weightB - weightA;
        }),
        filterDogs: weFilt.sort((a, b) => {
          const weightA = parseInt(a.weight?.split(" - ")[0]);
          const weightB = parseInt(b.weight?.split(" - ")[0]);
          return action.payload === "1" ? weightA - weightB : weightB - weightA;
        }),
      };
    case FILT_DOGS:
      const filtDogs = state.getDogs.filter((perro) => {
        const dogtemperament = perro.temperament;
        if (dogtemperament) {
          const temperamentsArray = dogtemperament.split(", ");
          return temperamentsArray.includes(action.payload);
        }
        return false;
      });

      return {
        ...state,
        filterDogs: filtDogs,
      };

    default:
      return { ...state };
  }
};

export default reducer;
