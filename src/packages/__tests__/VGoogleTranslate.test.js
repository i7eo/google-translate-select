import { mount } from "@vue/test-utils";
import VGoogleTranslate from "../src";

const mockReturnTrue = jest.fn().mockImplementation(() => true);
window.google = {
  translate: {
    TranslateElement: () => true,
  },
};
const mockDynamicLoadJs = jest.fn().mockImplementation(() => window.google);

describe("VGoogleTranslate.vue", () => {
  let languages = [];
  beforeEach(() => {
    languages = [
      {
        code: "en",
        name: "English",
        cname: "英语",
        ename: "English",
      },
      {
        code: "ar",
        name: "العربية",
        cname: "阿拉伯语",
        ename: "Arabic",
      },
    ];
  });

  it("is a Vue instance created", () => {
    const wrapper = mount(VGoogleTranslate, {
      propsData: {
        languages,
      },
    });
    expect(wrapper.vm).toBeTruthy();
  });

  it("pass prop['languages']", async () => {
    const wrapper = mount(VGoogleTranslate, {
      propsData: {
        languages,
      },
    });

    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.vm.languages).toBe(languages);
    expect(wrapper.vm.defaultLanguageCode).toBe("en");
  });

  it("pass prop['defaultLanguageCode']", () => {
    const wrapper = mount(VGoogleTranslate, {
      propsData: {
        languages,
        defaultLanguageCode: "ar",
      },
    });

    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.vm.defaultLanguageCode).toBe("ar");
  });

  it("pass prop['fetchBrowserLanguage']", () => {
    const wrapper = mount(VGoogleTranslate, {
      propsData: {
        languages,
        fetchBrowserLanguage: true,
      },
    });

    expect(wrapper.vm).toBeTruthy();

    const getBrowserLanguage = wrapper.vm.getBrowserLanguage;
    const isLanguageCodeInLanguages = wrapper.vm.isLanguageCodeInLanguages;
    const browserLanguage = wrapper.vm.fetchBrowserLanguage
      ? isLanguageCodeInLanguages(getBrowserLanguage())
      : "";

    expect(browserLanguage).toBe("en");
  });

  // it("pass prop['fetchBrowserLanguage']", () => {
  //   const wrapper = mount(VGoogleTranslate, {
  //     propsData: {
  //       languages,
  //       fetchBrowserLanguage: true
  //     }
  //   });

  //   expect(wrapper.vm).toBeTruthy();

  //   const getBrowserLanguage = wrapper.vm.getBrowserLanguage
  //   const isLanguageCodeInLanguages = wrapper.vm.isLanguageCodeInLanguages
  //   const browserLanguage = wrapper.vm.fetchBrowserLanguage ? isLanguageCodeInLanguages(getBrowserLanguage()) : ''

  //   expect(browserLanguage).toBe('en')
  // });

  it("check menu text", () => {
    const wrapper = mount(VGoogleTranslate, {
      propsData: {
        languages,
      },
    });

    expect(wrapper.findAll(".eo__dropdown__menu li").at(0).text()).toBe(
      "English",
    );
    expect(wrapper.findAll(".eo__dropdown__menu li").at(1).text()).toBe(
      "العربية",
    );
  });

  it("trigger mouseenter", async () => {
    // Tell jest to use fake timers
    jest.useFakeTimers();
    const wrapper = mount(VGoogleTranslate, {
      propsData: {
        languages,
      },
    });

    await wrapper.find(".eo__dropdown__activator").trigger("mouseenter");
    // Advance timers by 0.15 seconds
    jest.advanceTimersByTime(150);
    expect(wrapper.vm.visible).toBe(true);
  });

  it("trigger mouseleave", async () => {
    jest.useFakeTimers();
    const wrapper = mount(VGoogleTranslate, {
      propsData: {
        languages,
      },
    });

    await wrapper.find(".eo__dropdown__activator").trigger("mouseenter");
    jest.advanceTimersByTime(150);
    expect(wrapper.vm.visible).toBe(true);

    await wrapper.find(".eo__dropdown__activator").trigger("mouseleave");
    jest.advanceTimersByTime(150);
    expect(wrapper.vm.visible).toBe(false);
  });

  it("trigger methods['initUtils']", () => {
    const wrapper = mount(VGoogleTranslate, {
      propsData: {
        languages,
      },
    });

    expect(wrapper.vm).toBeTruthy();
    wrapper.vm.initUtils();
    expect(wrapper.vm.dynamicCreateStyle).toBeDefined();
    expect(wrapper.vm.dynamicLoadJs).toBeDefined();
    expect(wrapper.vm.getCookie).toBeDefined();
    expect(wrapper.vm.observer).toBeDefined();
  });

  it("trigger methods['initGoogleTranslate']", async () => {
    const wrapper = mount(VGoogleTranslate, {
      propsData: {
        languages,
      },
    });

    expect(wrapper.vm).toBeTruthy();
    wrapper.vm.initUtils();
    wrapper.vm.dynamicLoadJs = mockDynamicLoadJs;
    wrapper.vm.doGTranslate = mockReturnTrue;
    await wrapper.vm.initGoogleTranslate();
    wrapper.vm.setSelectedLanguageCode();

    expect(wrapper.vm.selectedLanguageCode).toBe("en");
  });

  it("trigger methods['setSelectedLanguageCode']", () => {
    const wrapper = mount(VGoogleTranslate, {
      propsData: {
        languages,
      },
    });

    expect(wrapper.vm).toBeTruthy();
    // 外部函数，自己用jest mock 掉就行
    wrapper.vm.doGTranslate = mockReturnTrue;
    wrapper.vm.setSelectedLanguageCode();

    expect(wrapper.vm.selectedLanguageCode).toBe("en");
  });

  it("trigger methods['translateHandler']", async () => {
    jest.useFakeTimers();
    const wrapper = mount(VGoogleTranslate, {
      propsData: {
        languages,
      },
    });

    await wrapper.find(".eo__dropdown__activator").trigger("mouseenter");
    jest.advanceTimersByTime(150);
    expect(wrapper.vm.visible).toBe(true);
    wrapper.vm.doGTranslate = mockReturnTrue;
    const arEl = wrapper.findAll(".eo__dropdown__menu li").at(1);
    await arEl.trigger("click");

    expect(wrapper.vm.selectedLanguageCode).toBe("ar");
  });
});
