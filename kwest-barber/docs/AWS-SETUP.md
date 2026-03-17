# AWS Amplify Deployment Guide

## 1. Create Amplify App

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click "New app" > "Host web app"
3. Select GitHub as the source provider
4. Authorize AWS and select the `kwest-barber` repository
5. Select the `main` branch
6. Amplify will auto-detect the `amplify.yml` build settings
7. Click "Save and deploy"

## 2. Environment Variables

In the Amplify Console, go to **App settings > Environment variables** and add:

| Variable | Value |
|---|---|
| `INSTAGRAM_ACCESS_TOKEN` | Your Instagram Basic Display API long-lived token |
| `NEXT_PUBLIC_SQUIRE_BOOKING_URL` | `https://squire.com/kwestthebarber` (or actual URL) |
| `NEXT_PUBLIC_SITE_URL` | `https://kwestthebarber.com` |

## 3. Custom Domain

1. In Amplify Console, go to **Domain management**
2. Click "Add domain"
3. Enter `kwestthebarber.com`
4. Configure subdomains:
   - `kwestthebarber.com` (apex) -> `main` branch
   - `www.kwestthebarber.com` -> redirect to apex
5. Follow the DNS verification steps (add CNAME records at your registrar)
6. SSL certificate is automatically provisioned and renewed by Amplify

## 4. Instagram Token Refresh Lambda

The Instagram Basic Display API token expires every 60 days. Set up an automated refresh:

1. Create a Lambda function (Node.js 20 runtime)
2. Function code:

```javascript
const https = require("https");

exports.handler = async () => {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const url = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${token}`;

  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        const parsed = JSON.parse(data);
        console.log("Token refreshed. Expires in:", parsed.expires_in);
        // Store the new token in SSM Parameter Store or update env var
        resolve({ statusCode: 200, body: "Token refreshed" });
      });
    }).on("error", reject);
  });
};
```

3. Add an EventBridge (CloudWatch Events) trigger with a cron schedule:
   - `rate(50 days)` or `cron(0 12 */50 * ? *)`
4. Set the `INSTAGRAM_ACCESS_TOKEN` environment variable on the Lambda
5. Grant the Lambda permission to update the Amplify environment variable if you want full automation

## 5. Branch Previews (Recommended)

1. In Amplify Console, go to **Previews**
2. Enable previews for pull requests
3. Each PR will get a unique preview URL for staging review before merge
