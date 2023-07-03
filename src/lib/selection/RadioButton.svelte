<div class="target" on:click={onClick}>
  <div class="radioButton {selected && 'selected'} {disabled && 'disabled'}">
    <div class="container">
      <div class="tick"></div>
    </div>
  </div>
</div>

<script lang="ts">
// Imports
import { getContext } from "svelte";

// Props
export var value: unknown;
export var disabled: boolean = false;

// Data
let groupValue = getContext("radioGroup");

// Computed
$: selected = $groupValue === value;

// Functions
function onClick() {
    if (disabled) {
        return;
    }

    $groupValue = value;
}
</script>

<style lang="scss">
@use "../../../dp";
@use "../../../state-layer";
@use "../../../color";

.target {
    height: dp.dp(48);
    width: dp.dp(48);

    display: grid;
    place-items: center;
}

.radioButton {
    height: dp.dp(40);
    width: dp.dp(40);

    display: grid;
    place-items: center;

    cursor: pointer;
    border-radius: var(--md-sys-shape-corner-full);
    transition: var(--md-sys-motion-duration-short4) var(--md-sys-motion-easing-standard) all;

    &:hover {
        background-color: color.use(--md-sys-color-on-surface, 0.08);
    }

    .container {
        height: dp.dp(18);
        width: dp.dp(18);

        display: grid;
        place-items: center;
        box-sizing: border-box;

        border: dp.dp(2) solid color.use(--md-sys-color-on-surface);
        border-radius: var(--md-sys-shape-corner-full);
        transition: inherit;

        .tick {
            height: dp.dp(8);
            width: dp.dp(8);

            border-radius: var(--md-sys-shape-corner-full);
            color: color.use(--md-sys-color-on-primary);
            background-color: color.use(--md-sys-color-primary);

            transform: scale(0);
            transition: inherit;
        }
    }

    &.selected {
        .container {
            border-color: color.use(--md-sys-color-primary);

            .tick {
                transform: scale(1);
            }
        }

        &:hover {
            background-color: color.use(--md-sys-color-primary, 0.08);
        }
    }

    &.disabled {
        cursor: default;

        .container {
            border-color: color.use(--md-sys-color-on-surface, 0.38);
        }

        &.selected .container .tick {
            background-color: color.use(--md-sys-color-on-surface, 0.38);
            //border-color: transparent;
        }

        &:hover {
            background-color: transparent;
        }
    }
}

</style>
