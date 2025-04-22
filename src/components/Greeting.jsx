import { useLang } from "./LangContext";

function Greeting() {
  const { state } = useLang();
  const translations = {
    kz: "Cәлем,дос!,Қалың қалай?!",
    en: "Hello,friend.How are you?!",
    ru: "Привет,друг.Как дела?!"
  };
  return (
  <h2>{translations[state.language]}</h2>
  )
}

export default Greeting;
