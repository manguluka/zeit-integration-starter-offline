![alt text](http://cdn-31v9g5cfa.now.sh/zeit-starter-offline.png "Logo Title Text 1")

Originally created for participants in the inaugaural [Zeit Integrations Hackathon](https://zeit.co/hackathon). 

Contributions(tests/documentation/endpoint support) welcome and appreciated. Feel free to contact `Luka Kakia` on the hackathon Slack with any questions.

## Usage

```bash
#Development
git clone git@github.com:manguluka/zeit-api-client.git # or fork and clone
cd zeit-integration-starter-offline
yarn dev
# Server should be available at http://localhost:5005

# Production
yarn deploy # creates a now deployment using the included now.json file
```

Integrations currently only support POST requests. The below `curl` command should work for early/offline UI development(no access to Zeit API of course)


```bash
curl -X POST http://localhost:5005 \
-d '{
    "query": {
        "cfgId": "icfg_***"
    },
    "action": "view",
    "clientState": {},
    "token": "***",
    "slug": "sandbox",
    "configurationId": "icfg_***",
    "integrationId": "oac_***",
    "teamId": null,
    "user": {
        "id": "***",
        "username": "***",
        "email": "***",
        "name": null,
        "profiles": []
    },
    "team": null,
    "project": null,
    "projectId": null,
    "installationUrl": "https://zeit.co/dashboard/integrations/icfg_***"
}'
```

## Offline UI playground/simulator
![alt text](http://cdn-p4jszezsz.now.sh/zeit-starter-offline-playground.png "Logo Title Text 1")
If you're feeling adventurous, an early-development UI playground is available at [https://zeit-integration-component-playground.lilo.now.sh](https://zeit-integration-component-playground.lilo.now.sh). This aims to allow completely offline UI development,
