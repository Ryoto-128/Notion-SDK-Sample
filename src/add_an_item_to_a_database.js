const { Client } = require('@notionhq/client');

// Initializing a client
const notion = new Client({
  auth: <MY_NOTION_TOKEN>,
});

(async () => {
  await notion.request({
    path: 'pages',
    method: "post",
    body:{
        "parent": { "database_id": <DATABASE_ID> },
        "properties": {
            "Name": [ { "text": { "content" : "test" } } ],
        }
    }
  })
})();