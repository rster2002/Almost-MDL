<div class="target" on:click={onClick}>
  <div class="checkbox {selected && 'selected'} {disabled && 'disabled'}">
    <div class="container">
      {#if !partial}
        <Icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
          </svg>
        </Icon>
      {:else}
        <Icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M19,13H5V11H19V13Z" />
          </svg>
        </Icon>
      {/if}
    </div>
  </div>
</div>

<script lang="ts">
// Imports
import { createEventDispatcher } from "svelte";
const dispatch = createEventDispatcher();

// Components
import Icon from "../communication/Icon.svelte";

// Props
export var selected: boolean = false;
export var disabled: boolean = false;
export var manual: boolean = false;
export var partial: boolean = false;

// Functions
function onClick() {
    if (disabled) {
        return;
    }

    if (!manual) {
        selected = !selected;
    }

    dispatch("click");
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

.checkbox {
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

        box-sizing: border-box;

        border: dp.dp(2) solid color.use(--md-sys-color-on-surface);
        border-radius: dp.dp(2);
        transition: inherit;

        & > :global(.icon) {
            font-size: dp.dp(18);

            transition: inherit;

            :global(svg) {
                position: relative;
                top: dp.dp(-2);
                left: dp.dp(-2);

                color: color.use(--md-sys-color-on-primary);
                transition: inherit;
                opacity: 0;
            }
        }
    }

    &.selected {
        .container {
            background-color: color.use(--md-sys-color-primary);
            border-color: color.use(--md-sys-color-primary);

            & > :global(.icon) {
                :global(svg) {
                    opacity: 1;
                }
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

        &.selected .container {
            background-color: color.use(--md-sys-color-on-surface, 0.38);
            border-color: transparent;
        }

        &:hover {
            background-color: transparent;
        }
    }
}

</style>
