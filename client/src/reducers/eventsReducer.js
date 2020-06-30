import ACTION from '../actions/actionTypes';
import _ from 'lodash';
import moment from "moment";
const initialState = {
    events: [
        {
            eventName: 'Birthday',
            eventTime: moment('11.08.2020','DD.MM.YYYY'),
            reminderTime: moment('10.08.2020','DD.MM.YYYY'),
        },
        {
            eventName: 'Birthday',
            eventTime: moment('10.08.2020','DD.MM.YYYY'),
            reminderTime: moment('09.08.2020','DD.MM.YYYY'),
        },
        {
            eventName: 'sdvsvs',
            eventTime: moment('25.06.2020','DD.MM.YYYY'),
            reminderTime: moment('09.08.2020','DD.MM.YYYY'),
        },
        {
            eventName: 'Birthday',
            eventTime: moment('11.08.2020','DD.MM.YYYY'),
            reminderTime: moment('10.08.2020','DD.MM.YYYY'),
        },
        {
            eventName: 'sdvsvs',
            eventTime: moment('25.06.2020','DD.MM.YYYY'),
            reminderTime: moment('09.08.2020','DD.MM.YYYY'),
        },
    ],
    newEvents: new Map(),
};
export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.CREATE_EVENT: {
            const eventsCreate = _.clone(state.events);
            eventsCreate.push(action.event);
            return {
                ...state,
                events: eventsCreate,
            }
        }
        default:
            return state;
    }
}