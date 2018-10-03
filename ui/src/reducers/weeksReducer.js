/**
 * Reducer for the weeks state.
 * 
 * weeks[] is an array of week objects:
 * - week
 *   - nr       The week number of the year (1-52)
 *   - year     The year in 4 digits (f.ex. 2019)
 */
const weeksReducer = (state = [], action) => {
    switch (action.type) {
        case 'WEEK_FILTER':
            state = action.filter;
            break;
        default:
            return state;
    }

    return state;
}

export default weeksReducer;