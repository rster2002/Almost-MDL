<div>
  <slot />
</div>

<style lang="scss">
@use "../../../dp";

div {
    height: 100%;
    width: 100%;

    padding: dp.dp(56);
    box-sizing: border-box;
    container-type: inline-size;
}

</style>
