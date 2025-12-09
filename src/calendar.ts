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

  const events = myCal?.getEvents(startDate, endDate);

  return events;
}

function getCalendar(): GoogleAppsScript.Calendar.Calendar {
  // Get the value for the Script property 'CAL_ID'.
  const scriptProperties = PropertiesService.getScriptProperties();
  const calId = scriptProperties.getProperty("CAL_ID") || "";
  const myCal = CalendarApp.getCalendarById(calId);

  return myCal;
}

const MILLISECONDS_TO_HOURS = 3600000;

function getHours(
  events: GoogleAppsScript.Calendar.CalendarEvent[],
  name: string,
): number {
  let workingHours: number = 0;

  for (const i of events) {
    if (i.getTitle() === name) {
      workingHours +=
        (i.getEndTime().getTime() - i.getStartTime().getTime()) /
        MILLISECONDS_TO_HOURS;
    }
  }

  return workingHours;
}
