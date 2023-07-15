<nav>
  <slot />
</nav>

<style lang="scss">
@use "../../../dp";
@use "../../../color";
@use "../../../typescale";
@use "../../../breakpoints";

nav {
    @include color.alias(--nav-background, --md-sys-color-surface);

    height: 100%;
    width: dp.dp(360);

    container-type: inline-size;
    padding: dp.dp(12);
    box-sizing: border-box;
}

@media only screen and (max-width: breakpoints.$medium-breakpoint) {
    nav {
        width: dp.dp(80);

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: dp.dp(12);

        & > :global(.navAdditional) {
            display: none;
        }
    }
}

@media only screen and (max-width: breakpoints.$compact-breakpoint) {
    nav {
        height: unset;
        width: 100%;

        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: dp.dp(12) 0 dp.dp(16);
        background-color: color.use(--md-sys-color-surface);

        & > :global(.navAdditional) {
            display: none;
        }
    }
}

</style>
