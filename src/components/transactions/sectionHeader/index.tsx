import {Grid} from "@mantine/core";
import {HeaderWrapper} from "../../../styles/main.ts";

function Header() {

    return (
        <HeaderWrapper>
            <Grid gutter='24px'>
                <Grid.Col
                    span={9}
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                    }}
                ></Grid.Col>
            </Grid>
        </HeaderWrapper>
    );
}

export default Header;
