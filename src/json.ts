function generateJSON(wages1: number, wages2: number, userID: string) {
  const wages_diff = wages2 - wages1;
  let textOf_diff: string;
  if (wages_diff > 0) {
    textOf_diff = "-￥" + Math.abs(wages_diff);
  } else {
    textOf_diff = "￥" + wages_diff;
  }

  // For Flex Message https://developers.line.biz/en/docs/messaging-api/using-flex-messages/
  const json = {
    to: userID,
    messages: [
      {
        type: "flex",
        altText: "WAGES REPORT",
        contents: {
          type: "bubble",
          body: {
            type: "box",
            layout: "vertical",
            contents: [
              {
                type: "text",
                text: "WAGES REPORT",
                weight: "bold",
                color: "#1DB446",
                size: "md",
              },
              {
                type: "box",
                layout: "vertical",
                margin: "xxl",
                spacing: "sm",
                contents: [
                  {
                    type: "box",
                    layout: "horizontal",
                    contents: [
                      {
                        type: "text",
                        text: "Last month",
                        size: "sm",
                        color: "#555555",
                        flex: 0,
                        weight: "bold",
                      },
                      {
                        type: "text",
                        text: "￥" + wages1,
                        size: "sm",
                        color: "#111111",
                        align: "end",
                        weight: "bold",
                      },
                    ],
                  },
                  {
                    type: "box",
                    layout: "horizontal",
                    contents: [
                      {
                        type: "text",
                        text: "Two months ago",
                        size: "sm",
                        color: "#555555",
                        flex: 0,
                      },
                      {
                        type: "text",
                        text: "￥" + wages2,
                        size: "sm",
                        color: "#111111",
                        align: "end",
                      },
                    ],
                  },
                  {
                    type: "box",
                    layout: "horizontal",
                    contents: [
                      {
                        type: "text",
                        text: "Difference",
                        size: "sm",
                        color: "#555555",
                        flex: 0,
                      },
                      {
                        type: "text",
                        text: textOf_diff,
                        size: "sm",
                        color: "#111111",
                        align: "end",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          styles: {
            footer: {
              separator: true,
            },
          },
        },
      },
    ],
  };

  return json;
}
