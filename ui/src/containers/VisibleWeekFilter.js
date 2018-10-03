import { connect } from "react-redux";
import { weekFilter } from "../actions/weeksActions";
import WeekFilter from "../components/WeekFilter";



const getWeeks = () => {
    let weeks = [{
        item: "2019",
        filter: [1,2,3,4,5,6,7,8,9,10,11,12]
    }]

    return weeks;
}

// take first item in array as default and return the filter
export const getWeeksFilter = () => {
    let weeks = getWeeks();
    return weeks[0].filter;
}

const mapStateToProps = state => {
    return {
        weeks: getWeeks()
    }
}

const mapDispatchToProps = dispatch => {
    return {
        weekFilter: id => dispatch(weekFilter(id))
    }
}

const VisibleWeekFilter = connect(
    mapStateToProps,
    mapDispatchToProps
)(WeekFilter)

export default VisibleWeekFilter
