<div class="navLayout">
  <div class="navTarget">
    <slot name="nav" />
  </div>

  <div class="contentTarget">
    <slot name="content" />
  </div>
</div>

<style lang="scss">
@use "../../../dp";
@use "../../../breakpoints";

.navLayout {
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: row;

    .navTarget {
        height: 100%;
        //width: dp.dp(360);
    }

    .contentTarget {
        height: 100%;
        width: 100%;
    }
}

@media only screen and (max-width: breakpoints.$compact-breakpoint) {
    .navLayout {
        flex-direction: column-reverse;

        .navTarget {
            height: unset;
        }
    }
}

</style>
