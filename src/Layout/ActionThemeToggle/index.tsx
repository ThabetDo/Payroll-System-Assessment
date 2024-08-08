import {ActionIcon, Group, useComputedColorScheme, useMantineColorScheme,} from "@mantine/core";
import {IconMoon, IconSun} from "@tabler/icons-react";

function ActionThemeToggle() {
    const {setColorScheme} = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme("light", {
        getInitialValueInEffect: true,
    });

    return (
        <Group justify='center'>
            <ActionIcon
                onClick={() =>
                    setColorScheme(computedColorScheme === "light" ? "dark" : "light")
                }
                variant='default'
                size='xl'
                aria-label='Toggle color scheme'
            >
                {computedColorScheme === "dark" && <IconSun stroke={1.5}/>}
                {computedColorScheme === "light" && <IconMoon stroke={1.5}/>}
            </ActionIcon>
        </Group>
    );
}

export default ActionThemeToggle;
