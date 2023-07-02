<div
  class="
    inputWrapper
    {padding && 'padding'}
    {pointer && 'pointer'}
    {focus && 'focus'}
    {active && 'active'}
  "
  on:click
>
  <slot {id} />
  <label for={id}>{label}</label>
</div>

<script lang="ts">
// Props
export var focus = false;
export var active = true;
export var label: string;
export var padding = false;
export var pointer = false;

// Data
const id = String(Math.random());
</script>

<style lang="scss">
@use "../../../dp";
@use "../../../color";
@use "../../../typescale";

.inputWrapper {
    width: 100%;

    margin: dp.dp(1);
    position: relative;
    box-sizing: border-box;

    border-radius: var(--md-sys-shape-corner-extra-small);
    color: color.use(--md-sys-color-on-surface);
    font-weight: bold;
    border: dp.dp(1) solid color.use(--md-sys-color-outline);
    background-color: inherit;

    @include typescale.use-scale(body-large);

    &.padding {
        padding: 0.75em;
    }

    &.pointer {
        cursor: pointer;
    }

    label {
        position: absolute;
        padding: 0 dp.dp(4);
        left: dp.dp(16);
        top: dp.dp(12);

        transition: all var(--md-sys-motion-duration-short3) var(--md-sys-motion-easing-standard);
        background-color: inherit;
        cursor: text;
        color: color.use(--md-sys-color-on-surface-variant);

        @include typescale.use-scale(body-large);
    }

    &.active {
        label {
            left: dp.dp(12);
            top: dp.dp(-8);

            @include typescale.use-scale(body-small);
        }
    }

    &.focus {
        margin: 0;

        border-color: color.use(--md-sys-color-primary);
        border-width: dp.dp(2);

        label {
            color: color.use(--md-sys-color-primary);
        }
    }
}

</style>
