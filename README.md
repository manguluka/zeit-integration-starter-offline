![alt text](http://cdn-31v9g5cfa.now.sh/zeit-starter-offline.png "Logo Title Text 1")

Originally created for participants in the inaugural [Zeit Integrations Hackathon](https://zeit.co/hackathon). 

Contributions(tests/documentation/component examples) welcome and appreciated. Feel free to contact `Luka Kakia` on the hackathon Slack with any questions.

**Related Links**
- [https://github.com/manguluka/zeit-api-client](https://github.com/manguluka/zeit-api-client) JavaScript wrapper for the Zeit API
- [https://github.com/manguluka/zeit-integration-starter-offline](https://github.com/manguluka/zeit-integration-starter-offline) Offline-first project starter and component showcase for Zeit Integrations
- [https://github.com/zeit/awesome-zeit-integrations](https://github.com/zeit/awesome-zeit-integrations) This list aggregates the best resources for ZEIT Integrations.



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

## Integration Development toolbox
![screenrecording](http://cdn-9w4u9y9br.now.sh/zeit-integration-toolbox.gif "Screenrecording")
If you're feeling adventurous, an early-development UI dev toolbox is available at [https://zeit-integration-toolbox.lilo.now.sh](https://zeit-integration-toolbox.lilo.now.sh). 

This aims to eventually allow completely offline UI development, with a live editor for UI code, integration server querys and the [zeit-api-client](https://github.com/manguluka/zeit-api-client#readme) package.

**Expect unexpected behaviour. A small subset of the component catalog is currently supported.**

## License

MIT © [Luka Kakia](https://github.com/manguluka)
