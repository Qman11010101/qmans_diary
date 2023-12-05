import sys

import requests_oauthlib

session = requests_oauthlib.OAuth1Session(
    sys.argv[1],
    sys.argv[2],
    sys.argv[3],
    sys.argv[4]
)

session.post(
    "https://api.twitter.com/2/tweets",
    json={"text": f"ブログを更新しました: {sys.argv[6]}\nhttps://blog.qmainconts.dev/articles/{sys.argv[5]}/"}
)