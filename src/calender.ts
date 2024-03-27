function getEvents(
  myCal: GoogleAppsScript.Calendar.Calendar,
  startMonth: number,
): GoogleAppsScript.Calendar.CalendarEvent[] {
  const dt = new Date();
  const startDate = new Date(dt.getFullYear(), dt.getMonth() - startMonth, 1); // 1st day of month
  const endDate = new Date(
    dt.getFullYear(),
    dt.getMonth() - (startMonth - 1),
    0,
    23,
    59,
    59,
  ); // Last day of month

  let events = myCal?.getEvents(startDate, endDate);

  return events;
}

function getCalender(): GoogleAppsScript.Calendar.Calendar {
  let myCal: GoogleAppsScript.Calendar.Calendar;

  // Get the value for the Script property 'CAL_ID'.
  const scriptProperties = PropertiesService.getScriptProperties();
  const calId = scriptProperties.getProperty("CAL_ID") || "";
  myCal = CalendarApp.getCalendarById(calId);

  return myCal;
}

function getHours(
  events: GoogleAppsScript.Calendar.CalendarEvent[],
  name: string,
): number {
  let workingHours: number = 0;

  for (let i of events) {
    if (i.getTitle() == name) {
      workingHours +=
        (i.getEndTime().getTime() - i.getStartTime().getTime()) / 3600000;
    }
  }

  return workingHours;
}
