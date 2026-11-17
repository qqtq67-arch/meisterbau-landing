import { settings } from "./settings.js";

const russian = {
  skip: "К содержанию",
  nav: "Основная навигация",
  lang: "Выбор языка",
  menu: "Меню",
  navServices: "Услуги",
  navPrices: "Цены",
  navProcess: "Как работаем",
  navContact: "Заявка",
  heroEyebrow: "СБОРКА, МОНТАЖ И МЕЛКИЙ РЕМОНТ",
  headlineOne: "Мелкий ремонт.",
  headlineTwo: "Большая",
  headlineThree: "разница.",
  heroDescription: "Соберём мебель, повесим полки, починим заедающую дверь. Сделаем те мелочи, от которых дома становится удобнее.",
  heroCta: "Оставить заявку",
  heroPrices: "Смотреть цены",
  heroImage: "Мастер устанавливает дубовую полку в берлинской квартире.",
  heroLocation: "Берлин и пригороды",
  benefitScope: "Берёмся за мелкие задачи",
  benefitPrice: "Цена до выезда",
  benefitLanguage: "На немецком и русском",
  servicesTitle: "Чем поможем.",
  servicesDescription: "От первого шкафа после переезда до ручки, которую давно пора подтянуть.",
  furnitureTitle: "Сборка мебели",
  furnitureDescription: "Соберём или разберём кровати, комоды и шкафы, в том числе мебель IKEA.",
  furnitureAction: "Оставить заявку на сборку мебели",
  wallTitle: "Монтаж на стену",
  wallDescription: "Повесим картины, зеркала, карнизы и полки. Подберём крепёж под вашу стену.",
  wallAction: "Оставить заявку на монтаж на стену",
  repairsTitle: "Мелкий ремонт",
  repairsDescription: "Отрегулируем дверцы шкафов, заменим ручки и закрепим расшатавшуюся фурнитуру.",
  repairsAction: "Оставить заявку на мелкий ремонт",
  serviceAction: "Оставить заявку",
  pricesTitle: "Согласуем цену заранее.",
  pricesDescription: "Пришлите список задач. Уточним объём работ и согласуем стоимость до выезда.",
  pricesAction: "Узнать цену моей задачи",
  priceLabel: "ПРИМЕРЫ ЦЕН",
  priceWall: "Повесить одну полку",
  priceFurniture: "Собрать комод",
  priceRepairs: "Несколько мелких задач · 2 часа",
  from: "от",
  priceFootnote: "Примерные цены для демоверсии. Выезд и материалы указываются в предложении.",
  processTitle: "Как всё устроено.",
  stepOneTitle: "Опишите задачу",
  stepOneDescription: "Расскажите, что нужно сделать, и укажите почтовый индекс.",
  stepTwoTitle: "Согласуем условия",
  stepTwoDescription: "Уточним детали и договоримся с вами о цене и времени.",
  stepThreeTitle: "Выполним работу",
  stepThreeDescription: "Привезём нужные инструменты и вместе с вами проверим результат.",
  contactKicker: "Контакты",
  contactTitle: "Что нужно сделать дома?",
  contactDescription: "Шкаф, полка или целый список? Коротко опишите задачу на русском или немецком.",
  formTitle: "Ваша заявка",
  formService: "Услуга",
  formChoose: "Выберите услугу",
  formOther: "Несколько задач / другое",
  formPostcode: "Почтовый индекс",
  formPostcodeHint: "Например, 10997",
  formDetails: "Что нужно сделать?",
  formDetailsHint: "Например, собрать комод и повесить две полки.",
  formDemoNote: "Демоверсия. Черновик можно скопировать. Заявка не отправляется.",
  formAction: "Подготовить заявку",
  faqLabel: "Перед заявкой",
  faqTitle: "Частые вопросы.",
  faqOneTitle: "Можно объединить несколько задач?",
  faqOne: "Да. Перечислите всё в одном сообщении, чтобы мы могли спланировать время на весь объём работ.",
  faqTwoTitle: "Что пригодится для оценки работы?",
  faqTwo: "Укажите количество, размеры и модель мебели. Для настенного монтажа полезно знать материал стены. Фото можно приложить в выбранном канале связи.",
  faqThreeTitle: "Куда вы выезжаете?",
  faqThree: "Сервис рассчитан на Берлин. Возможность выезда за город уточняем по почтовому индексу.",
  footerDemo: "FEINWERK Berlin · демоверсия сайта",
  privacy: "Конфиденциальность",
  close: "Закрыть",
  previewTitle: "Черновик заявки готов.",
  previewDemo: "В демоверсии текст можно скопировать. Контакты мастера пока не указаны.",
  previewMessage: "Текст заявки",
  copy: "Скопировать текст",
  legalDemo: "Это закрытая демоверсия. Полные сведения о владельце сайта по § 5 DDG будут добавлены перед публичным запуском.",
  legalOperator: "Владелец / правовая форма",
  legalAddress: "Юридический адрес",
  legalContact: "Контакты",
  legalPending: "Будет добавлено",
  privacyDemo: "Черновик заявки формируется в вашем браузере. Сайт не сохраняет и не отправляет содержимое формы.",
  privacyLocal: "Настройка языка хранится в браузере. На сайте нет собственных счётчиков и инструментов аналитики.",
  privacyPending: "Информация об операторе, хостинге и каналах связи будет добавлена перед публичным запуском.",
};

