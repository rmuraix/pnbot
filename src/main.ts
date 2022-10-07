function main(): void{
    const myCal = getCalender();
    const events = getEvents(myCal);
    const workingHours = getHour(events);
    Logger.log(workingHours);
}