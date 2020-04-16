import ACTION from '../actions/actionTypes';
import CONSTANTS from '../constants';
import _ from 'lodash';

const initialState = {
	isFetching: true,
	error: null,
	contests: [],
	customerFilter: CONSTANTS.CONTEST_STATUS_ACTIVE,
	creatorFilter: {
		addedContestTypes: [],
		contestId: '',
		industry: '',
		awardSort: 'asc',
		ownEntries: false
	},
	haveMore: true
};


export default function (state = initialState, action) {
	switch (action.type) {
		case ACTION.GET_CONTESTS_ACTION_REQUEST: {
			return {
				...state,
				isFetching: true,
				error: null,
			}
		}
		case ACTION.GET_CONTESTS_ACTION_SUCCESS: {
			return {
				...state,
				isFetching: false,
				error: null,
				contests: [...action.data.contests],
				haveMore: action.data.haveMore
			}
		}
		case ACTION.GET_CONTESTS_ACTION_ERROR: {
			return {
				...state,
				isFetching: false,
				error: action.error,
				contests: []
			}
		}
		case ACTION.CLEAR_CONTESTS_LIST: {
			return {
				...state,
				error: null,
				contests: []
			}
		}
		case ACTION.SET_NEW_CUSTOMER_FILTER: {
			return {
				...initialState,
				isFetching: false,
				customerFilter: action.filter
			}
		}
		case ACTION.SET_NEW_CREATOR_FILTER: {
			const removeSelectedTypesProperty = ({addedContestTypes, ...rest}) => rest;
			return {
				...initialState,
				isFetching: false,
				creatorFilter: {...state.creatorFilter, ...removeSelectedTypesProperty(action.filter)}
			}
		}
		case ACTION.ADD_CONTEST_TYPE: {
			const {data} = action
			const {creatorFilter: {addedContestTypes}, creatorFilter} = state
			const contestSet = new Set(addedContestTypes)
			contestSet.add(data)
			return {
				...state,
				creatorFilter: {
					...creatorFilter,
					addedContestTypes: [...contestSet],
				}
			}
		}
		case ACTION.REMOVE_CONTEST_TYPE: {
			const {data} = action
			const {creatorFilter: {addedContestTypes}, creatorFilter} = state
			const contestSet = new Set(addedContestTypes)
			contestSet.delete(data)
			return {
				...state,
				creatorFilter: {
					...creatorFilter,
					addedContestTypes: [...contestSet],
				}
			}
		}
		default:
			return state;
	}
}

