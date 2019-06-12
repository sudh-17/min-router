<template>
  <div>
    <p>this is home page</p>
    <temp-var :var1="1000" :var2="2000">
      <template v-slot="{var1, var2}">
        {{var1}}
        {{var2}}
        {{var1 + var2}}
      </template>
    </temp-var>
    <Button :item="msg"></Button>
  </div>
</template>

<script>
import TempVar from "./TempVar.js";
import Button from "./Button.js";
export default {
  components: {
    TempVar,
    Button
  },
  data() {
    return {
      msg: "hello world"
    };
  }
};
</script>

