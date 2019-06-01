const { withUiHook, htm } = require("@zeit/integration-utils");
const componentLabel = (name = "", desc = "") => {
	if (desc) {
		descComponent = htm`<P>${desc}</P>`;
	}
	return htm`
		<Box font-style="italic" font-weight="bold" >
		  <Box background="#e6e4d1" display="inline-block" padding="3px" font-size="150%">
		  	${name}
		  </Box>
		</Box>
	`;
};
module.exports = withUiHook(async ({ payload, zeitClient }) => {
	console.log("Received Payload:")
	console.log(payload)
	if (payload.action === "alternateView") {
		return htm`
			<Page>
				<H1>Payload.action was 'alternateView'</H1>
			</Page>
		`;
	} else {
		return htm`
		<Page>
			<H2>Offline-first starter and component showcase for Zeit Integrations</H2>
			<P>Source available at <Link href="https://github.com/manguluka/zeit-integration-starter-offline">https://github.com/manguluka/zeit-integration-starter-offline</Link></P>
			<P>View the current payload at the bottom of this Page</P>
			<H1>Integration Component Examples:</H1>

			${componentLabel("Button")}
			<Button action="create-db">Button with action</Button>

			${componentLabel("ProjectSwitcher")}
			<ProjectSwitcher />

			${componentLabel("Link")}
			<Link href="https://zeit.co">Visit ZEIT</Link>

			${componentLabel("Select")}
			<Select name="dbName" value="selectedValue" action="change-db">
			  <Option value="mongodb" caption="MongoDB" />
			  <Option value="redis" caption="Redis" />
			</Select>

			${componentLabel("Input")}
			<Input name="dbName" label="Name for the Database" value="the default value" />

			${componentLabel("Textarea")}
			<Textarea
			  name="description"
			  label="Enter your description"
			>
			    The value
			</Texarea>

			${componentLabel("Checkbox")}
			<Checkbox name="allowOptionA" label="Allow Option A" checked="true" />

			${componentLabel("Box")}
			<Box display="flex" justifyContent="space-between">
			  <H1>Your Databases</H1>
			  <Button>+Create New</Button>
			</Box>

			${componentLabel("P")}
			<P>A paragraph.</P>

			${componentLabel("H1")}
			<H1>A title</H1>

			${componentLabel("H2")}
			<H2>A secondary title</H2>

			${componentLabel("BR")}
			<BR />

			${componentLabel("B")}
			<B>Bold text</B>

			${componentLabel("Img")}
            <Img src="https://cdn-reibjvbyi.now.sh/guided-breathing-screenshot.png" />
			
			<H1>UIHook Payload:</H1>
			<P>This views payload param from withUiHook</P>
			<Code>
				${JSON.stringify(payload, undefined, 2)}
			</Code>

		</Page>
	`;
	}
});
