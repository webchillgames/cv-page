import { t } from "@/js/translate.js";

export const PERSONAL = [
  { id: 1, type: "VACANCY", data: t("personal.vacancy") },
  { id: 2, type: "AGE", data: 26 },
  { id: 3, type: "PHONE", data: "+7 (925) 146 84 56" },
  { id: 4, type: "EMAIL", data: "anna.web.dev1@gmail.com" },
  { id: 5, type: "LOCATION", data: t("personal.location") },
];

export const SOCIALS = [
  { id: 1, link: "", icon: "" },
  { id: 2, link: "", icon: "" },
];

export const EDUCATION = [
  {
    id: 1,
    name: t("education.htmlAcademy"),
    period: t("education.item1.period"),
    course: t("education.item1.course"),
    certificate: "",
  },
  {
    id: 2,
    name: t("education.udemy"),
    period: t("education.item2.period"),
    course: t("education.item2.course"),
    certificate: "",
  },
  {
    id: 3,
    name: t("education.htmlAcademy"),
    period: t("education.item3.period"),
    course: t("education.item3.course"),
    certificate: "",
  },
  {
    id: 4,
    name: t("education.htmlAcademy"),
    period: t("education.item4.period"),
    course: t("education.item4.course"),
    certificate: "",
  },
];
