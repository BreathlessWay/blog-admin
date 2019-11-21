import { observable, action, computed } from "mobx";
import { storage } from "@/utils";

import { UserDetailType } from "@/store/UserStore/user";

export default class UserStore {
  @observable
  session = "";

  @observable
  userDetail: UserDetailType = {
    resumeAlias: "",
    resumeUrl: "",
    resumeName: "",
    resumeImageUrl: "",
    social: [],
    personalImage: [],
    en: "",
    zh: "",
    intro: ""
  };

  emptySocialTmp = {
    icon: "",
    value: ""
  };

  @action.bound
  login(token: string) {
    this.session = token;
    storage.set({ key: "token", value: "login" });
  }

  @action.bound
  logout() {
    this.session = "";
    storage.remove("token");
  }

  @action.bound
  addSocial() {
    this.userDetail.social.push(this.emptySocialTmp);
  }

  @action.bound
  deleteSocial(index: number) {
    this.userDetail.social.splice(index, 1);
  }

  @action.bound
  filterSocial() {
    this.userDetail.social = this.userDetail.social.filter(
      item => item.value || item.icon
    );
  }

  @action.bound
  changeSocialIcon({ fileUrl, index }: { fileUrl: string; index: number }) {
    this.userDetail.social[index].icon = fileUrl;
  }

  @action.bound
  changeSocialValue({ value, index }: { value: string; index: number }) {
    this.userDetail.social[index].value = value.trim();
  }

  @action.bound
  changeResume({ fileUrl, fileName }: { fileUrl: string; fileName: string }) {
    this.userDetail.resumeUrl = fileUrl;
    this.userDetail.resumeName = fileName;
  }

  @action.bound
  changeResumeAlias(alias: string) {
    this.userDetail.resumeAlias = alias.trim();
  }

  @action.bound
  removePersonalImage(index: number) {
    this.userDetail.personalImage.splice(index, 1);
  }

  @action.bound
  addPersonalImage(fileUrl: string) {
    this.userDetail.personalImage.push({
      url: fileUrl,
      default: this.personalImageLength === 0
    });
  }

  @action.bound
  setAsDefaultPersonalImage(index: number) {
    this.userDetail.personalImage.forEach((item, i) => {
      item.default = i === index;
    });
  }

  @action.bound
  setMotto({ key, value }: { key: "en" | "zh" | "intro"; value: string }) {
    this.userDetail[key] = value;
  }

  @computed
  get personalImageLength() {
    return this.userDetail.personalImage.length;
  }

  @computed
  get isLogin() {
    return this.session !== "";
  }
}
