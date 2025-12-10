function main(): void {
  const myCal = getCalendar();
  const lastMonthEvents = getEvents(myCal, 1);
  const monthBeforeLastEvents = getEvents(myCal, 2);

  const scriptProperties = PropertiesService.getScriptProperties();
  // These are the names of the appointments (shifts) you have on your calendar.
  // Some users may need to be added or removed.
  // TODO (Developer) Modify the code to be more resistant to change.
  const eventName1 = scriptProperties.getProperty("EVENT_NAME1") || "";
  const eventName2 = scriptProperties.getProperty("EVENT_NAME2") || "";
  const lastMonthWorkingHours1 = getHours(lastMonthEvents, eventName1);
  const lastMonthWorkingHours2 = getHours(lastMonthEvents, eventName2);
  const monthBeforeLastWorkingHours1 = getHours(
    monthBeforeLastEvents,
    eventName1,
  );
  const monthBeforeLastWorkingHours2 = getHours(
    monthBeforeLastEvents,
    eventName2,
  );

  const hourlyWage1: number = parseInt(
    scriptProperties.getProperty("WAGE1") || "0",
    10,
  );
  const hourlyWage2: number = parseInt(
    scriptProperties.getProperty("WAGE2") || "0",
    10,
  );

  const lastMonthWages =
    lastMonthWorkingHours1 * hourlyWage1 + lastMonthWorkingHours2 * hourlyWage2;
  const monthBeforeLastWages =
    monthBeforeLastWorkingHours1 * hourlyWage1 +
    monthBeforeLastWorkingHours2 * hourlyWage2;

  postToLine(lastMonthWages, monthBeforeLastWages);
}
