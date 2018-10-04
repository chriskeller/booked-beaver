import { connect } from "react-redux";
import { weekFilter } from "../actions/weeksActions";
import WeekFilter from "../components/WeekFilter";



const getWeeks = () => {
    let weeks = [{
        item: "2018",
        filter: ['18-01',
        '18-02',
        '18-03',
        '18-04',
        '18-05',
        '18-06',
        '18-07',
        '18-08',
        '18-09',
        '18-10',
        '18-11',
        '18-12']
    }, {
        item: "2019",
        filter: ['19-01',
        '19-02',
        '19-03',
        '19-04',
        '19-05',
        '19-06',
        '19-07',
        '19-08',
        '19-09',
        '19-10',
        '19-11',
        '19-12']
    }, {
        item: "2018-19",
        filter: ['18-01',
        '18-02',
        '18-03',
        '18-04',
        '18-05',
        '18-06',
        '18-07',
        '18-08',
        '18-09',
        '18-10',
        '18-11',
        '18-12',
        '19-01',
        '19-02',
        '19-03',
        '19-04',
        '19-05',
        '19-06',
        '19-07',
        '19-08',
        '19-09',
        '19-10',
        '19-11',
        '19-12']
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
