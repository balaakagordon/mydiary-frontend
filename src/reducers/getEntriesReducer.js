import {
    GET_ENTRIES_REQUEST,
    GET_ENTRIES_SUCCESS,
    GET_ENTRIES_FAILURE
} from '../actions/types';
import initialState from './initialState';

export default function (state = initialState.getEntries, action) {
  switch (action.type) {
    case GET_ENTRIES_REQUEST:
      return {
        ...state,
        status: "loading",
        loading: true,
      };

    case GET_ENTRIES_FAILURE:
      return {
        ...state,
        loading: false,
        message: `Unable to load entries`,
        errors: action.payload.data,
        status: action.payload.status,
      };

    case GET_ENTRIES_SUCCESS:
      return {
        ...state,
        entriesData: {
            entries: action.payload.data.data,
            total: action.payload.data.total,
            currentPage: action.payload.data.current_page,
            from: action.payload.data.from,
            to: action.payload.data.to,
            lastPage: action.payload.data.last_page,
            perPage: action.payload.data.per_page,
            firstPageUrl: action.payload.data.first_page_url,
            lastPageUrl: action.payload.data.last_page_url,
            prevPageUrl: action.payload.data.prev_page_url,
            nextPageUrl: action.payload.data.next_page_url
        },
        loading: false,
        status: action.payload.status,
        message: action.payload.message
      };

    default:
      return state;
  }
}