const dynamicCopy = {
  de: {
    subject: "Anfrage an FEINWERK Berlin",
    detailsError: "Bitte beschreiben Sie die Aufgabe mit mindestens 10 Zeichen.",
    copied: "Text in die Zwischenablage kopiert.",
    copyFallback: "Der Text ist markiert. Bitte kopieren Sie ihn über das Menü oder die Tastatur.",
    liveFormNote: "Sie können Ihre Anfrage prüfen und im gewählten Kontaktkanal senden.",
    livePreviewNote: "Sie können die Anfrage im Kontaktkanal prüfen und selbst absenden.",
    priceFootnote: "Anfahrt und Material werden im Angebot ausgewiesen.",
    description: "FEINWERK Berlin. Möbel aufbauen, Regale montieren und kleine Dinge zu Hause reparieren. Auf Deutsch und Russisch.",
    title: "FEINWERK Berlin — Montage & Kleinreparaturen",
    sendEmail: "E-Mail öffnen",
    sendWhatsApp: "WhatsApp öffnen",
    sendTelegram: "Telegram öffnen",
    call: "Anrufen",
    manualContact: "Kopieren Sie den Text oder nennen Sie die Angaben am Telefon.",
  },
  ru: {
    subject: "Заявка в FEINWERK Berlin",
    detailsError: "Опишите задачу. Нужно не менее 10 символов.",
    copied: "Текст скопирован в буфер обмена.",
    copyFallback: "Текст выделен. Скопируйте его с помощью меню или клавиатуры.",
    liveFormNote: "Вы сможете проверить черновик и отправить его через выбранный канал.",
    livePreviewNote: "Откройте канал связи, проверьте текст и отправьте его.",
    priceFootnote: "Выезд и материалы указываются в предложении.",
    description: "FEINWERK Berlin. Сборка мебели, навеска полок и мелкий ремонт по дому в Берлине. На немецком и русском.",
    title: "FEINWERK Berlin — сборка, монтаж и мелкий ремонт",
    sendEmail: "Открыть почту",
    sendWhatsApp: "Открыть WhatsApp",
    sendTelegram: "Открыть Telegram",
    call: "Позвонить",
    manualContact: "Скопируйте текст или сообщите детали по телефону.",
  },
};

const translations = [...document.querySelectorAll("[data-t], [data-aria], [data-alt], [data-placeholder]")].map((element) => {
  const [field, attribute] = [["t", null], ["aria", "aria-label"], ["alt", "alt"], ["placeholder", "placeholder"]]
    .find(([key]) => key in element.dataset);
  return {
    element,
    key: element.dataset[field],
    attribute,
    german: attribute ? element.getAttribute(attribute) : element.textContent,
  };
});

const form = document.querySelector("#request-form");
const service = document.querySelector("#service");
const details = form.elements.namedItem("details");
const preview = document.querySelector("#request-preview");
const message = document.querySelector("#preview-message");
const copyStatus = document.querySelector("#copy-status");
const send = document.querySelector("#send-request");
const { whatsapp, telegram, phone, email } = settings.contact;
const contacts = settings.preview ? [] : [
  { label: "WhatsApp", href: whatsapp && `https://wa.me/${whatsapp}` },
  { label: "Telegram", href: telegram && `https://t.me/${telegram}` },
  { label: phone, href: phone && `tel:${phone.replace(/[^+\d]/g, "")}` },
  { label: email, href: email && `mailto:${email}` },
].filter((contact) => contact.href);
const canPrefill = Boolean(whatsapp || email);
let language = "de";

