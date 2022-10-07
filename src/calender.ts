function getEvents(myCal:GoogleAppsScript.Calendar.Calendar):GoogleAppsScript.Calendar.CalendarEvent[]{

  const dt = new Date();
  const startDate = new Date(dt.getFullYear(), dt.getMonth() - 1, 1); // 1st of last month
  const endDate = new Date(dt.getFullYear(), dt.getMonth(), 0); // Last day of last month

  let events = myCal?.getEvents(startDate, endDate);

  return events;
}

function getCalender():GoogleAppsScript.Calendar.Calendar{

  let myCal:GoogleAppsScript.Calendar.Calendar;

    // Get the value for the Script property 'CAL_ID'.
    const scriptProperties = PropertiesService.getScriptProperties();
    const calId = scriptProperties.getProperty('CAL_ID') || "";
    myCal = CalendarApp.getCalendarById(calId);

  return myCal;
}

function getHour(events:GoogleAppsScript.Calendar.CalendarEvent[]):number {
  
  let workingHours:number = 0;

  for (let i of events) {

    workingHours += (i.getEndTime().getTime() - i.getStartTime().getTime())/3600000;

  }

  return workingHours;
}