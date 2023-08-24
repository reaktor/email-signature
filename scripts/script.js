const offices = {
    ams: {
        address: `Looiersgracht 32H<br/>
    &nbsp;&nbsp;&nbsp;Amsterdam 1016 VS<br/>
    &nbsp;&nbsp;&nbsp;The Netherlands`,
        prefix: "(NL) +31"
    },
    hel: {
        address: `Yliopistonkatu 4<br/>
    &nbsp;&nbsp;&nbsp;00100 Helsinki<br/>
    &nbsp;&nbsp;&nbsp;Finland`,
        prefix: "(FIN) +358",
    },
    lis: {
        address: `Avenida António Augusto de Aguiar 122C<br/>
    &nbsp;&nbsp;&nbsp;1050-046 Lisboa<br/>
    &nbsp;&nbsp;&nbsp;Portugal`,
        prefix: "(PT) +351",
    },
    nyc: {
        address: `30 West 21st Street 14th floor<br/>
    &nbsp;&nbsp;&nbsp;New York, NY 10010<br/>
    &nbsp;&nbsp;&nbsp;United States`,
        prefix: "(USA) +1",
    },
    sei: {
        address: `Keskuskatu 5<br/>
    &nbsp;&nbsp;&nbsp;60100 Seinäjoki<br/>
    &nbsp;&nbsp;&nbsp;Finland`,
        prefix: "(FIN) +358",
    },
    sto: {
        address: `Mäster Samuelsgatan 36<br/>
    &nbsp;&nbsp;&nbsp;111 57 Stockholm<br/>
    &nbsp;&nbsp;&nbsp;Sweden`,
        prefix: "(SWE) +46",
    },
    tam: {
        address: `Kehräsaari A 3rd floor<br/>
    &nbsp;&nbsp;&nbsp;33200 Tampere<br/>
    &nbsp;&nbsp;&nbsp;Finland`,
        prefix: "(FIN) +358",
    },
    tok: {
        address: `Sreed EBISU 2, 4F<br/>
     &nbsp;&nbsp;&nbsp;Ebisu 3-28-2 - Shibuya-ku<br/>
        &nbsp;&nbsp;&nbsp;Tokyo 150-0013<br/>
        &nbsp;&nbsp;&nbsp;Japan<br/>`,
        prefix: "(JP) +81",
    },
    tur: {
        address: `Läntinen Rantakatu 15<br/>
    &nbsp;&nbsp;&nbsp;20100 Turku<br/>
    &nbsp;&nbsp;&nbsp;Finland`,
        prefix: "(FIN) +358",
    }
}

const defaultOffice = "ams";

const setField = (id, value) => {
    document.getElementById(id).innerHTML = `&nbsp;&nbsp;&nbsp;${value}`;
};

setField("nameField", "Vernie G Hale (they/them)");
setField("titleField", "Senior Software Developer");
setField("emailField", "vernie@reaktor.com");
setField("signOffField", "Best Regards,");
setField("phoneField", `${offices[defaultOffice].prefix} 6 47543729`);
setField("officeField", offices[defaultOffice].address);

const phoneInput = document.getElementById("phoneInput");
phoneInput.value = offices[defaultOffice].prefix + " ";

const checkbox = document.getElementById("animate");
checkbox.addEventListener("change", () => {
    const logo = document.getElementById("logo");
    const bgRadioGroup = document.getElementsByName("bg");

    if (bgRadioGroup[0].checked) {
        logo.src = checkbox.checked
            ? "./assets/logo_black_animated.gif"
            : "./assets/logo_black.svg";
    } else {
        logo.src = checkbox.checked
            ? "./assets/logo_white_animated.gif"
            : "./assets/logo_white.svg";
    }
});

const signatureElement = document.getElementById("signature");
const logo = document.getElementById("logo");

const bgRadioGroup = document.getElementsByName("bg");
bgRadioGroup.forEach((radio) => {
    radio.addEventListener("change", () => {
        checkbox.checked = false;

        if (radio.value === "blackBackground") {
            signatureElement.classList.remove("signature__bg-white");
            signatureElement.classList.add("signature__bg-black");
            logo.src = "./assets/logo_white.svg";
        } else {
            signatureElement.classList.add("signature__bg-white");
            signatureElement.classList.remove("signature__bg-black");
            logo.src = "./assets/logo_black.svg";
        }
    });
});

const officesRadioGroup = document.getElementsByName("office");
officesRadioGroup.forEach((radio) => {
    radio.addEventListener("change", () => {
        const selectedOffice = radio.value;
        setField("officeField", offices[selectedOffice].address);
        setField("phoneField", offices[selectedOffice].prefix);
        phoneInput.value = offices[selectedOffice].prefix + " ";
    });
});

const inputFields = ["nameInput", "titleInput", "emailInput", "phoneInput", "signOffInput"];
inputFields.forEach((field) => {
    const input = document.getElementById(field);
    input.addEventListener("input", () => {
        setField(`${field.replace("Input", "Field")}`, input.value);
    });
});

const copyButton = document.getElementById("copyButton");
copyButton.addEventListener("click", () => {
    copyButton.innerHTML = "Copied!";
    const copyContainer = document.getElementById("copyContainer");
    const range = document.createRange();
    range.selectNode(copyContainer);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    setTimeout(() => {
        copyButton.innerHTML = "Copy";
    }, 1000);
});