function setLanguage(next) {
  language = next;
  document.documentElement.lang = next;
  const copy = dynamicCopy[next];
  document.title = copy.title;
  document.querySelector('meta[name="description"]').content = copy.description;
  for (const { element, key, attribute, german } of translations) {
    const value = next === "ru" ? (russian[key] ?? german) : german;
    if (attribute) element.setAttribute(attribute, value);
    else element.textContent = value;
  }
  for (const button of document.querySelectorAll("[data-lang]")) {
    button.setAttribute("aria-pressed", String(button.dataset.lang === next));
  }
  details.setCustomValidity("");
  if (contacts.length) {
    document.querySelector("#form-note").textContent = copy.liveFormNote;
    document.querySelector("#preview-note").textContent = canPrefill ? copy.livePreviewNote : copy.manualContact;
  }
  if (!settings.preview) {
    document.querySelector(".price-footnote").textContent = copy.priceFootnote;
    document.querySelector("[data-t='footerDemo']").textContent = "FEINWERK Berlin";
    document.querySelector("[data-t='legalDemo']").textContent = settings.legal[next].imprint;
    document.querySelector("[data-t='privacyDemo']").textContent = settings.legal[next].privacy;
    document.querySelector("[data-t='privacyLocal']").hidden = true;
    document.querySelector("[data-t='privacyPending']").hidden = true;
    for (const [id, value] of Object.entries(settings.business)) {
      document.querySelector(`#legal-${id}`).textContent = value;
    }
  }
}

try {
  if (localStorage.getItem("feinwerk-language") === "ru") language = "ru";
} catch {
  // Language switching remains available when browser storage is disabled.
}
setLanguage(language);

for (const button of document.querySelectorAll("[data-lang]")) {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
    try {
      localStorage.setItem("feinwerk-language", language);
    } catch {
      // Storage is optional.
    }
  });
}

const directContacts = document.querySelector("#direct-contacts");
for (const { label, href } of contacts) {
  const item = document.createElement("li");
  const link = document.createElement("a");
  link.href = href;
  link.textContent = label;
  item.append(link);
  directContacts.append(item);
}
directContacts.hidden = contacts.length === 0;

const menu = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");
function setMenu(open) {
  menu.setAttribute("aria-expanded", String(open));
  navigation.classList.toggle("is-open", open);
}
menu.addEventListener("click", () => setMenu(menu.getAttribute("aria-expanded") !== "true"));
navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenu(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navigation.classList.contains("is-open")) {
    setMenu(false);
    menu.focus();
  }
});

for (const link of document.querySelectorAll("[data-service]")) {
  link.addEventListener("click", () => { service.value = link.dataset.service; });
}
for (const trigger of document.querySelectorAll("[data-open]")) {
  trigger.addEventListener("click", () => document.getElementById(trigger.dataset.open).showModal());
}

details.addEventListener("input", () => details.setCustomValidity(""));
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const copy = dynamicCopy[language];
  if (details.value.trim().length < 10) {
    details.setCustomValidity(copy.detailsError);
    details.reportValidity();
    return;
  }

  const postcode = form.elements.namedItem("postcode").value;
  const label = (key) => document.querySelector(`[data-t="${key}"]`).textContent;
  message.value = [
    copy.subject,
    "",
    `${label("formService")}: ${service.selectedOptions[0].textContent}`,
    `${label("formPostcode")}: ${postcode}`,
    "",
    details.value.trim(),
  ].join("\n");

  if (contacts.length) {
    const encoded = encodeURIComponent(message.value);
    let action = { href: contacts[0].href, label: telegram ? copy.sendTelegram : copy.call };
    if (whatsapp) {
      action = { href: `https://wa.me/${whatsapp}?text=${encoded}`, label: copy.sendWhatsApp };
    } else if (email) {
      action = {
        href: `mailto:${email}?subject=${encodeURIComponent(copy.subject)}&body=${encoded}`,
        label: copy.sendEmail,
      };
    }
    send.href = action.href;
    document.querySelector("#send-label").textContent = action.label;
    send.hidden = false;
  }

  copyStatus.textContent = "";
  preview.showModal();
});

form.querySelector("fieldset").disabled = false;

document.querySelector("#copy-request").addEventListener("click", async () => {
  const copy = dynamicCopy[language];
  try {
    await navigator.clipboard.writeText(message.value);
    copyStatus.textContent = copy.copied;
  } catch {
    message.focus();
    message.select();
    copyStatus.textContent = copy.copyFallback;
  }
});

if ("IntersectionObserver" in window) {
  const cta = document.querySelector(".mobile-cta");
  const mobile = matchMedia("(max-width: 565px)");
  const watched = [document.querySelector(".hero-actions"), document.querySelector("#kontakt")];
  const visible = new Map();
  function updateCta() {
    const show = mobile.matches && visible.size === watched.length && ![...visible.values()].some(Boolean);
    cta.hidden = !show;
    document.body.classList.toggle("has-mobile-cta", show);
  }
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) visible.set(entry.target, entry.isIntersecting);
    updateCta();
  });
  for (const element of watched) observer.observe(element);
  mobile.addEventListener("change", updateCta);
}
