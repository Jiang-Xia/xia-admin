<template>
  <div class="dim-container clearfix">
    <LongText
      v-if="dimData.type==='long_text'"
      :key="String('LongText_'+questionIndex)"
      @modify="modifyHandle"
    />
    <ShortText
      v-if="dimData.type==='short_text'"
      :key="String('ShortText_'+questionIndex)"
      :dim-data="dimData"
      @modify="modifyHandle"
    />
    <MultipleChoice
      v-if="dimData.type==='multiple_choice'"
      :key="String('MultipleChoice_'+questionIndex)"
      :dim-data="dimData"
      @modify="modifyHandle"
    />
    <MultipleDropdown
      v-if="dimData.type==='multiple_dropdown'"
      :key="String('LongText_'+questionIndex)"
      :dim-data="dimData"
      @modify="modifyHandle"
    />
    <SingleChoice
      v-if="dimData.type==='single_choice'"
      :key="String('SingleChoice_'+questionIndex)"
      :dim-data="dimData"
      @modify="modifyHandle"
    />
    <SingleDropdown
      v-if="dimData.type==='single_dropdown'"
      :key="String('SingleDropdown_'+questionIndex)"
      :dim-data="dimData"
      @modify="modifyHandle"
    />
    <Desp
      v-if="dimData.type==='desp'"
      :key="String('LongText_'+questionIndex)"
      :dim-data="dimData"
      @modify="modifyHandle"
    />
  </div>
</template>

<script>
import LongText from './long-text.vue'
import ShortText from './short-text.vue'
import MultipleChoice from './multiple-choice.vue'
import MultipleDropdown from './multiple-dropdown.vue'
import SingleChoice from './single-choice.vue'
import SingleDropdown from './single-dropdown.vue'
import Desp from './desp.vue'
export default {
  components: {
    ShortText,
    LongText,
    MultipleChoice,
    MultipleDropdown,
    SingleChoice,
    SingleDropdown,
    Desp
  },
  provide() {
    return {
      dimData: this.dimData,
      isEditing: this.isEditing
    }
  },
  props: {
    dimData: {
      default: () => {},
      type: Object
    },
    isEditing: {
      default: () => false,
      type: Boolean
    },
    questionIndex: {
      default: () => 0,
      type: Number
    }
  },
  data() {
    return {

    }
  },
  watch: {
    dimData(n) {
      // console.log(n)
    }
  },
  methods: {
    modifyHandle() {

    }
  }
}
</script>
