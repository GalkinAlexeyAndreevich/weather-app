import moment from "moment";
export const convertDate = (date: Date) => {
	let day = moment(date).date();
	let month = moment(date).format("MMMM");
	let calendarDay = moment(date).calendar().split(" ")[0];
	return {
		day,
		month,
		calendarDay,
	};
};
