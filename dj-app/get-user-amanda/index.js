const playwright = require("@playwright/test");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Person = require("./class/persons");
const PersonInAmanda = require("./model/person");

const URL =
  "https://amanda.reservame.cl/i/?e=NUNO&I=bleiva&mail=rrss1@amanda.cl";

dotenv.config();
mongoose.connect(process.env.MONGO_URI);

(async () => {
  const browser = await playwright.chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(URL);

  for (let i = 180000000; i <= 180000005; i++) {
    console.log("Rut: ", i);
    await page.locator("#usrRut").fill(`${i}`);
    await page.locator("#form1").click();
    const isVisible = await page.locator("#usrRut").getAttribute("class");

    if (isVisible.includes("error")) {
      console.log("Person not found");
    } else {
      try {
        await page.locator("#sumbit2").click();
        const rutInput = page.locator("#RUTOK");
        await rutInput.waitFor();
        const personRut = await rutInput.getAttribute("value");

        const personGender = await page
          .getByRole("radio")
          .evaluateAll((node) => {
            return node.checked.getAttribute("value");
          });
        console.log(personGender);
        const personName = await page.locator("#nombre").getAttribute("value");
        const personBornDate = await page
          .locator("#FNtime")
          .getAttribute("value");
        const personPhone = await page.locator("#wssp").getAttribute("value");
        const personEmail = await page.locator("#email").getAttribute("value");
        const personSocialNetwork = await page
          .locator("#instagram")
          .getAttribute("value");
        const personFrecuency = await page
          .getByText("Ha asistido 12 veces. ")
          .innerText("value");

        if (personName === "") {
          await page.goBack();
          return;
        }

        const newPerson = new Person(
          personRut,
          personGender,
          personName,
          personBornDate,
          personPhone,
          personEmail,
          personSocialNetwork,
          personFrecuency
        );

        const newPersonToAdd = new PersonInAmanda(newPerson);
        await newPersonToAdd.save();

        await page.goBack();
        console.log("Person added: ", newPerson);
      } catch (error) {
        await page.goBack();
        console.log("Person not added because blank");
      }
    }
  }

  await browser.close();
})();
