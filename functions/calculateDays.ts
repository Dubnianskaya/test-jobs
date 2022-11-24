type calculateDaysFn = (date: string) => number;

export const calculateDays: calculateDaysFn = function (date) {
    const dateOfPublish = new Date(date);
    const currentDate = new Date();
    const difference = currentDate.getTime() - dateOfPublish.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
}
