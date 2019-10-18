<!-- Test #14 -->
<div slot="text">
    <Button dropdown="Login" bind:open={dropdown} outline>
        <Row>
            <Col size="12"><input placeholder="username"></Col>
            <Col size="12"><input placeholder="password" type="password"></Col>
<Col size="12"><Button clear on:click={e=>dropdown=false}>Sign up</Button>
<Button primary on:click={e=>dropdown=false}>Sign in</Button>
</Col>
        </Row>
    </Button>
</div>