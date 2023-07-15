<div class="navAdditional">
  <slot />
</div>

<style lang="scss">
@use "../../../typescale";
@use "../../../dp";
@use "../../../color";

.navAdditional {
    display: contents;

    & > :global(span) {
        display: inline-block;
        padding: 0 dp.dp(20);
        margin: dp.dp(16) 0;

        @include typescale.use-scale(title-small);
    }

    & > :global(hr) {
        width: calc(100% - #{dp.dp(40)});
        border: 0;
        border-bottom: dp.dp(1) solid color.use(--md-sys-color-on-surface-variant);
    }
}

</style>
