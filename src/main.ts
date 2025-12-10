function main(): void {
  const myCal = getCalendar();
  const lastMonthEvents = getEvents(myCal, 1);
  const monthBeforeLastEvents = getEvents(myCal, 2);

  const scriptProperties = PropertiesService.getScriptProperties();
  
  // Dynamically discover all jobs by checking for EVENT_NAME{n} and WAGE{n} properties
  const jobs: { eventName: string; wage: number }[] = [];
  let jobIndex = 1;
  
  while (true) {
    const eventName = scriptProperties.getProperty(`EVENT_NAME${jobIndex}`);
    const wageStr = scriptProperties.getProperty(`WAGE${jobIndex}`);
    
    if (!eventName || !wageStr) {
      break;
    }
    
    jobs.push({
      eventName: eventName,
      wage: parseInt(wageStr, 10),
    });
    
    jobIndex++;
  }

  // Calculate total wages for all jobs
  let lastMonthWages = 0;
  let monthBeforeLastWages = 0;
  
  for (const job of jobs) {
    const lastMonthHours = getHours(lastMonthEvents, job.eventName);
    const monthBeforeLastHours = getHours(monthBeforeLastEvents, job.eventName);
    
    lastMonthWages += lastMonthHours * job.wage;
    monthBeforeLastWages += monthBeforeLastHours * job.wage;
  }

  postToLine(lastMonthWages, monthBeforeLastWages);
}
