import moment from "moment";
import "moment/locale/ru"; 
export const convertDate = (date: Date) => {
	// moment.locale("ru").format("LLL");
	let day = moment(date).date();
	let month = moment(date).format("MMMM");
	let calendarDay = moment(date).calendar().split(" ")[0];
	
	return {
		day,
		month,
		calendarDay,
	};
};
