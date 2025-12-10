function postToLine(
  lastMonthWages: number,
  monthBeforeLastWages: number,
): void {
  const scriptProperties = PropertiesService.getScriptProperties();
  const userID = scriptProperties.getProperty("USER_ID") || "";

  const postData = generateJSON(lastMonthWages, monthBeforeLastWages, userID); // Return JSON for Flex Message

  const accessToken =
    scriptProperties.getProperty("CHANNEL_ACCESS_TOKEN") || "";

  const headers = {
    "Content-Type": "application/json; charset=UTF-8",
    Authorization: `Bearer ${accessToken}`,
  };
  const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
    method: "post",
    headers: headers,
    payload: JSON.stringify(postData),
  };

  UrlFetchApp.fetch("https://api.line.me/v2/bot/message/push", options);
}
