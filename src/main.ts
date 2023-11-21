function main(): void {
  const myCal = getCalender();
  const lastMonth_Events = getEvents(myCal, 1);
  const monthBeforeLast_Events = getEvents(myCal, 2);

  const scriptProperties = PropertiesService.getScriptProperties();
  // These are the names of the appointments (shifts) you have on your calendar.
  // Some users may need to be added or removed.
  // TODO (Developer) Modify the code to be more resistant to change.
  const eventName1 = scriptProperties.getProperty("EVENT_NAME1") || "";
  const eventName2 = scriptProperties.getProperty("EVENT_NAME2") || "";
  const lastMonth_workingHours1 = getHours(lastMonth_Events, eventName1);
  const lastMonth_workingHours2 = getHours(lastMonth_Events, eventName2);
  const monthBeforeLast_workingHours1 = getHours(
    monthBeforeLast_Events,
    eventName1,
  );
  const monthBeforeLast_workingHours2 = getHours(
    monthBeforeLast_Events,
    eventName2,
  );

  const hourlyWage1: number = parseInt(
    scriptProperties.getProperty("WAGE1") || "0",
  );
  const hourlyWage2: number = parseInt(
    scriptProperties.getProperty("WAGE2") || "0",
  );

  const lastMonth_wages =
    lastMonth_workingHours1 * hourlyWage1 +
    lastMonth_workingHours2 * hourlyWage2;
  const monthBeforeLast_wages =
    monthBeforeLast_workingHours1 * hourlyWage1 +
    monthBeforeLast_workingHours2 * hourlyWage2;

  postToLine(lastMonth_wages, monthBeforeLast_wages);
}
