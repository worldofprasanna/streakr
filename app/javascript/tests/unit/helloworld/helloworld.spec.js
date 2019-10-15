import { createLocalVue, shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld";
import Vue from 'vue';
import Vuetify from 'vuetify';

const localVue = createLocalVue();
Vue.use(Vuetify)

describe("Hello World", () => {
  it("should render correct Hello World", () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});