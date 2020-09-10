export const SEARCH = 'filmscatalog/search/SEARCH';

const initialState = {
  description: "Batman"
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH: {
      return {
        ...state,
        description: action.description,
      }
    }

    default:
      return state;
  }
};

export const searchSuccess = (description) => ({type: SEARCH, description});

export default search;
