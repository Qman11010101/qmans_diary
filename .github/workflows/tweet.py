import os

import requests
import requests_oauthlib

session = requests_oauthlib.OAuth1Session(
    # envに設定した値を取得
    os.environ["X_API_KEY"],
    os.environ["X_API_KEY_SECRET"],
    os.environ["X_ACCESS_TOKEN"],
    os.environ["X_ACCESS_TOKEN_SECRET"]
)

title = requests.get(f"https://{os.environ['SERVICE_DOMAIN']}.microcms.io/api/v1/articles/{os.environ['ID']}?fields=title", headers={
    "X-MICROCMS-API-KEY:": os.environ["MICROCMS_API_KEY"],
}).json()["title"]

res = session.post(
    "https://api.twitter.com/2/tweets",
    json={"text": f"ブログを更新しました: {title}\nhttps://blog.qmainconts.dev/articles/{os.environ['ID']}/"}
)

print(res.text)