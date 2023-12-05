import os

import requests_oauthlib

session = requests_oauthlib.OAuth1Session(
    # envに設定した値を取得
    os.environ["X_API_KEY"],
    os.environ["X_API_KEY_SECRET"],
    os.environ["X_ACCESS_TOKEN"],
    os.environ["X_ACCESS_TOKEN_SECRET"]
)

session.post(
    "https://api.twitter.com/2/tweets",
    json={"text": f"ブログを更新しました: {os.environ['TITLE']}\nhttps://blog.qmainconts.dev/articles/{os.environ['ID']}/"}
)