const { withUiHook, htm } = require("@zeit/integration-utils");
module.exports = withUiHook(async ({ payload, zeitClient }) => {
	return htm`
		<Page>
			<H1>Payload</H1>
			<Code>
				${JSON.stringify(payload, undefined, 2)}
			</Code>
		</Page>
	`;	
});
