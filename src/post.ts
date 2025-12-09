function postToLine(
  lastMonth_wages: number,
  monthBeforeLast_wages: number,
): void {
  const scriptProperties = PropertiesService.getScriptProperties();
  const userID = scriptProperties.getProperty("USER_ID") || "";

  const postData = generateJSON(lastMonth_wages, monthBeforeLast_wages, userID); // Return JSON for Flex Message

  const access_token =
    scriptProperties.getProperty("CHANNEL_ACCESS_TOKEN") || "";

  const headers = {
    "Content-Type": "application/json; charset=UTF-8",
    Authorization: `Bearer ${access_token}`,
  };
  const options: any = {
    method: "post",
    headers: headers,
    payload: JSON.stringify(postData),
  };

  UrlFetchApp.fetch("https://api.line.me/v2/bot/message/push", options);
}
