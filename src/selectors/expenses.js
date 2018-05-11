import moment from 'moment';

//Get visible expenses
const getVisibleExpenses = ((expenses, { text, sortBy, startDate, endDate })=>{
    return expenses.filter((expense)=>{
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true ;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a , b)=>{
        if(sortBy ==='date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }else if(sortBy ==='amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });
});

export default getVisibleExpenses;

//start and end date expelnation :
//first check if there is start date? startdate ?
//if no start date, always true, (return all dates)
//if there is , checking is the same or before or after from moment library